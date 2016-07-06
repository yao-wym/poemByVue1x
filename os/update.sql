REPLACE INTO `ocenter_hooks` (`id`, `name`, `description`, `type`, `update_time`, `addons`) VALUES
(72, 'homeIndex', '网站首页', 2, 1445828128, '');

-- -----------------------------
-- 新增积分字段 `ocenter_event_type`
-- -----------------------------
ALTER TABLE  `ocenter_ucenter_score_type` ADD  `type_value` INT( 11 ) NOT NULL
ALTER TABLE  `ocenter_ucenter_score_type` ADD  `type_key` INT( 11 ) NOT NULL
//todo 加上新增字段的语句


