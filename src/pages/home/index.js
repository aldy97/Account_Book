import React, { useState } from 'react';
import StateHeader from './statsheader/index';
import Type from './type/index';

function Home() {
  const [show, setShow] = useState(false);

  const showType = (show) => {
    if (show) {
      return <Type handleSetShow={handleSetShow} />;
    }
  };

  const handleSetShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <StateHeader handleSetShow={handleSetShow} />
      {showType(show)}
    </div>
  );
}

export default Home;
