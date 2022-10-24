CREATE TABLE blog.Roles
(
	Id			int 			not null IDENTITY(1,1) PRIMARY KEY,
	RoleName	varchar(500) 	not null
);
CREATE TABLE blog.Users
(
	Id			int 			not null IDENTITY(1,1) PRIMARY KEY,
	Lastname	varchar(150) 	not null,
	Firstname	varchar(150) 	not null,
	Email		varchar(150) 	not null,
	RoleId		int 			not null FOREIGN KEY REFERENCES blog.Roles (Id),
	Avatar	varchar(1000) 	null,
	Passwd		varchar(800) 	not null
);
CREATE TABLE blog.Posts
(
	Id			int 			not null IDENTITY(1,1) PRIMARY KEY,
	Title		varchar(500) 	not null,
	CreatedDate	date	 		not null DEFAULT (SYSDATETIME ()),
	About		varchar(2000) 	not null,
	UserId		int 			not null FOREIGN KEY REFERENCES blog.Users (Id),
	ViewsCount	int 			not null,
	LikesCount	int 			not null,
	DislikesCount	int 		not null
);
CREATE TABLE blog.PostTexts
(
	Id			int 			not null IDENTITY(1,1) PRIMARY KEY,
	PostId		int 			not null FOREIGN KEY REFERENCES blog.Posts (Id),
	Post		varchar(max) 	not null
);
CREATE TABLE blog.Likes
(
	Id			int 			not null IDENTITY(1,1) PRIMARY KEY,
	PostId		int 			not null FOREIGN KEY REFERENCES blog.Posts (Id),
	UserId		int 			not null FOREIGN KEY REFERENCES blog.Users (Id),
	LikeDislike	bit 			not null
);
ALTER TABLE [blog].[Likes]
ADD CONSTRAINT Unic_Likes UNIQUE (PostId, UserId);