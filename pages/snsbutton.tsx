import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

const snsbutton = (props: { id: any; platform: any; link: any }) => {
  let platform = props.platform;
  let id = props.id;
  let link = props.link;
  return (
    <div className={styles.snsbutton}>
      <a href={link} target="_blank" rel="noreferrer"></a>
      <Image
        className={styles.Image}
        src={`/images/${platform}.svg`}
        width={60}
        height={60}
        alt="My avatar"
      ></Image>
      <div className={styles.text}>
        <h3>{platform}</h3>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default snsbutton;
