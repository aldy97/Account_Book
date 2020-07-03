import React, { useState } from 'react';
import StateHeader from './statsheader/index';
import Type from './type/index';
import SelectMonth from './month/index';
import Central from './central/index';
import Button from './button/index';
import Money from './Money/index';
import styled from 'styled-components';
import dayjs from 'dayjs';

function Home() {
  //被选择的消费/支出类型的id: number
  const [typeId, setTypeId] = useState(0);

  //被选择的具体时间，并不是月份！！
  const [month, setMonth] = useState(dayjs());

  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  //是否显示过滤器类型区块
  const [show, setShow] = useState(false);
  //是否显示选择月份区块
  const [showMonth, setShowMonth] = useState(false);
  //是否显示记账盘
  const [showMoney, setShowMoney] = useState(false);

  const showType = (show) => {
    if (show) {
      return (
        <Type
          handleSetShow={handleSetShow}
          typeId={typeId}
          setTypeId={setTypeId}
        />
      );
    }
  };

  const showSelectedMonth = (show) => {
    if (show) {
      return (
        <SelectMonth
          handleSetShowMonth={handleSetShowMonth}
          month={month}
          setMonth={setMonth}
          onSubmit={(newMonth) => setMonth(newMonth)}
        />
      );
    }
  };

  const showDrawer = (show) => {
    if (show) {
      return <Money handleSetShowNumPad={handleSetShowNumPad} />;
    }
  };

  const handleSetShow = () => {
    setShow(!show);
    setShowMonth(false);
    setShowMoney(false);
  };

  const handleSetShowMonth = () => {
    setShowMonth(!showMonth);
    setShow(false);
    setShowMoney(false);
  };

  const handleSetShowNumPad = () => {
    setShowMoney(!showMoney);
    setShowMonth(false);
    setShow(false);
  };

  const StyledHome = styled.div`
    @media (max-width: 500px) {
      width: calc(100vw);
    }
  `;

  return (
    <StyledHome>
      <StateHeader
        handleSetShow={handleSetShow}
        handleSetShowMonth={handleSetShowMonth}
        typeId={typeId}
        month={month}
        expense={expense}
        income={income}
      />
      {showType(show)}
      {showSelectedMonth(showMonth)}
      {showDrawer(showMoney)}
      <Button handleSetShowNumPad={handleSetShowNumPad} />
      <Central
        month={month}
        typeId={typeId}
        setExpense={setExpense}
        setIncome={setIncome}
      />
    </StyledHome>
  );
}

export default Home;
