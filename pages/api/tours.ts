"use server"

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

// Создаём экземпляр Prisma Client
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Получаем все туры из базы данных
    const tours = await prisma.tour.findMany();
    res.status(200).json(tours);
  } catch (error) {
    console.error("Ошибка при получении данных:", error);

    // Отправляем корректный ответ с типом ошибки
    res.status(500).json({ error: "Не удалось получить данные туров" });
  } finally {
    // Закрываем соединение с Prisma Client
    await prisma.$disconnect();
  }
}
