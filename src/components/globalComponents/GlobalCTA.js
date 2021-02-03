import React from 'react';
import styled from 'styled-components';

const GlobalCTAWrapperStyles = styled.div`
  /* Global Content Margin 9.6vw === 160px */
  margin: 0px 9.6vw 0px;

  /* Inner grid padding */
  /* padding: 112px 40px 200px 40px; */

  div {
    margin: 0px 40px 200px;
  }

  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-gap: 24px;

  @media screen and (max-width: 920px) {
    margin: 0px;

    div {
      margin: 0px 24px 64px;
    }
  }
`;

const GlobalCTAStyles = styled.div`
  grid-column: 1 / 13;

  background-color: var(--grey-100);
  color: var(--turquoise-700);

  padding: 64px;

  input {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h3 {
    margin-bottom: 24px;
  }

  input {
    margin-top: 16px;
    border-radius: 2px;
    padding: 4px;
    font-weight: 400;
    width: 80%;
    max-width: 48ch;
  }

  @media screen and (max-width: 920px) {
    padding: 32px 16px 64px 16px;
    max-width: 32rem;
    width: auto;

    input {
      width: 100%;
    }
  }
`;

function GlobalCTA(props) {
  return (
    <GlobalCTAWrapperStyles>
      <GlobalCTAStyles>
        <h3>Sapwood CTA</h3>
        <form>
          <label htmlFor="email">
            Email Address
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="katesheppard@gmail.com"
            />
          </label>
        </form>
      </GlobalCTAStyles>
    </GlobalCTAWrapperStyles>
  );
}

export default GlobalCTA;
