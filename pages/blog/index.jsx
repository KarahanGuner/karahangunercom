import React from 'react';
import fs from 'fs';
import path from 'path';
import Head from 'next/head'
import matter from 'gray-matter'; //get metadata

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import MyNavbar from '../../components/mynavbar.component';
import styles from '../../styles/Blog.module.css';

const BlogPage = ({titles, firsttwohundredchars, fileNames}) => {
    return (
        <div>
            <Head>
                <title>Blog | Karahan Güner</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MyNavbar/>
            <Container>
                {titles.map((title, i) => (
                    <Card key={i} className={styles.card}>
                        <Card.Header as="h5">{title}</Card.Header>
                        <Card.Body >
                            <Card.Text >
                                {firsttwohundredchars[i]}
                            </Card.Text>
                            <div className={styles.buttoncontainer}><Button variant="dark" href={`/blog/${fileNames[i]}`} className={styles.button}>Read more</Button></div>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </div>
    )
};

export const getStaticProps = async () => { 
    var files = fs.readdirSync('blogposts');//gets the file names in the folder
    //sort it chronologically. push the last file that has been created to end of array
    files.sort(function(a, b) {
        return fs.statSync('./blogposts/' + a).birthtime.getTime() - 
               fs.statSync('./blogposts/' + b).birthtime.getTime();
    });
    files = files.reverse(); //flip the array
    const fileNames = files.map(file => file.replace('.md', ''));
    const markdownWithMetadata = files.map(file => fs.readFileSync(path.join('blogposts', file), 'utf8'));
    const parsedMarkdown = markdownWithMetadata.map(data => matter(data));
    const titles = parsedMarkdown.map(parsed => parsed.data.title);
    const firsttwohundredchars = parsedMarkdown.map(parsed => parsed.data.firsttwohundredchars);
    return {
        props: {
            titles,
            firsttwohundredchars,
            fileNames
        }
    }
}



export default BlogPage;