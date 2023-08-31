import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../auth/[...nextauth].api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res)
  );

  if (!session) {
    return res.status(401).end;
  }

  try {
    const userId = String(session?.user?.id);
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

    const UserAuthenticated = await prisma.user.findFirst({
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
          in: UserAuthenticated?.ratings.map((book) => book.book_id),
        },
      },
      _sum: {
        total_pages: true,
      },
    });

    const ProfileWithPageRead = {
      ...UserAuthenticated,
      total_pages: profilePagesReads._sum.total_pages,
    };

    return res.json({ ProfileWithPageRead });
  } catch (error) {
    console.error(error);
    return res.status(400).end();
  }
}
