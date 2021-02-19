import React from 'react';
import styled from 'styled-components';
import ArrowRight from '../../../static/arrow-right-large.svg';

const cardContent = [
  {
    id: 1,
    title: 'Calculating the impact of fees on your investing',
    date: '13/01/2021',
    author: 'Jason Crabtree',
    image: 'https://picsum.photos/314/208',
    imageAlt: 'Picsum Random Image 208',
    imageColour: 'var(--turquoise-700)',
  },
  {
    id: 2,
    title: 'Trouble talking with family or friends about money?',
    date: '24/01/2021',
    author: 'Jason Crabtree',
    image: 'https://picsum.photos/314/207',
    imageAlt: 'Picsum Random Image 207',
    imageColour: 'var(--dusk-pink-900)',
  },
  {
    id: 3,
    title: 'Short-term loans: When should you get a small loan',
    date: '27/01/2021',
    author: 'Jason Crabtree',
    image: 'https://picsum.photos/313/208',
    imageAlt: 'Picsum Random Image 313 208',
    imageColour: 'var(--turquoise-300)',
  },
];

const CardGridStyles = styled.div`
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

function CardGridOne() {
  return (
    <CardGridStyles>
      <ul>
        {cardContent.map((card, i) => (
          <li key={i}>
            <a href="/">
              <img
                className="card-image"
                src={card.image}
                alt={card.imageAlt}
              />
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
            </a>
          </li>
        ))}
      </ul>
    </CardGridStyles>
  );
}

export default CardGridOne;
