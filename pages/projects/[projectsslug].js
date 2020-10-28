import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';//parses metadata
import Head from 'next/head';
import marked from 'marked';

import Container from 'react-bootstrap/Container';
import MyNavbar from '../../components/mynavbar.component';
import styles from '../../styles/Projectsslug.module.css';

const Post = ({htmlString, data}) => {
    return (
        <>
        <Head>
            <title>{data.title}</title>
            <meta title='description' content={data.description} />
        </Head>
        <MyNavbar/>
        <Container className={styles.container}>
            <div>
                <div dangerouslySetInnerHTML={{__html: htmlString}}/>
            </div>
            <div className={styles.footer}>-Written on {data.date}</div>
        </Container>
        </> 
    )
}

export const getStaticPaths = async () => { 
    const files = fs.readdirSync('projects');
    const paths = files.map(filename => ({
        params: {
            projectsslug: filename.replace('.md', '')
        }
    }));
    return{
        paths, 
        fallback: false 
    }
}

export const getStaticProps = async ({params: {projectsslug}}) => { 
    const markdownWithMetadata = fs.readFileSync(path.join('projects', projectsslug + '.md'), 'utf8');
    const parsedMarkdown = matter(markdownWithMetadata);
    const htmlString = marked(parsedMarkdown.content);
    return {
        props: {
            htmlString,
            data: parsedMarkdown.data
        }
    }
}

export default Post;