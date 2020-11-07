---
title: This Website
description: "Technologies Used For Creating This Website"
firsttwohundredchars: "I was looking for a simple framework to create Static Websites using React when I came across Ben Awad's video on Static Site Generation(SSG) using Next.js. Before that I thought Next.js was only used..."
date: "2020.10.24"
path: "thiswebsite"
---

### Technologies Used

I was looking for a simple framework to create Static Websites using React when I came across <a href="https://www.youtube.com/watch?v=pY0vWYLDDco&t" target="_blank" rel="noopener noreferrer">Ben Awad's video</a> on Static Site Generation(SSG) using Next.js. Before that I thought Next.js was only used for Server Side Rendering and Gatsby was basically the only option for SSG. After watching Ben's video I realized that Next.js could be the framework I was looking for. <a href="https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation" target="_blank" rel="noopener noreferrer">getStaticProps</a> and <a href="https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation" target="_blank" rel="noopener noreferrer">getStaticPaths</a> make it increadibly easy to create Static Websites. You can set up projects where only thing you need to do to add a new page is to create a new markdown file and run the 'next build' script.

For styling I decided to go with <a href="https://react-bootstrap.netlify.app/" target="_blank" rel="noopener noreferrer">React Bootstrap</a>. I already had experiences using Bootstrap and I wanted to try React Bootstrap for a while. It was a nice experience, if you already have experiences with Bootstrap you'll have no trouble migrating. Other option was to use <a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">Material-UI</a> which I did not go for because Bootstrap's components were closer to what I was looking for. 

<br/>

### File Structure

This project has a simple file structure. Markdown files for projects and blog posts are stored in "projects" and "blogposts" respectively.
<div style="display:flex;justify-content:center;margin-bottom:10px"><img src="/images/projects/thiswebsite/filestructure.jpg" alt="File Structure" ></div>

<br/>

### Dependencies

Dependencies for the project can be seen below. I already mentioned why I chose to use Next.js and React-Bootstrap. I used "gray-matter" to parse metadata and "marked" to parse the content of the markdown files.
<div style="display:flex;justify-content:center;margin-bottom:10px"><img src="/images/projects/thiswebsite/dependencies.png" alt="Dependencies" ></div>

<br/>

### Final Thoughts

Building a static website with Next.js was fast and effortless. I can see myself using it in the future.