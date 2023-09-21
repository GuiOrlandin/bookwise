import { prisma } from "@/lib/prisma";
import { getMostFrequentCategory } from "@/utils/getMostFrequentCategory";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const lastReadBook = Boolean(req.query.lastReadBook);
  const userId = String(req.query.userId);

  const UserValidated = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
        orderBy: {
          created_at: "desc",
        },
      },
    },
  });

  if (lastReadBook === true) {
    const userLastReadBook = await prisma.rating.findFirst({
      where: {
        user_id: userId,
      },
      include: {
        book: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return res.json({ userLastReadBook });
  }

  const profilePagesReads = await prisma.book.aggregate({
    where: {
      id: {
        in: UserValidated?.ratings.map((book) => book.book_id),
      },
    },
    _sum: {
      total_pages: true,
    },
  });

  const categoriesName = UserValidated?.ratings.reduce<string[]>(
    (acc, ratings) => {
      ratings.book.categories.forEach((categories) => {
        const categoryName = categories.category.name;
        acc.push(categoryName);
      });
      return acc;
    },
    []
  );

  const mostReadCategory = categoriesName
    ? getMostFrequentCategory(categoriesName)
    : null;

  const ProfileWithPageRead = {
    ...UserValidated,
    total_pages: profilePagesReads._sum.total_pages,
    mostReadCategory,
  };

  return res.json({ ProfileWithPageRead });
}
