import Head from 'next/head';
import Card from '../components/Card';

export default function Home() {
  return (
    <>
      <Head>
        <title>Orvith Professional Card</title>
        <meta name="description" content="Professional card portfolio created with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      
      <main>
        <Card
          name="Orvith"
          position="Web Developer"
          aboutMe={`Hi there! I'm ORVITH, a seasoned web developer passionate about crafting clean and dynamic websites. With 5 years of experience, I specialize in front-end and back-end development using HTML, CSS, JavaScript, and frameworks like React and Next.js.\n\nI thrive on creating user-centric designs and optimizing performance for seamless browsing experiences.\n\nLet's collaborate TOGETHER!`}
          linkedin="https://www.linkedin.com/in/#"
          github="https://github.com/webpurposeslimited"
          cvLink="/files/resume-cv.pdf"
          profileImage="/images/pfp.webp"
        />
      </main>
    </>
  );
}
