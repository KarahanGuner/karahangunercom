---
title: ToDoList
description: "A Single Page List App"
firsttwohundredchars: "ToDoList is a single page, progressive web application that allows you to share a list with your friends and family and use it together..."
date: "2020.10.25"
---

### Description

ToDoList is a single page, progressive web application that allows you to share a list with your friends and family and use it together. You can add it to your homescreen on your phone or your PC by the click of a button. 

It is hosted on heroku: <a href="https://todolistbykarahan.herokuapp.com/" target="_blank" rel="noopener noreferrer">https://todolistbykarahan.herokuapp.com</a>

Github Repo:<a href="https://github.com/KarahanGuner/ToDoList" target="_blank" rel="noopener noreferrer">https://github.com/KarahanGuner/ToDoList</a> 

<br/>

### Technologies Used

Created by using React.js, Redux and Material-UI. The application is Client-Side rendered, it is sent to the user at the start and Javascript takes it from there. I chose to implement Firebase for authentication and the database. It has a simple API for client side rendered projects.

<br/>

### State Management

State management is an import subject in React especially if you are trying to create a single page web application. Which component to render is decided in the global state. There are different  libraries and methods to choose from when it comes to state management. I chose to go with Redux because I had experience with it and I had not tried the toolkit yet. Even though it was different than the old way, I'd say learning the toolkit was worth it. It is simpler to put everything in a slice rather than creating new files for reducers and actions. 

If I didn't want to try the toolkit I probably would have gone with Context API. Same result could be achieved and I wouldn't need to add a new library to project. Last option I considered was to do it without any additional library or the Context API. I could create a function in the parent element that changed its state and passed it into its children. The problem with that method is that if I were to add new children to the children of the original component, passing the function to the grandchildren could get complicated.

<br/>

### Search Engine Optimization (SEO) Problems

Client-Side Rendering has SEO problems. Because the initial file you send to the user is just the shell of what is to be created, search engines do not recognize it as a valid result. One way to combat this, is to ditch the client-side rendering and use server-side rendering. By going with this approach you lose the advantages provided by CSR, your server will have to work more because its pre-rendering each page for each user and also you lose the app like experience. Luckily, there is another way, "dynamic rendering". Basically, when a search engine bot tries to access a page, the website sends over a fully-rendered page; when a human tries to access a page, their browser has to render the page. More can be read here: <a href="https://www.botify.com/blog/client-side-server-side-rendering-seo" target="_blank" rel="noopener noreferrer">https://www.botify.com/blog/client-side-server-side-rendering-seo</a>

<br/>

### Final Thoughts

PWA's are app like experiences on your browser. Without having to download anything you can have the same experience. Client-Side Rendering takes a big load off of your server. SEO can be a problem, but it can be dealt with.