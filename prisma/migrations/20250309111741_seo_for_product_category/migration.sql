-- AlterTable
ALTER TABLE `ProductCategory` ADD COLUMN `seoDescription` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `seoTitle` VARCHAR(191) NOT NULL DEFAULT '';
