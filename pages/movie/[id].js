import Head from "next/head";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import Secondcontainer from "../../components/Secondcontainer.js";
import styled from "styled-components";
import React from "react";

const StyledTable = styled.table`
  color: #fff;
  border-color: #373b3e;
  width: 100%;
  text-align: left;
  margin-bottom: 1rem;
  vertical-align: top;
  overflow-x: auto;
  padding: 30px 0;
  td {
    padding: 5px;
  }
`;

export default function Movie({ data }) {
  if (!data) {
    return <div>Some Error Occured</div>;
  }
  return (
    <body>
      <Head>
        <title>Movie | MovieApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Secondcontainer>
          {(() => {
            if (data.Response === "True") {
              return (
                <div className="movie">
                  <div className="cover">
                    <img
                      src={data.Poster}
                      alt={"Tde Poster For:- " + data.Poster}
                      style={{ maxHeight: "400px" }}
                    />
                  </div>
                  <h2 className="movie-title">{data.Title}</h2>
                  <br />
                  <div style={{ textAlign: "left" }}>
                    <p className="movie-date">
                      <b>One Liner Story : </b>
                      {data.Plot}
                    </p>
                  </div>
                  <StyledTable>
                    <tr>
                      <th style={{ padding: "20px" }} colSpan="3">
                        Movie Details
                      </th>
                    </tr>
                    <tr>
                      <th>Year</th>
                      <td>:</td>
                      <td>{data.Year}</td>
                    </tr>
                    <tr>
                      <th>Release</th>
                      <td>:</td>
                      <td>{data.Released}</td>
                    </tr>
                    <tr>
                      <th>IMDB Rating</th>
                      <td>:</td>
                      <td>{data.imdbRating}</td>
                    </tr>
                    <tr>
                      <th>Runtime</th>
                      <td>:</td>
                      <td>{data.Runtime}</td>
                    </tr>
                    <tr>
                      <th>Director</th>
                      <td>:</td>
                      <td>{data.Director}</td>
                    </tr>
                    <tr>
                      <th>Writer</th>
                      <td>:</td>
                      <td>{data.Writer}</td>
                    </tr>
                    <tr>
                      <th>Actors</th>
                      <td>:</td>
                      <td>{data.Actors}</td>
                    </tr>
                    <tr>
                      <th>Production</th>
                      <td>:</td>
                      <td>{data.Production}</td>
                    </tr>
                    <tr>
                      <th>Language</th>
                      <td>:</td>
                      <td>{data.Language}</td>
                    </tr>
                  </StyledTable>
                  <StyledTable>
                    {(() => {
                      if (data.Ratings.length) {
                        return (
                          <tr>
                            <th style={{ padding: "20px" }} colSpan="3">
                              Universal Ratings
                            </th>
                          </tr>
                        );
                      }
                    })()}
                    {data.Ratings.map((e, i) => {
                      return (
                        <tr key={i}>
                          <th>{e.Source}</th>
                          <td>:</td>
                          <td>{e.Value}</td>
                        </tr>
                      );
                    })}
                  </StyledTable>
                </div>
              );
            } else {
              return <h2>No Movie Found for this ID</h2>;
            }
          })()}
        </Secondcontainer>
      </main>
      <Footer />
    </body>
  );
}
export const getServerSideProps = async ({ params, res }) => {
  try {
    const id = params.id;
    const result = await fetch(
      "https://omdbapi.com/?i=" + id + "&apikey=74e9a1d2"
    );
    const data = await result.json();
    return {
      props: { data },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};
