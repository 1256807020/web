create database egg_article;
use egg_article;
create table article(
  id int(10) not null auto_increment,
  img text default null comment '缩略图',
  title varchar(80) default null comment '文章标题',
  summary varchar(300) default null comment '文章简介',
  content text default null comment '文章内容',
  createTime timestamp default null comment '发布时间',
  primary key(id)
)engine=InnoDB AUTO_INCREMENT=1 comment '文章表';

insert into article (title,img,summary,content,createTime) values('计算机网络','https://img.yzcdn.cn/vant/ipad.jpeg','介绍计算机基础知识','我是内容','2020-11-18');