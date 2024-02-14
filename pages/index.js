import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Header from "./header";
import Addon from "./addoncard";
import Snsbutton from "./snsbutton";
import Headline from "./headline";
import Footer from "./footer";
import collabdata from "../src/data/collabList.json";
import note from "../src/data/note.json";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>丹波津のホームページ</title>
        <meta name="description" content="丹波津(tanbatu)のリンク集です" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header></Header>
        <Link className={styles.link} href="/zouryou">
          <Addon></Addon>
        </Link>

        <div className={styles.middle}>
          <div className={styles.left}>
            <div className={styles.flex}>
              <Snsbutton
                platform={"Twitter"}
                id={"@tanbatsu"}
                link={"https://twitter.com/tanbatsu"}
              ></Snsbutton>
              <Snsbutton
                platform={"niconico"}
                id={"user/81713892"}
                link={"https://www.nicovideo.jp/user/81713892/video"}
              ></Snsbutton>
            </div>
            <div className={styles.flex}>
              <Snsbutton
                platform={"GitHub"}
                id={"@tanbatu"}
                link={"https://github.com/tanbatu"}
              ></Snsbutton>
              <Snsbutton
                platform={"YouTube"}
                id={"@tanbatu"}
                link={
                  "https://www.youtube.com/channel/UCWV1Yz-mO-sh1v9m7lYgcVw"
                }
              ></Snsbutton>
            </div>
            <Headline text={"COLLAB"}></Headline>
            {collabdata.map((data) => {
              return (
                <>
                  <a
                    className={styles.link}
                    href={`https://nicovideo.jp/watch/${data.id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={styles.collab}>
                      <p>{data.title}</p>
                      <small>{data.date}</small>
                    </div>
                  </a>
                </>
              );
            })}
          </div>
          <div className={styles.right}>
            <Headline text={"NOTE"}></Headline>
            {note.map((data) => {
              return (
                <>
                  <a
                    className={styles.link}
                    href={`${data.id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={styles.note}>
                      <p>{data.title}</p>
                      <small>{data.date}</small>
                    </div>
                  </a>
                </>
              );
            })}
          </div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
export async function getStaticProps() {
  return { props: { collabdata } };
}
