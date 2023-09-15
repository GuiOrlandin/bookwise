import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../auth/[...nextauth].api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
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
    const bookId = String(req.query.bookId);
    const { rate, description } = req.body;

    const useAlreadyRated = await prisma.rating.findFirst({
      where: {
        user_id: userId,
        book_id: bookId,
      },
    });

    if (useAlreadyRated) {
      return res.status(400).json({ error: "You already rated this book" });
    }

    await prisma.rating.create({
      data: {
        user_id: userId,
        book_id: bookId,
        rate: rate,
        description: description,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(400).end();
  }

  return res.status(201).end();
}
