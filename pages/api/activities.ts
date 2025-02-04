import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const activities = await prisma.activity.findMany({
      include: {
        _count: {
          select: { tours: true }, // Получаем количество туров для каждой активности
        },
      },
    });

    res.status(200).json(activities);
  } catch (error) {
    console.error("Ошибка при получении активностей:", error);
    res.status(500).json({ error: "Не удалось загрузить активности" });
  } finally {
    await prisma.$disconnect();
  }
}
