import React from 'react';
import styled from 'styled-components';
import CoffeeShopImage from '../../../static/image-sample.jpg';

const TextMediumImageStyles = styled.div`
  display: flex;
  div {
    flex-grow: 1;
  }
  gap: 96px;

  div > p {
    max-width: 514px;
  }

  .parent > img {
    max-width: 492px;
    max-height: 328px;
    object-fit: contain;
  }

  .parent {
    position: relative;
    align-self: center;
    justify-content: flex-end;
  }

  .parent::after {
    content: '';
    background-color: var(--turquoise-700);
    position: absolute;
    top: -32px;
    right: 83px;
    height: 328px;
    width: 72%;
    z-index: -1;
  }

  @media screen and (max-width: 920px) {
    display: flex;
    flex-direction: column;
    gap: 48px;

    .parent {
      margin-left: 0px;
    }

    .parent > img {
      max-width: 100%;
      width: auto;
      max-height: 328px;
      object-fit: contain;
    }

    .parent::after {
      top: -32px;
      left: -16px;
      height: 80%;
      width: 80%;
    }
  }
`;

function TextLargeImage(props) {
  console.log(props);
  return (
    <TextMediumImageStyles>
      <div>
        <p>
          New Zealand has a universal superannuation scheme. Everyone aged 65
          years old or over, who is a New Zealand citizen or permanent resident
          and normally lives in New Zealand at the time they apply is eligible.
        </p>

        <p>
          They must also have lived in New Zealand for at least 10 years since
          they turned 20 with five of those years being since they turned 50.
          Time spent overseas in certain countries and for certain reasons may
          be counted for New Zealand Superannuation.
        </p>

        <p>
          New Zealand Superannuation is taxed, the rate of which depends on
          their other income. The amount of Superannuation paid depends on the
          person's household situation. For a married couple the net tax amount
          is set by legislation to be no less than 66% of net average wage.
        </p>
      </div>
      <div className="parent">
        <img
          className="image"
          src={CoffeeShopImage}
          alt="Man sits in a coffee shop reading a newspaper with a cup of tea. Bright and inviting sunlight fills the photograph frame."
        />
      </div>
    </TextMediumImageStyles>
  );
}

export default TextLargeImage;
