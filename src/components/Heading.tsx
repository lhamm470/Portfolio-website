import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  margin: 0 0 48px;
  padding: clamp(56px, 8vw, 88px) clamp(20px, 4vw, 36px) 44px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(180deg, var(--accent-bg), transparent);
`;

const Title = styled.h1`
  margin: 0 0 12px;
  font-size: clamp(2.5rem, 6vw, 3.75rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.05em;
  text-align: center;
`;

const Subtitle = styled.h2`
  margin: 0 0 24px;
  color: var(--accent);
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.3;
  text-align: center;
`;

const Description = styled.p`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  color: var(--text);
  line-height: 1.75;
  text-align: center;
`;

const Heading = () => {
  return (
    <Container>
      <Title>Personal Projects</Title>
      <Subtitle>Luke Hammer</Subtitle>
      <Description>
        In my free time, I like to build software-related projects such as
        websites and games. Here are some of my projects:
      </Description>
      <nav className="project-navigation" aria-label="Project sections">
        <a
          className="project-navigation__link"
          href="#keyboard-shortcuts-learner"
        >
          Keyboard Shortcuts Learner
        </a>
        <a className="project-navigation__link" href="#rat-game">
          Rat Game
        </a>
      </nav>
    </Container>
  );
};

export default Heading;
