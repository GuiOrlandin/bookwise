import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  const { categoryId } = req.query;

  if (categoryId) {
    const categoryIdString = String(categoryId);
    const filteredBooks = await prisma.categoriesOnBooks.findMany({
      where: {
        categoryId: categoryIdString,
      },
      include: {
        category: true,
      },
    });

    return res.json({ filteredBooks });
  }

  const books = await prisma.book.findMany({
    include: {
      ratings: {
        include: {
          user: true,
        },
      },
      categories: {
        include: {
          category: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  const booksAvgRating = await prisma.rating.groupBy({
    by: ["book_id"],
    where: {
      book_id: {
        in: books.map((book) => book.id),
      },
    },
    _avg: {
      rate: true,
    },
  });

  const booksWithAvgRating = books.map((book) => {
    const bookAvgRating = booksAvgRating.find(
      (avgRating) => avgRating.book_id === book.id
    );
    return {
      ...book,
      avgRating: bookAvgRating?._avg.rate,
    };
  });

  return res.json({ booksWithAvgRating });
}
