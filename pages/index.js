import Head from "next/head";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Secondcontainer from "../components/Secondcontainer.js";
import SingleMovie from "../components/SingleMovie.js";

export default function Home({ data }) {
  if (!data) {
    return <div>Some Error Occured</div>;
  }
  return (
    <body>
      <Head>
        <title>Home | MovieApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Secondcontainer>
        <div>
            <h2 className="section-title">
              Harry Potter Collections
            </h2>
            <div className="row">
              {data.harry.map((e, i) => {
                return <SingleMovie key={i} data={e} />;
              })}
            </div>
          </div>
          <div>
            <h2 className="section-title">
              Lord Of The Rings Collections
            </h2>
            <div className="row">
              {data.rings.map((e, i) => {
                return <SingleMovie key={i} data={e} />;
              })}
            </div>
          </div>
          <div>
            <h2 className="section-title">
              Jurassic Park Collections
            </h2>
            <div className="row">
              {data.jurassic.map((e, i) => {
                return <SingleMovie key={i} data={e} />;
              })}
            </div>
          </div>
        </Secondcontainer>
      </main>
      <Footer />
    </body>
  );
}

export const getServerSideProps = async ({ params, res }) => {
  try {
    const harryPotterFetch = await fetch(
      "https://omdbapi.com/?s=Harry%20Potter&apikey=74e9a1d2"
    );
    const harryPotter = await harryPotterFetch.json();
    const lordOfRingsFetch = await fetch(
      "https://omdbapi.com/?s=The%20Lord%20Of%20The%20Rings:&apikey=74e9a1d2"
    );
    const lordOfRings = await lordOfRingsFetch.json();
    const jurassicFetch = await fetch(
      "https://omdbapi.com/?s=Jurassic&apikey=74e9a1d2"
    );
    const jurassic = await jurassicFetch.json();
    return {
      props: {
        data: {
          harry: harryPotter.Search,
          rings: lordOfRings.Search,
          jurassic: jurassic.Search,
        },
      },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};
