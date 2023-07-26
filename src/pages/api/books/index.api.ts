// /api/book?bookId=48b86ac2-014e-401d-bcbb-331ce5f4a457

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

  const listOfBooks = await prisma.book.findMany({
    include: {
      ratings: true,
    },
  });

  const booksAvgRating = await prisma.rating.groupBy({
    by: ["book_id"],
    _avg: {
      rate: true,
    },
  });

  return res.json({ listOfBooks });
}
