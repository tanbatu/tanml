import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";
import zStyles from "../styles/Zouryou.module.scss";
import Header from "./header";
import Footer from "./footer";
import Image from "next/image";
import Iframe from "react-iframe";
import Script from "next/script";
import collabdata from "../src/data/collabList.json";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>コメント増量 - 丹波津のホームページ</title>
        <meta name="description" content="丹波津(tanbatu)のリンク集です。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header></Header>
        <div className={zStyles.main}>
          <div className={zStyles.intro}>
            <img src="/images/zouryou/logo.png"></img>
            <p>
              ニコニコ動画のコメント表示量を、過去ログを複数回呼び出す事によって増やす拡張機能です。
              <br></br>
              また、取得したコメントを保存したり、コメントの大小を変更する事が出来ます。
            </p>
            <div className={zStyles.install}>
              <a
                href="https://chrome.google.com/webstore/detail/%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E5%A2%97%E9%87%8F/eeanibgekifamcnnieknbhjcoocnpipe"
                target="_blank"
                rel="noreferrer"
              >
                <div className={zStyles.installButton}>
                  <img src="/images/zouryou/chrome.webp"></img>
                  <p>Add to Chrome</p>
                </div>
              </a>
              <a
                href="https://addons.mozilla.org/ja/firefox/addon/%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E5%A2%97%E9%87%8F/"
                target="_blank"
                rel="noreferrer"
              >
                <div className={`${zStyles.installButton} ${zStyles.firefox}`}>
                  <img src="/images/zouryou/firefox.png"></img>
                  <p>Add to Firefox</p>
                </div>
              </a>
            </div>
            <br></br>
            <div className={zStyles.install}>
              <a
                href="https://github.com/tanbatu/comment-zouryou"
                target="_blank"
                rel="noreferrer"
              >
                <div className={`${zStyles.installButton} ${zStyles.github}`}>
                  <img src="/images/zouryou/github.svg"></img>
                  <p>View on GitHub</p>
                </div>
              </a>
            </div>
          </div>
          <div className={zStyles.shK}>
            <Iframe
              url="https://embed.nicovideo.jp/watch/sm42238300?persistence=1&amp;oldScript=1&amp;referer=http%3A%2F%2Flocalhost%3A3000%2F&amp;from=0&amp;allowProgrammaticFullScreen=1"
              width="568px"
              height="319px"
              id=""
              className=""
              display="block"
              position="relative"
              frameBorder={0}
            />
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
