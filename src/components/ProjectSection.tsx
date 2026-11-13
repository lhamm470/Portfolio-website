import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  margin: 0 auto 180px;
  padding: 0 clamp(20px, 4vw, 36px);
  box-sizing: border-box;
  scroll-margin-top: 24px;
`;

export const Title = styled.h2`
  width: 100%;
  max-width: 700px;
  margin: 0 auto 18px;
  font-size: clamp(1.4rem, 2.5vw, 1.65rem);
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.02em;
  text-align: left;
`;

export const Description = styled.p`
  width: 100%;
  max-width: 700px;
  margin: 0 auto 16px;
  color: var(--text);
  font-size: 1rem;
  line-height: 1.75;
  text-align: justify;
  text-align-last: left;
`;

export const ScreenshotsTitle = styled.h3`
  width: 100%;
  max-width: 700px;
  margin: 28px auto 16px;
  color: var(--text-h);
  font-size: 1rem;
  font-weight: 600;
`;

export const Screenshots = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 32px);
  align-items: center;
  margin-top: 24px;
`;

export const Screenshot = styled.img`
  display: block;
  width: 100%;
  max-width: 800px;
  height: auto;
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow);
`;
