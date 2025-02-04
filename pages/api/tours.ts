import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { category } = req.query; 

    const filters: { activity?: { name: string } } = {};

    if (typeof category === "string") {
      filters.activity = { name: category };
    }

    const tours = await prisma.tour.findMany({
      where: filters,
      include: {
        images: true,
      },
    });

    res.status(200).json(tours);
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    res.status(500).json({ error: "Не удалось загрузить туры" });
  }
}
