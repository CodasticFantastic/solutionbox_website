-- AlterTable
ALTER TABLE `Product` MODIFY `description` TEXT NULL,
    MODIFY `specification` TEXT NULL;

-- AlterTable
ALTER TABLE `ProductCategory` MODIFY `description` TEXT NOT NULL;
