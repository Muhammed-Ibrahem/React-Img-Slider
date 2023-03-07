import Img from "./Img";
import IMGs from "/src/imgs";
import "./App.css";
import { useState } from "react";
let TransitionEffect = true;
function App() {
  const [index, setIndex] = useState(1);
  const goRight = () => {
    TransitionEffect = true;
    if (index === IMGs.length - 2) {
      setIndex((e) => e + 1);
      setTimeout(() => {
        TransitionEffect = false;
        setIndex(1);
      }, 300);
      return;
    }

    setIndex((e) => e + 1);
  };
  const goLeft = () => {
    TransitionEffect = true;
    if (index === 1) {
      setIndex((e) => e - 1);
      setTimeout(() => {
        TransitionEffect = false;
        setIndex(IMGs.length - 2);
      }, 300);
      return;
    }

    setIndex((e) => e - 1);
  };
  return (
    <>
      <div className="wrapper">
        <div
          className="slider"
          style={{
            transition: `${TransitionEffect ? "all 0.3s ease-in-out" : "none"}`,
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {IMGs.map((e) => {
            return <Img key={e.id} url={e.url} />;
          })}
        </div>
      </div>
      <div className="controllers">
        <button onClick={goLeft}>⬅</button>
        <button onClick={goRight}>➡ </button>
      </div>
    </>
  );
}

export default App;
