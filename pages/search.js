import Head from "next/head";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import SingleMovie from "../components/SingleMovie.js";
import Secondcontainer from "../components/Secondcontainer.js";

const Form = styled.form`
  position: relative;
  padding: 100px 0;
  background-image: url("https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  div {
    max-width: 1000px;
    width: 90%;
    margin: auto;
    position: relative;
  }

  .inputText  {
    width: 100%;
    color: white;
    background: #181818;
    padding: 20px 50px 20px 20px;
    outline: none;
    border: none;
    border-radius: 30px;
  }
  .inputSubmit {
    color: white;
    background: #181818;
    padding: 0 40px;
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    outline: none;
    border: 2px solid #71EFA3;
    border-radius: 30px;
    &:hover{
      background: #71EFA3;
      color: #181818;
    }
  }
`;

export default function Home() {
  const [input, setInput] = useState("");
  const [submitValue, setSubmitValue] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://omdbapi.com/?s=${submitValue}&apikey=74e9a1d2`)
      .then((res) => res.json())
      .then((JsonResponse) => {
        if (JsonResponse.Response === "False") {
          setError(JsonResponse.Error);
          setData([]);
        } else {
          setError("");
          setData(JsonResponse.Search);
        }
      });
  }, [submitValue]);

  return (
    <body>
      <Head>
        <title>Search | MovieApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitValue(input);
            setData([]);
            setError("");
          }}
        >
          <div>
            <input
              type="text"
              className="inputText"
              placeholder="Search Movie with OMDB"
              onChange={(e) => setInput(e.target.value)}
            />
            <input type="submit" value="Find" className="inputSubmit"/>
          </div>
        </Form>
        <Secondcontainer>
          {(() => {
            if (!error) {
              return (
                <React.Fragment>
                  <h3 className="section-title">
                    Search results for <b style={{color:"#71EFA3"}}>` {submitValue.toUpperCase()} `</b>
                  </h3>
                  <div className="row">
                    {data.map((e, i) => {
                      return (
                        <SingleMovie key={i} data={e}/>
                      );
                    })}
                  </div>
                </React.Fragment>
              );
            } else if (!submitValue) {
              return (
                <React.Fragment>
                  <h3 className="section-title">Please Search Something ...</h3>
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                  <h3 className="section-title">An Error Occured: {error}</h3>
                </React.Fragment>
              );
            }
          })()}
        </Secondcontainer>
      </main>
      <Footer />
    </body>
  );
}
