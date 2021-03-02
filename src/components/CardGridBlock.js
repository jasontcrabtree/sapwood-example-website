import React from 'react';
import styled from 'styled-components';
import ArrowRight from '../../static/arrow-right-large.svg';

const CardGridOneStyles = styled.div`
  ul,
  li {
    padding: 0px;
    margin: 0px;
  }

  li {
    padding: 32px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    gap: 32px;
  }

  li > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  h3 {
    color: var(--turquoise-800);
  }

  li {
    list-style: none;
  }

  li {
    border: 1px solid var(--grey-300);
    background: var(--grey-100);
  }

  li:hover {
    outline: 2px solid var(--dusk-pink-700);
  }

  span {
    display: inline-block;
  }

  li > a {
    text-decoration: none;
  }

  li > a > * + * {
    margin-top: 16px;
  }

  img {
    /* width: 314px; */
    /* width: 100%; */
    object-fit: cover;
    width: auto;
    max-height: 200px;
  }

  img {
    margin-top: 8px;
  }

  li,
  img {
    position: relative;
    z-index: 2;
  }

  li:first-child::after {
    background: var(--turquoise-700);
    content: '';
    position: absolute;
    top: 24px;
    left: 32px;
    height: 132px;
    width: 234px;
    z-index: 1;
  }

  li:first-child img {
    margin-left: 16px;
  }

  li:nth-child(2)::after {
    background: var(--dusk-pink-800);
    content: '';
    position: absolute;
    top: 24px;
    left: 48px;
    height: 132px;
    width: 306px;
    z-index: 1;
  }

  li:nth-child(3)::after {
    background: var(--turquoise-300);
    content: '';
    position: absolute;
    top: 24px;
    right: 32px;
    height: 200px;
    width: 234px;
    z-index: 1;
  }

  li:nth-child(3) .card-image {
    margin-right: 16px;
  }

  .arrow-right {
    margin-right: 0px;
    position: absolute;
    bottom: 36px;
    right: 36px;
    width: 36px;
    height: 22px;
  }

  @media screen and (max-width: 920px) {
    ul {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      margin-right: 0px;
    }

    li:first-child::after {
      width: 64%;
      height: 96px;
    }

    li:nth-child(2)::after {
      top: 24px;
      left: 48px;
      right: 48px;
      height: 96px;
      width: 64%;
      margin-left: auto;
      margin-right: auto;
    }

    li:nth-child(3)::after {
      top: 24px;
      right: 32px;
      height: 96px;
      width: 64%;
    }
  }
`;

const CardGridTwoStyles = styled.div`
  ul,
  li {
    padding: 0px;
    margin: 0px;
  }

  div {
    position: relative;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    gap: 48px;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  h3 {
    color: var(--turquoise-800);
  }

  li {
    list-style: none;
  }

  li {
    border: 1px solid var(--grey-300);
    background: var(--grey-100);
  }

  li:hover {
    outline: 2px solid var(--dusk-pink-700);
  }

  span {
    display: inline-block;
  }

  li > a {
    text-decoration: none;
  }

  li > a > div > * + * {
    margin-top: 16px;
  }

  li > a > div {
    padding: 32px;
  }

  li > a > img {
    padding: 0px;
  }

  img {
    width: 100%;
    object-fit: cover;
    max-height: 240px;
  }

  .arrow-right {
    position: absolute;
    bottom: 36px;
    right: 36px;
    width: 36px;
    height: 22px;
  }

  @media screen and (max-width: 920px) {
    ul {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      margin-right: 0px;
      gap: 24px;
    }

    li > a > div {
      padding: 16px;
    }

    .arrow-right {
      display: none;
    }
  }
`;

const CardGridThreeStyles = styled.div`
  ul,
  li {
    padding: 0px;
    margin: 0px;
  }

  div {
    position: relative;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
    gap: 32px;
  }

  li > a {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  li > a {
    padding: 24px;
  }

  h3 {
    color: var(--turquoise-800);
  }

  li {
    list-style: none;
  }

  li {
    border: 1px solid var(--grey-300);
    background: var(--grey-100);
  }

  li:hover {
    outline: 2px solid var(--dusk-pink-700);
  }

  span {
    display: inline-block;
  }

  li > a {
    text-decoration: none;
  }

  li > a > div > * + * {
    margin-top: 16px;
  }

  li > a > div {
    margin-left: 16px;
  }

  img {
    width: 314px;
    max-width: 100%;
    object-fit: cover;
    height: 224px;
  }

  img {
    margin: 0 auto;
  }

  .arrow-right {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 36px;
    height: 22px;
  }

  li > a > div {
    display: flex;
    flex-direction: column;

    span {
      margin-top: auto;
      margin-bottom: 0px;
    }
  }

  @media screen and (max-width: 920px) {
    ul {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      margin-right: 0px;
    }

    li > a {
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-start;
    }

    .arrow-right {
      display: none;
    }

    li > a > div {
      margin-left: 0px;
    }

    div > h3 {
      margin-bottom: 8px;
    }

    .br {
      display: none;
    }
  }
`;

