import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

const headline = (props: { text: any }) => {
  let text = props.text;
  return (
    <div className={styles.headline}>
      <p>{text}</p>
    </div>
  );
};

export default headline;
