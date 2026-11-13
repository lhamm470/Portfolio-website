import roadmap from "../assets/roadmap.png";
import levelModule from "../assets/levelModule.png";
import learnModule from "../assets/learnModule.png";
import {
  Description,
  Screenshot,
  Screenshots,
  ScreenshotsTitle,
  Section,
  Title,
} from "./ProjectSection";

const KeyboardShortcutsLearner = () => {
  return (
    <Section
      id="keyboard-shortcuts-learner"
      aria-labelledby="keyboard-shortcuts-title"
    >
      <Title id="keyboard-shortcuts-title">Keyboard Shortcuts Learner</Title>
      <Description>
        This application teaches VSCode keyboard shortcuts in an engaging way
        using timed code editing levels. The hardest part of learning new
        shortcuts is memorising and internalising them, which comes with time
        and practice. Therefore, using the shortcut immediately upon learning it
        in levels is an effective and fun way to learn them.
      </Description>
      <Description>
        The levels are time-based, each with a leaderboard so you can compete to
        get the best times.
      </Description>
      <ScreenshotsTitle>Screenshots from the website</ScreenshotsTitle>
      <Screenshots>
        <Screenshot src={roadmap} alt="Keyboard shortcuts learner roadmap" />
        <Screenshot src={levelModule} alt="Keyboard shortcuts level module" />
        <Screenshot
          src={learnModule}
          alt="Keyboard shortcuts learning module"
        />
      </Screenshots>
    </Section>
  );
};

export default KeyboardShortcutsLearner;
