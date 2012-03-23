ALTER TABLE `dashboard`.`site` ADD COLUMN `status` VARCHAR(20)  AFTER `district_id`;
ALTER TABLE `dashboard`.`site` ADD COLUMN `longitude` DOUBLE  AFTER `status`,
 ADD COLUMN `latitude` DOUBLE  AFTER `longitude`,
 ADD COLUMN `site_type` INTEGER  AFTER `latitude`;
ALTER TABLE `dashboard`.`site` ADD COLUMN `ip_address` VARCHAR(255)  AFTER `site_type`;

