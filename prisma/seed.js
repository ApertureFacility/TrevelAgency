import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const usedTitles = new Set();
  const usedActivityNames = new Set();

  for (let i = 0; i < 50; i++) {
    let title;
    let activityName;

    // Ensure unique title for the Tour
    do {
      title = faker.company.catchPhrase();  
    } while (usedTitles.has(title));

    usedTitles.add(title);

    // Ensure unique activity name
    do {
      activityName = faker.hacker.verb();
    } while (usedActivityNames.has(activityName));

    usedActivityNames.add(activityName);

    try {
      // Check if the activity already exists
      let activity = await prisma.activity.findUnique({
        where: { name: activityName },
      });

      if (!activity) {
        // Create new activity if it doesn't exist
        activity = await prisma.activity.create({
          data: {
            name: activityName,
          },
        });
      }

      // Create the tour with the unique title and activity
      await prisma.tour.create({
        data: {
          title,
          description: faker.lorem.paragraph(),
          price: parseFloat(faker.commerce.price()),
          location: faker.location.city(),
          createdAt: faker.date.past(),
          activityId: activity.id,  // Associate with the unique activity
          images: {
            create: [
              { url: faker.image.url() },
              { url: faker.image.url() },
            ],
          },
        },
      });
      console.log(`Tour with title "${title}" and activity "${activityName}" created.`);
    } catch (error) {
      console.error(`Error creating tour with title "${title}":`, error);
    }
  }
}

main()
  .catch((e) => {
    console.error('Error in seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  // C:\Users\Admin\Desktop\App\Dev\Frontend\TrevelAgency> node C:/Users/Admin/Desktop/App/Dev/Frontend/TrevelAgency/prisma/seed.js