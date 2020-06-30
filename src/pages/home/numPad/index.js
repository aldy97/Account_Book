import React from 'react';
import theme from '../../../static/theme';
import styled from 'styled-components';

function NumPad(props) {
  const StyledNumPad = styled.div`
  > button {
    float: left;
    width: 25%;
    height: 64px;
    background: white;
    font-size: 1.3em;
    outline: none;
    border-radius: 4px;
    border: 4px solid #fafafa;
    &.zero {
      width: 50%;
    }
    &.OK {
      height: 192px;
      float: right;
      font-size: 1em;
      color: white;
      opacity: ${props.value === '0' ? 0.6 : 1};
      background: ${props.type ? theme.$blue : theme.$orange};
  }
`;
  const { value, onOK, onChange } = props;

  const updateAmount = (prevValue, text) => {
    const MAX_AMOUNT = 100000;
    const MAX_DECIMAL_LENGTH = 2;

    // 非法情况
    if (!/[\d.]/.test(text)) return prevValue;

    if (prevValue.includes('.')) {
      // 如果 text 是 .
      if (text === '.') return prevValue;

      // 如果是数字
      if (!isNaN(parseFloat(text))) {
        // 判断是否超出
        const decimal = prevValue.split('.')[1];

        return decimal.length >= MAX_DECIMAL_LENGTH
          ? prevValue
          : prevValue + text;
      }

      return prevValue;
    }

    if (prevValue === '0') {
      return text === '.' ? prevValue + text : text;
    }

    const newValue = prevValue + text;

    if (parseFloat(newValue) > MAX_AMOUNT) {
      alert(`Input can not be higher than ${MAX_AMOUNT}`);
      return prevValue;
    }

    return newValue;
  };

  const onDel = () => {
    if (value === '0') return;

    if (value.length === 1) return onChange('0');

    onChange(value.slice(0, -1));
  };

  const onClickPad = (e) => {
    const text = e.target.textContent;
    // null
    if (!text) return;

    // OK
    if (text === 'OK') return onOK();

    // Del
    if (text === 'DEL') return onDel();

    // 其他
    const newValue = updateAmount(value, text);
    onChange(newValue);
  };

  return (
    <StyledNumPad onClick={onClickPad}>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>DEL</button>

      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className='OK'>OK</button>

      <button>7</button>
      <button>8</button>
      <button>9</button>

      <button className='zero'>0</button>
      <button>.</button>
    </StyledNumPad>
  );
}

export default NumPad;
