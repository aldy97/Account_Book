import React from 'react';
import styled from 'styled-components';
import theme from '../../../static/theme/index';

function Central() {
  const CentralWrapper = styled.div`
    width: ${theme.$width};
    height: 1000px;
    overflow: scroll;
    z-index: 8;
  `;

  return (
    <CentralWrapper>
      <div>Hello World</div>
    </CentralWrapper>
  );
}

export default Central;
