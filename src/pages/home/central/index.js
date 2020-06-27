import React from 'react';
import styled from 'styled-components';

function Central() {
  const StyledCentral = styled.div`
    z-index: 0;
    margin-top: 200px;
    height: 1000px;
    background: #eee;
  `;
  return <StyledCentral>Hello World</StyledCentral>;
}

export default Central;
