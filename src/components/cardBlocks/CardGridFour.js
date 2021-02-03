import React from 'react';
import styled from 'styled-components';

const cardContent = [
  {
    id: 1,
    title: 'Calculating the impact of fees on your investing',
    date: '13/01/2021',
    author: 'Jason Crabtree',
    image: 'https://picsum.photos/314/205',
    imageAlt: 'Two hikers walk through a misty New Zealand hill track.',
    imageColour: 'var(--turquoise-700)',
  },
  {
    id: 2,
    title: 'Trouble talking with family or friends about money?',
    date: '24/01/2021',
    author: 'Jason Crabtree',
    image: 'https://picsum.photos/314/206',
    imageAlt: 'Picsum Random Image 314',
    imageColour: 'var(--dusk-pink-900)',
  },
  {
    id: 3,
    title: 'Short-term loans: When should you get a small loan',
    date: '27/01/2021',
    author: 'Jason Crabtree',
    image: 'https://picsum.photos/313/209',
    imageAlt: 'Picsum Random Image 313',
    imageColour: 'var(--turquoise-300)',
  },
  {
    id: 4,
    title: 'Trusting your own expertise with spending habits',
    date: '27/01/2021',
    author: 'Jason Crabtree',
    image: 'https://picsum.photos/320/212',
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

  position: relative;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(23.49%, 1fr));
    gap: 24px;
    margin-right: 40px;
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
  }

  ul::after {
    background: var(--dusk-pink-300);
    content: '';
    position: absolute;
    top: -40px;
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

function CardGridFour() {
  return (
    <CardGridStyles>
      <ul>
        {cardContent.map((card, i) => (
          <li key={i}>
            <a href="/">
              <img src={card.image} alt={card.imageAlt} />
              <div>
                <h4>{card.title}</h4>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </CardGridStyles>
  );
}

export default CardGridFour;
