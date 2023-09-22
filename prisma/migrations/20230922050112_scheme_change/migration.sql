-- AlterTable
ALTER TABLE `books` MODIFY `summary` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `name` TEXT NOT NULL,
    MODIFY `avatar_url` TEXT NULL;
