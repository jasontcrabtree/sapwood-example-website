import React from 'react';
import HTMLRenderer from 'react-html-renderer';
import styled from 'styled-components';
import TitleBlock from './TitleBlock';

const ColumnBlockStyles = styled.ul`
  display: flex;

  gap: 24px;

  padding: 0px;
  margin: 0px;

  margin-top: 40px;

  div {
    padding-top: 0px;
  }

  * + * {
    margin-top: 8px;
  }

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
  @media screen and (max-width: 920px) {
    flex-direction: column;
  }
`;

function ColumnBlock(props) {
  // const { backgroundColumnStyle, columnOne, columnTwo, columnThree } = props;
  const { listKeys, listArray, columnBackground } = props;

  return (
    <ColumnBlockStyles>
      {listArray.map((columns, id) => (
        <li
          key={listKeys + id}
          className={`test ${columnBackground ? 'backgroundColumnStyle' : ''}`}
        >
          <TitleBlock
            // fixed heading size
            headingSize="h4"
            titleText={columns.column_item_title.text}
          />
          <HTMLRenderer html={columns.column_text_content.html} />
        </li>
      ))}
    </ColumnBlockStyles>
  );
}

export default ColumnBlock;
