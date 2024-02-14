import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
const Addon = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.text}>
          <h1>コメント増量</h1>
          <p>
            ニコニコ動画のコメント表示数を増量、<br></br>
            及び全コメ表示がブラウザ上で出来る拡張機能です。
          </p>
        </div>
        <Image
          className={styles.image}
          src={"/images/mockup.png"}
          width={384 * 2}
          height={288 * 2}
          alt={""}
        ></Image>
      </div>
    </>
  );
};

export default Addon;
