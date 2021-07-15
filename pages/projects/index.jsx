import React from 'react';
import fs from 'fs';
import path from 'path';
import Head from 'next/head'
import matter from 'gray-matter'; //get metadata

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import MyNavbar from '../../components/mynavbar.component';
import styles from '../../styles/Projects.module.css';

const ProjectsPage = ({titles, firsttwohundredchars, paths}) => {
    return (
        <div>
            <Head>
                <title>Projects</title>
                <meta name="description" content="My Projects"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MyNavbar/>
            <Container fluid="md">
                {titles.map((title, i) => (
                    <Card key={i} className={styles.card}>
                        <Card.Header as="h5">{title}</Card.Header>
                        <Card.Body >
                            <Card.Text >
                                {firsttwohundredchars[i]}
                            </Card.Text>
                            <div className={styles.buttoncontainer}><Button variant="dark" href={`/projects/${paths[i]}`} className={styles.button}>Read more</Button></div>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </div>
    )
};

export const getStaticProps = async () => { 
    const files = fs.readdirSync('projects');//gets the file names in the folder
    const markdownWithMetadata = files.map(file => fs.readFileSync(path.join('projects', file), 'utf8'));
    var parsedMarkdown = markdownWithMetadata.map(data => matter(data));
    //sort based on date
    parsedMarkdown.sort(function(a,b) {
        return Date.parse(a.data.date) - Date.parse(b.data.date)
    });
    parsedMarkdown = parsedMarkdown.reverse(); //flip the array
    const titles = parsedMarkdown.map(parsed => parsed.data.title);
    const firsttwohundredchars = parsedMarkdown.map(parsed => parsed.data.firsttwohundredchars);
    const paths = parsedMarkdown.map(parsed => parsed.data.path);
    return {
        props: {
            titles,
            firsttwohundredchars,
            paths
        }
    }
}



export default ProjectsPage;