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
        background: ${theme.$blue}
    }
  `;
  return (
    <StyledNumPad>
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
