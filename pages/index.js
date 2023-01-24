import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Movie Database</title>
        <meta name="description" content="IMDB Clone Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <Results />
    </div>
  );
}
