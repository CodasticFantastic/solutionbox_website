import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const adminExists = await prisma.user.findUnique({
    where: { username: "admin" },
  });

  if (!adminExists) {
    const hashedPassword = await bcrypt.hash("admin", 10); // Zmień hasło na silniejsze w produkcji

    await prisma.user.create({
      data: {
        email: "admin@solutionbox.pl",
        username: "admin",
        password: hashedPassword,
        role: "ADMIN",
      },
    });

    console.log("Admin user created ✅");
  } else {
    console.log("Admin user already exists ⚠️");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