const CardGridFourStyles = styled.div`
  position: relative;

  ul,
  li {
    padding: 0px;
    margin: 0px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(23.49%, 1fr));
    gap: 24px;
    margin-right: 40px;
    margin-top: 24px;
  }

  li {
    list-style: none;
  }

  li {
    border: 1px solid var(--grey-300);
    background: var(--grey-100);
  }

  li > a {
    display: grid;
    flex-direction: column;

    img {
      height: 2fr;
    }
    div {
      height: 1fr;
    }
  }

  li > a {
    text-decoration: none;
  }

  li > a > div {
    padding: 16px;
  }

  li > a > img {
    padding: 0px;
  }

  li > a > div > * + * {
    margin-top: 16px;
  }

  li:hover {
    outline: 2px solid var(--dusk-pink-700);
  }

  img {
    width: 100%;
    object-fit: cover;
    min-height: clamp(180px, 240px, 320px);
    /* height: 64%; */
  }

  ul::after {
    background: var(--dusk-pink-300);
    content: '';
    position: absolute;
    top: -64px;
    right: 0px;
    height: 320px;
    width: 480px;
    z-index: -5;
  }

  @media screen and (max-width: 920px) {
    ul {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      margin-right: 0px;
    }

    ul::after {
      top: -24px;
      right: -40px;
      left: 80px;
      height: 240px;
      width: 360px;
      width: auto;
    }
  }
`;

const gridOptions = {
  1: 'Style-One-ImageColourBlocks',
  2: 'Style-Two-EdgeToEdge',
  3: 'Style-Three-HorizontalStack',
  4: 'Style-Four-SmallCardsGridColourBlock',
};

function CardGridBlock(props) {
  console.log(props);
  const { cardKeys, cardArray, arrowboolean, gridStyles } = props;

  const gridDisplayStyle = gridStyles.card_grid_style;

  if (gridDisplayStyle === gridOptions[1]) {
    return (
      <CardGridOneStyles>
        <ul>
          {cardArray.map((card, i) => (
            <li key={cardKeys + i}>
              <a href={card.card_link_destination.url}>
                <img src={card.card_image.url} alt={card.card_image.alt} />
                <h3>{card.card_title.text}</h3>
                {/* TODO: USE GATSBY GRAPHQL DATE METHOD */}
                <span className="eyebrow">
                  {card.cardDate} • {card.content_author}
                  <img
                    className="arrow-right"
                    src={ArrowRight}
                    alt="Small arrow pointing right"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </CardGridOneStyles>
    );
  }
  if (gridDisplayStyle === gridOptions[2]) {
    return (
      <CardGridTwoStyles>
        <ul>
          {cardArray.map((card, i) => (
            <li key={cardKeys + i}>
              <a href={card.card_link_destination.url}>
                <img src={card.card_image.url} alt={card.card_image.alt} />
                <div>
                  <h3>{card.card_title.text}</h3>
                  {/* TODO: USE GATSBY GRAPHQL DATE METHOD */}
                  <span className="eyebrow">
                    {card.cardDate} • {card.content_author}
                    <img
                      className="arrow-right"
                      src={ArrowRight}
                      alt="Small arrow pointing right"
                    />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </CardGridTwoStyles>
    );
  }
  if (gridDisplayStyle === gridOptions[3]) {
    return (
      <CardGridThreeStyles>
        <ul>
          {cardArray.map((card, i) => (
            <li key={cardKeys + i}>
              <a href={card.card_link_destination.url}>
                <img src={card.card_image.url} alt={card.card_image.alt} />
                <div>
                  <h3>{card.card_title.text}</h3>
                  {/* TODO: USE GATSBY GRAPHQL DATE METHOD */}
                  <span className="eyebrow">
                    {card.date} • <br className="br" />
                    {card.author}
                    <img
                      className="arrow-right"
                      src={ArrowRight}
                      alt="Small arrow pointing right"
                    />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </CardGridThreeStyles>
    );
  }
  if (gridDisplayStyle === gridOptions[4]) {
    return (
      <CardGridFourStyles cardStyle>
        <ul>
          {cardArray.map((card, i) => (
            <li key={cardKeys + i}>
              <a href={card.card_link_destination.url}>
                <img
                  className="card-image"
                  src={card.card_image.url}
                  alt={card.card_image.alt}
                />
                <div>
                  <h4>{card.card_title.text}</h4>
                  {/* TODO: USE GATSBY GRAPHQL DATE METHOD */}
                  {card.cardDate ? (
                    <span className="eyebrow">
                      {card.cardDate} • {card.content_author}
                    </span>
                  ) : null}
                  {!arrowboolean ? (
                    <img
                      className="arrow-right"
                      src={ArrowRight}
                      alt="Small arrow pointing right"
                    />
                  ) : null}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </CardGridFourStyles>
    );
  }
  if (!gridDisplayStyle) {
    return (
      <div>
        <h1>Error No Grid Styles</h1>
      </div>
    );
  }
}

export default CardGridBlock;
