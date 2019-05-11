import React from "react";
import styled from "styled-components/macro";

function Bio() {
  return (
    <Body>
      Full-stack engineer living in <b>San Francisco</b> 🌉
      <br /> Currently building a decentralized content platform{" "}
      <b>Tribes ⛺</b>
      <br /> Previously at <b>Simplr</b> 🤖and <b>Aragon</b> 🦅
    </Body>
  );
}

export default Bio;

const Body = styled.div`
  max-width: 470px;
  min-width: 140px;
  width: 50vw;
  text-align: center;
`;
