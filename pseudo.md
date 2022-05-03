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
- id pk
- username charfield(60) fk - loaned.user
- password charfield(25) (req)

posts
- id pk
- poster-username FK >- user.id (req)
- title charfield(100) (req)
- description textfield(255) (req)
- book FK >- books.id

library
- id pk
- owner FK >- user.id
- name charfield(255) (req)
- public boolean

post-comments
- id pk
- commenter FK >- user.id 
- postid FK >- posts.id 

books
- id pk FK >- loaned.books
- title charfield(255) (req)
- description charfield(255)
- author charfield(255)
- location FK >- library.id (req)
- loaned boolean
- copies int
- rating int(5)

loaned
- id pk
- books
- user
- loaned-to-name charfield(255)
- loaned-to-user FK - user.username

## Still working items

- how to indicate 'loaned' books as part of location. boolean field in book model?
- add usernames to loaned to field in loaned models while also allowing entering custom names
- look-up form data
- add password confirm in signup
- add modals to delete, add, login conf
- add alerts to delete, add
- yelp or google to lookup nearby stores
- move set user book from post and book to component
- re-eval code based on having complete user data - my-post: loading posts
- make public and private
- change routing for home page and library - home page conditional renders lib/community etc icons if user logged in
- search books based on author or title
- add book img to: NYT list, search results, library, posts
- update search book - click on book to show detail and add, add back to results (all within modal?)
- select multiple books in post update/add
- move render book to component from add post and update post
- search post based on books
- fix listing multiple books/comments on posts
- update font
- click on NYT book cover to go to book detail
- list books alphabetically in library 
- post posts by date
- in community list 5 most recent posts
## colors
- 1C658C
- 398AB9
- D8D2CB
- EEEEEE


- title 
- author_name