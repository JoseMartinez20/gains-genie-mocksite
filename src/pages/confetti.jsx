import { useEffect, useState } from "react";
import ConfettiGenerator from "confetti-js";

const ConfettiCanvas = () => {
  useEffect(() => {
    const confettiSettings = {
      target: "confetti-canvas",
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);
  return <canvas id="confetti-canvas" />;
};

const ConfettiJS = () => {
    const [isConfetti, setIsConfetti] = useState(false);
   
    const toggleConfetti = () => {
      setIsConfetti(prev => !prev);
    };
    return (
      <div className='container'>
        <button onClick={toggleConfetti}>{isConfetti ? 'Clear confetti' : 'Render confetti'}</button>
        {isConfetti && <ConfettiCanvas />}
      </div>
    );
  };

export default ConfettiJS;

