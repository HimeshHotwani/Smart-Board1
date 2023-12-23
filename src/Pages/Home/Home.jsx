import React, { useState } from 'react';
import Canvas from "../../components/Canvas/Canvas";

function Home() {
  const [showCanvas, setShowCanvas] = useState(false);

  const handleButtonClick = async () => {
    setShowCanvas(!showCanvas);
  };

  return (
    <div>
      <h1>Meet Link</h1>
      <button onClick={handleButtonClick}>{showCanvas ? 'Stop Canvas' : 'Show Canvas'}</button>
      <div>
        {showCanvas && <Canvas />}
      </div>
    </div>
  );
}

export default Home;
