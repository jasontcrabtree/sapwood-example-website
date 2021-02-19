import React from 'react';
import styled from 'styled-components';
import ArrowRight from '../../static/arrow-right-large.svg';

const CardGridBlockStyles = styled.div`
  ul,
  li {
    padding: 0px;
    margin: 0px;
  }

  position: relative;

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

  li:hover {
    outline: 2px solid var(--dusk-pink-700);
  }

  li > a {
    text-decoration: none;
  }

  li > a > div > * + * {
    margin-top: 16px;
  }

  li > a > div {
    padding: 16px;
  }

  li > a > img {
    padding: 0px;
  }

  img {
    width: 100%;
    object-fit: cover;
    max-height: 240px;
    height: 64%;
  }

  ul::after {
    background: var(--dusk-pink-300);
    content: '';
    position: absolute;
    top: -64px;
    right: 0px;
    height: 320px;
    width: 480px;
    z-index: -1;
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

function CardGridBlock(props) {
  const { cardKeys, cardArray, arrowboolean } = props;

  return (
    <CardGridBlockStyles cardStyle>
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
    </CardGridBlockStyles>
  );
}

export default CardGridBlock;
