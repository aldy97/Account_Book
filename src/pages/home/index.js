import React, { useState } from 'react';
import StateHeader from './statsheader/index';
import Type from './type/index';
import Central from './central/index';
import Button from './button/index';

function Home() {
  //是否显示类型栏目
  const [show, setShow] = useState(false);

  const showType = (show) => {
    if (show) {
      return <Type handleSetShow={handleSetShow} />;
    } else {
      return <Button />;
    }
  };

  const handleSetShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <StateHeader handleSetShow={handleSetShow} />
      {showType(show)}
      <Central />
    </div>
  );
}

export default Home;
