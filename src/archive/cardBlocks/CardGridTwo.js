import React from 'react';
import styled from 'styled-components';
import ArrowRight from '../../../static/arrow-right-large.svg';

const cardContent = [
  {
    id: 1,
    title: 'Calculating the impact of fees on your investing',
    date: '13/01/2021',
    author: 'Jason Crabtree',
    image: 'https://picsum.photos/312/208',
    imageAlt: 'Picsum Random Image 312 208',
    imageColour: 'var(--turquoise-700)',
  },
  {
    id: 2,
    title: 'Trouble talking with family or friends about money?',
    date: '24/01/2021',
    author: 'Jason Crabtree',
    image: 'https://picsum.photos/313/207',
    imageAlt: 'Picsum Random Image 313 207',
    imageColour: 'var(--dusk-pink-900)',
  },
  {
    id: 3,
    title: 'Short-term loans: When should you get a small loan',
    date: '27/01/2021',
    author: 'Jason Crabtree',
    image: 'https://picsum.photos/311/208',
    imageAlt: 'Picsum Random Image 311 208',
    imageColour: 'var(--turquoise-300)',
  },
];

const CardGridStyles = styled.div`
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

function CardGridTwo() {
  return (
    <CardGridStyles>
      <ul>
        {cardContent.map((card, i) => (
          <li key={i}>
            <a href="/">
              <img src={card.image} alt={card.imageAlt} />
              <div>
                <h3>{card.title}</h3>
                {/* TODO: USE GATSBY GRAPHQL DATE METHOD */}
                <span className="eyebrow">
                  {card.date} • {card.author}
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
    </CardGridStyles>
  );
}

export default CardGridTwo;
