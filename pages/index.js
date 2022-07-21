import Layout, { headTitle } from "../components/Layout";
import utilStyle from "../styles/utils.module.css";
import Link from "next/link";
import homeStyle from "../styles/Home.module.css";
import { getPostsData } from "../lib/posts";
import Head from "next/head";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{headTitle}</title>
      </Head>
      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <p>私はサーバーサイドエンジニアです</p>
      </section>
      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>📝エンジニアのブログ</h2>
        <div className={homeStyle.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <Image
                  src={thumbnail}
                  alt="画像"
                  width={950}
                  height={600}
                  className={homeStyle.thumbnailImage}
                />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilStyle.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
