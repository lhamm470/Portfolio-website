import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
`;

const Subtitle = styled.h3`
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
`;

const Heading = () => {
  return (
    <>
      <Title>Personal Projects</Title>
      <Subtitle>Luke Hammer</Subtitle>
      <Description>
        In my free time, I like to build software-related projects such as
        websites and games. Here are some of my projects:
      </Description>
    </>
  );
};

export default Heading;
