import mamaRat from "../assets/mamaRat.png";
import ratJumping from "../assets/ratJumping.png";
import ratEatingCheese from "../assets/ratEatingCheese.png";
import {
  Description,
  Screenshot,
  Screenshots,
  ScreenshotsTitle,
  Section,
  Title,
} from "./ProjectSection";

const RatGame = () => {
  return (
    <Section id="rat-game" aria-labelledby="rat-game-title">
      <Title id="rat-game-title">Rat Game</Title>
      <Description>
        This is a multiplayer game in a prototype state about rats vs hunters.
        The rats run around the house wreaking havoc and completing objectives
        while the hunters try and eliminate the rats.
      </Description>
      <Description>
        This was the first game I completed, and so gave me an introduction into
        learning game dev. It was made in a team of two with work split evenly,
        including gameplay, UIs, assets and ideas.
      </Description>
      <ScreenshotsTitle>Screenshots from the game</ScreenshotsTitle>
      <Screenshots>
        <Screenshot
          src={mamaRat}
          alt="Mama rat in the rat game"
          width={1917}
          height={1078}
        />
        <Screenshot
          src={ratEatingCheese}
          alt="Rat eating cheese"
          width={1917}
          height={1078}
        />
        <Screenshot
          src={ratJumping}
          alt="Rat jumping in the game"
          width={1917}
          height={1078}
        />
      </Screenshots>
    </Section>
  );
};

export default RatGame;
