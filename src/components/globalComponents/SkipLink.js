import React from 'react';
import styled from 'styled-components';

const SkipLinkStyles = styled.a`
  /* Styling */
  padding: 1rem 2rem;

  background-color: white;
  border: 1px solid slateblue;
  border-radius: 2px;

  font-weight: bold;

  /* Initially hidden offscreen */
  position: absolute;
  transform: translateY(-300%);

  :focus {
    transform: translateY(1%);
    transition: all 0.3s ease-in-out;
  }
`;

const SkipLink = () => (
  <SkipLinkStyles href="#main" id="skip-link">
    Skip to Content
  </SkipLinkStyles>
);

export default SkipLink;
