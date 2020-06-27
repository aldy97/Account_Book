import React from 'react';
import styled from 'styled-components';
import theme from '../../../static/theme';

function Central() {
  const StyledCentral = styled.div`
    height: 1000px;
    width: ${theme.$width};
    z-index: 0;
    margin-top: 200px;
    background: #fff;
    overflow-y: scroll;
    @media (max-width: 500px) {
      width: calc(100vw);
    }
  `;
  return <StyledCentral>Hello World</StyledCentral>;
}

export default Central;
