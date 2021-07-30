import Link from "next/link";
import styled from "styled-components";

const SiteHeader = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-item: center;
  background: #181818;
  color: white;
  h1{
    @media screen and (max-width: 798px){
      font-size: 16px;
    }
  }
  ul {
    list-style: none;
    display: inline-block;
    margin: 0;
    li {
      margin-left: 5px;
      display: inline-flex;
      a {
        border: 1px solid #71efa3;
        color: #71efa3;
        border-radius: 5px;
        padding: 10px 20px;
        @media screen and (max-width: 400px){
          padding: 5px 10px;
        }
        &:hover {
          background: #71efa3;
          color: #181818;
        }
      }
    }
  }
`;
function Navbar() {
  return (
    <SiteHeader>
      <h1 style={{ margin: "0px" }}>MovieApp</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/search">Search</Link>
        </li>
      </ul>
    </SiteHeader>
  );
}

export default Navbar;
