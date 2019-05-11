import React from "react";
import { Link, navigate } from "@reach/router";
import styled from "styled-components/macro";
import Bio from "./Bio";
import headshot from "../media/headshot.png";
import medium from "../media/medium.svg";
import twitter from "../media/twitter.svg";
import linkedin from "../media/linkedin.svg";
import github from "../media/github.svg";

function Home() {
  return (
    <FlexBox>
      <div>
        <HeadImg src={headshot} />
      </div>
      <Title>Derek Alia</Title>
      <Bio />
      {/* <ResumeHolder>
        <Link style={{ "text-decoration": "none", color: "black" }} to="resume">
          Resume
        </Link>
      </ResumeHolder> */}
      <LinkHolder>
        <SocialImg
          src={github}
          onClick={() => {
            navigate(`https://github.com/derekalia`);
          }}
        />
        <SocialImg
          src={twitter}
          onClick={() => {
            navigate(`http://twitter.com/derekalia`);
          }}
        />
        <SocialImg
          src={linkedin}
          onClick={() => {
            navigate(`https://www.linkedin.com/in/derekalia/`);
          }}
        />
        <SocialImg
          src={medium}
          onClick={() => {
            navigate(`https://medium.com/@derekalia`);
          }}
        />
      </LinkHolder>
    </FlexBox>
  );
}

export default Home;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10%;
`;

const HeadImg = styled.img`
  width: 250px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin: 30px;
`;

const ResumeHolder = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: left;
  display: flex;
  font-weight: bold;
`;

const SocialImg = styled.img`
  width: 40px;
`;

const LinkHolder = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
  margin-bottom: 40px;
  max-width: 450px;
  min-width: 140px;
  width: 50vw;
  justify-content: space-around;
`;
