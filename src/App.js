import './App.css';
import { useState } from "react";

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function NameAndSection() {
  return (
    <div className='NameContainer'>
      <p>
        JOHN REIN VINUYA
      </p>
      <p>
        BSIT - 3A
      </p>
    </div>
  );
}

function Key({ label, clickHandler }) {
  return (
    <button className='ButtonKeys' onClick={clickHandler}>
      {label}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState("10 Things That Require Zero Talent");

  const handleKeyClick = (key) => {
    const items = [
      "Being On Time",
      "Making An Effort",
      "Being High Energy",
      "Having A Positive Attitude",
      "Being Passionate",
      "Using Good Body Language",
      "Being Coachable",
      "Doing A Little Extra",
      "Being Prepared",
      "Having A Strong Work Ethic"
    ];
    
    if (key === 'RESET') {
      setDisp("10 Things That Require Zero Talent");
    } else if (key === 'NAME') {
      setDisp("JOHN REIN VINUYA");
    } else {
      const index = parseInt(key);
      if (index >= 1 && index <= 10) {
        setDisp(items[index - 1]);
      }
    }
  };

  return (
    <div className="App">
      <div className="CalcContainer">
        <div>
          <NameAndSection />
        </div>
        <div className="DispContainer">
          <Display display={disp} />
        </div>

        <div className="ButtonContainer">
          <Key label={1} clickHandler={() => handleKeyClick(1)} />
          <Key label={2} clickHandler={() => handleKeyClick(2)} />
          <Key label={3} clickHandler={() => handleKeyClick(3)} />
          <Key label={4} clickHandler={() => handleKeyClick(4)} />
          <Key label={5} clickHandler={() => handleKeyClick(5)} />
          <Key label={6} clickHandler={() => handleKeyClick(6)} />
          <Key label={7} clickHandler={() => handleKeyClick(7)} />
          <Key label={8} clickHandler={() => handleKeyClick(8)} />
          <Key label={9} clickHandler={() => handleKeyClick(9)} />
          <Key label={0} clickHandler={() => handleKeyClick(10)} />
          <Key label={'RESET'} clickHandler={() => handleKeyClick('RESET')} />
          <Key label={'NAME'} clickHandler={() => handleKeyClick('NAME')} />
        </div>
      </div>
    </div>
  );
}

export default App;
