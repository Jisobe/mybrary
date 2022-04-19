## Overview
Create an app that allows users to catalog books in a home library.
Key functionality:
  - create new library (can have multiple)
  - add books to library (can have multiple copies but only one location?)
  - indicate if book as been loaned out and to whom
  - look up books by various means (title, author, keyword)
  - post in community area to share reviews, trade books, etc.
  - create groups?

## Models/Database

user
---
id pk
username charfield(60) fk - loaned.user
password charfield(25) (req)

posts
---
id pk
poster-username FK >- user.id (req)
title charfield(100) (req)
description textfield(255) (req)
book FK >- books.id

library
---
id pk
owner FK >- user.id
name charfield(255) (req)
public boolean

post-comments
---
id pk
commenter FK >- user.id 
postid FK >- posts.id 

books
---
id pk FK >- loaned.books
title charfield(255) (req)
description charfield(255)
author charfield(255)
location FK >- library.id (req)
loaned boolean
copies int
rating int(5)

loaned
---
id pk
books
user
loaned-to-name charfield(255)
loaned-to-user FK - user.username

## Still working items

- how to indicate 'loaned' books as part of location. boolean field in book model?
- add usernames to loaned to field in loaned models while also allowing entering custom names