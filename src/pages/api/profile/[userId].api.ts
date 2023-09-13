import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const userId = String(req.query.userId);
    const lastReadBook = Boolean(req.query.lastReadBook);

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

    const UserValidated = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      include: {
        ratings: {
          include: {
            book: true,
          },
          orderBy: {
            created_at: "desc",
          },
        },
      },
    });

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

    const ProfileWithPageRead = {
      ...UserValidated,
      total_pages: profilePagesReads._sum.total_pages,
    };

    return res.json({ ProfileWithPageRead });
  } catch (error) {
    console.error(error);
    return res.status(400).end();
  }
}
