import styled from "styled-components";

const _Footer = styled.footer`
background:#262936;
color: #fff;
margin: 0;
color: #bfc1c8;
font-size: 15px;
text-align:center;
padding: 20px 10px;
span{
  color: #71EFA3;
  font-weight: bold;
}
`;
function Footer() {
  return (
      <_Footer>
        All rights reserved @ Copyright 2021 <span>Lakshmanan</span>.
      </_Footer>
  );
}

export default Footer;
