import React from 'react';
import styled from 'styled-components';
import ArrowRight from '../../../static/arrow-right-large.svg';

const cardContent = [
  {
    id: 1,
    title: 'Calculating the impact of fees on your investing',
    date: '13/01/2021',
    author: 'Jason Crabtree',
    image: 'https://picsum.photos/314/202',
    imageAlt: 'Picsum Random Image 314 202',
    imageColour: 'var(--turquoise-700)',
  },
  {
    id: 2,
    title: 'Trouble talking with family or friends about money?',
    date: '24/01/2021',
    author: 'Jason Crabtree',
    image: 'https://picsum.photos/314/203',
    imageAlt: 'Picsum Random Image 314 203',
    imageColour: 'var(--dusk-pink-900)',
  },
  {
    id: 3,
    title: 'Short-term loans: When should you get a small loan',
    date: '27/01/2021',
    author: 'Jason Crabtree',
    image: 'https://picsum.photos/313/204',
    imageAlt: 'Picsum Random Image 313 204',
    imageColour: 'var(--turquoise-300)',
  },
  {
    id: 4,
    title: 'Trusting your own expertise with spending habits',
    date: '27/01/2021',
    author: 'Jason Crabtree',
    image: 'https://picsum.photos/320/210',
    imageAlt: 'Short-term loans: When should you get a small loan',
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

function CardGridThree() {
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
    </CardGridStyles>
  );
}

export default CardGridThree;
