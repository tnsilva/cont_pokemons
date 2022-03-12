import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Pokemon, { usePokemon } from "./components/Pokemon";

function App() {
  const [totalNumOfClicks, setTotalNumOfClicks] = useState(0);
  const { pokemon, addPokemon } = usePokemon();

  useEffect(() => {
    if (totalNumOfClicks > 0) {
      addPokemon(pokemon);
    }
  }, [totalNumOfClicks, pokemon, addPokemon]);

  const incrementNumberOfClicks = () => {
    setTotalNumOfClicks(totalNumOfClicks + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button
          title="You have clicked"
          hasClicked={false}
          incrementNumberOfClicks={incrementNumberOfClicks}
        />

        <Button
          title="Have you tried clicking"
          incrementNumberOfClicks={incrementNumberOfClicks}
        />

        <Button
          title="Don't click this button!"
          incrementNumberOfClicks={incrementNumberOfClicks}
        />

        <p>Total: {totalNumOfClicks}</p>
      </header>
      <Pokemon pokemon={pokemon} />
    </div>
  );
}

export default App;
