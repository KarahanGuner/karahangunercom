import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MyNavbar from  '../components/mynavbar.component';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Home | Karahan Güner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyNavbar/>
      
      <Container className={styles.container}>
        <Row>
          <Col xs={12} lg={4}>
            <div className={styles.imagecontainer}>
              <img className={styles.image} src="./images/index/merectangle.jpg" alt="me"/>
            </div>
          </Col>
          <Col xs={12} lg={8}>
            <div className={styles.aboutme}>
              I am a full stack web developer from Turkey. I have experiences from building simple static websites to robust progressive web applications with client-side rendering. My favorite technologies are: React.js, Node.js, Firebase and Express. This website has been built using Next.js.
            </div>
            <br></br>
            <div className={styles.links}>You can contact me through:    
              <a target="_blank" href="https://github.com/KarahanGuner">   <img src="./icons/githubdark.png" alt="github"/> GitHub </a>
              <a target="_blank" href="https://www.linkedin.com/in/karahan-g%C3%BCner-9b4b221a0/"><img src="./icons/linkedin.png" alt="linkedin"/> LinkedIn</a>
            </div>
            <div className={styles.links}>My Email: kkarahanguner@gmail.com</div>
          </Col>
        </Row>
      </Container>



    </div>
  )
}
