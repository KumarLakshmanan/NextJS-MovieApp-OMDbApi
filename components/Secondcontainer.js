import React from "react";
import styled from "styled-components";

function Secondcontainer(props) {
  const Div = styled.div`
    padding: 70px 20px;
    background: #1e202b;
    color: white;
    text-align: center;
    .section-title {
      font-weight: 400;
      font-size: 2rem;
      color: white;
      margin-bottom: 20px;
    }

    .row {
      margin: 0 -15px;
      display: flex;
      flex-wrap: wrap;

      .col {
        width: 25%;
        margin: 15px 0;
        float: left;
        position: relative;
        text-align: left;
        @media screen and (max-width: 898px){
          width: 33.333333%;
        }
        @media screen and (max-width: 648px){
          width: 50%;
        }
        @media screen and (max-width: 480px){
          width: 100%;
        }
        .movie {
          padding: 10px;
          .movie-title {
            margin-bottom: 5px;
            font-weight: 400;
            font-size: 20px;
            color: #71EFA3;
          }
          .movie-year{
            font-weight: bold;
          }
          &:hover:after {
            content: "";
            background: #45454545;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 10;
          }
          &:hover img {
            transform: scale(1.2);
          }
          .cover {
            position: ralative;
            margin-bottom: 20px;
            cursor: pointer;
            overflow: hidden;
            img {
              display: block;
              width: 100%;
              border-radius: 5px;
              transition: all 0.5s;
            }
          }
        }
      }
    }
  `;
  return <Div>{props.children}</Div>;
}

export default Secondcontainer;
