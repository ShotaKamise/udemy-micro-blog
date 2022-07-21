import Head from "next/head";
import style from "./layout.module.css";
import utilStyle from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";

const name = "Choice of Chocolatite";
export const headTitle = "Next.js Blog";

const Layout = ({ children, home }) => {
  return (
    <div className={style.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={style.header}>
        {home ? (
          <>
            <Image
              src="/images/profile.png"
              alt="画像"
              width={100}
              height={100}
              className={`${utilStyle.borderCircle} ${style.headerHomeImage}`}
            />
            <h1 className={utilStyle.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Image
              src="/images/profile.png"
              alt="画像"
              width={70}
              height={70}
              className={utilStyle.borderCircle}
            />
            <h1 className={utilStyle.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && <Link href="/">←ホームへ戻る</Link>}
    </div>
  );
};

export default Layout;
