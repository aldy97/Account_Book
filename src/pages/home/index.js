import React, { useState } from 'react';
import StateHeader from './statsheader/index';
import Type from './type/index';
import SelectMonth from './month/index';
import Central from './central/index';
import Button from './button/index';

function Home() {
  //是否显示类型区块
  const [show, setShow] = useState(false);
  //是否显示选择月份区块
  const [showMonth, setShowMonth] = useState(false);

  const showType = (show) => {
    if (show) {
      return <Type handleSetShow={handleSetShow} />;
    }
  };

  const showSelectedMonth = (show) => {
    if (show) {
      return (
        <SelectMonth handleSetShowMonth={handleSetShowMonth}></SelectMonth>
      );
    }
  };

  const handleSetShow = () => {
    setShow(!show);
    setShowMonth(false);
  };

  const handleSetShowMonth = () => {
    setShowMonth(!showMonth);
    setShow(false);
  };

  return (
    <div>
      <StateHeader
        handleSetShow={handleSetShow}
        handleSetShowMonth={handleSetShowMonth}
      />
      {showType(show)}
      {showSelectedMonth(showMonth)}
      <Button />
      <Central />
    </div>
  );
}

export default Home;
