-- AlterTable
ALTER TABLE `Product` ADD COLUMN `specification` VARCHAR(191) NULL,
    MODIFY `price` DECIMAL(65, 30) NULL;
