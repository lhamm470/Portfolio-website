import { useLayoutEffect } from "react";
import "./App.css";
import Heading from "./components/Heading";
import KeyboardShortcutsLearner from "./components/KeyboardShortcutsLearner";
import RatGame from "./components/RatGame";

function App() {
  useLayoutEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView();
    }
  }, []);

  return (
    <>
      <Heading />
      <main>
        <KeyboardShortcutsLearner />
        <RatGame />
      </main>
    </>
  );
}

export default App;
