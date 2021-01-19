import React from 'react';
import styled from 'styled-components';

const TextColumnStyles = styled.ul`
  display: flex;
  gap: 24px;

  padding: 0px;
  margin: 0px;

  margin-top: 40px;

  li {
    list-style: none;
    flex-grow: 1;

    padding: 0px;
    margin: 0px;
  }

  .backgroundColumnStyle {
    background-color: var(--apricot-100);
    border: 1px solid var(--dusk-pink-400);
    padding: 24px;
  }
`;

function TextColumns(props) {
  const { backgroundColumnStyle, columnOne, columnTwo, columnThree } = props;

  return (
    <TextColumnStyles>
      {columnOne ? (
        <li className={backgroundColumnStyle ? `backgroundColumnStyle` : ''}>
          {columnOne}
        </li>
      ) : null}
      {columnTwo ? (
        <li className={backgroundColumnStyle ? `backgroundColumnStyle` : ''}>
          {columnTwo}
        </li>
      ) : null}
      {columnThree ? (
        <li className={backgroundColumnStyle ? `backgroundColumnStyle` : ''}>
          {columnThree}
        </li>
      ) : null}
    </TextColumnStyles>
  );
}

export default TextColumns;
