import React from 'react';
import styled from 'styled-components';

const CustomBlockStyles = styled.div`
  background: var(--grey-200);
  height: 320px;
  width: 100%;

  display: flex;

  justify-content: center;
  align-items: center;

  p {
    font-size: 2rem;
    font-weight: bold;
  }
`;

function CustomBlock({ customComponentName }) {
  return (
    <CustomBlockStyles>
      <p>{customComponentName}</p>
    </CustomBlockStyles>
  );
}

export default CustomBlock;
