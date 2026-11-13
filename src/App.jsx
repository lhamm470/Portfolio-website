import "./App.css";
import Heading from "./components/Heading";
import KeyboardShortcutsLearner from "./components/KeyboardShortcutsLearner";
import RatGame from "./components/RatGame";

function App() {
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
