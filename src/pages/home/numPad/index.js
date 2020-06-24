import * as React from 'react';
import theme from '../../../static/theme/index';
import styled from 'styled-components';
import { CloseBar } from '../type/style';

function NumberPad(props) {
  const StyledNumberPad = styled.div`
    width: ${theme.$width};
    position: fixed;
    bottom: 72px;
    z-index: 20;
    button {
      cursor: pointer;
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
      }
    }
    button: hover {
      border: 4px solid ${theme.$blue};
    }
  `;

  return (
    <StyledNumberPad>
      <CloseBar
        style={{ border: '1px solid #eee' }}
        onClick={props.handleSetShowNumPad}
      >
        <i className='iconfont'>&#xe687;</i>
      </CloseBar>
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
    </StyledNumberPad>
  );
}

export default NumberPad;
