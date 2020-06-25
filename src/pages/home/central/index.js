import React from 'react';
import styled from 'styled-components';
import theme from '../../../static/theme/index';

function Central() {
  const CentralWrapper = styled.div`
    width: ${theme.$width};
    overflow: scroll;
    z-index: 8;
    top: 200px;
    bottom: 72px;
    overflow-x: hidden;
    @media (max-width: 500px) {
      width: calc(100vw);
    }
  `;

  return (
    <CentralWrapper>
      <div>Hello World</div>
    </CentralWrapper>
  );
}

export default Central;
