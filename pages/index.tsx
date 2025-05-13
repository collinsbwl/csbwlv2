import Hero from '../src/components/Hero';
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Collin Sobowale</title>
        <meta name="description" content="Collin Sobowale's Portfolio" />
      </Head>

      <div className="container mx-auto px-4 min-h-screen">
        <main>
          <Hero />
        </main>
      </div>
    </>
  );
}
