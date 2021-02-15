import React from 'react';
import styled from 'styled-components';

const FormStyles = styled.form`
  /* TODO: REFACTOR COMPONENTS TO GLOBAL STYLES */

  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
  }

  label,
  .checkbox-block,
  .radio-block {
    margin-top: 48px;
  }

  .checkbox-block,
  .radio-block {
    label {
      margin-top: 0px;
    }
  }

  .long-label,
  input[type='radio'] {
    text-transform: capitalize;
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--grey-600);
  }

  input,
  textarea {
    font-weight: 400;
    color: var(--grey-900);
  }

  input,
  textarea {
    max-width: 519px;
    margin-top: 8px;
  }

  textarea {
    min-height: 240px;
  }

  input:focus,
  textarea:focus {
    /* outline: var(--green-700) 2px solid; */
  }

  input,
  textarea {
    padding: 10px 24px 6px;
  }

  textarea {
    padding: 24px;
  }

  input,
  textarea {
    box-sizing: border-box;
    background: var(--apricot-100);
    border: 2px solid var(--grey-300);
    /* border-style: double; */

    box-shadow: inset 0px 4px 4px rgba(22, 50, 55, 0.4);
    border-radius: 4px;
  }

  input[type='checkbox'],
  input[type='radio'] {
    box-shadow: none;
    padding: 0px;
  }

  .radio-block > label,
  .checkbox-block > label {
    display: flex;
    flex-direction: row;
  }

  .radio-block > label,
  .checkbox-block > label {
    margin-top: 16px;
  }

  .radio-block,
  .checkbox-block {
    label {
      width: 320px;
      text-transform: capitalize;
    }
  }

  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    input[type='checkbox'],
    input[type='radio'] {
      -webkit-appearance: none;
      -moz-appearance: none;

      cursor: pointer;
      /* outline: none; */
      display: inline-block;

      height: 26px;
      width: 26px;

      vertical-align: top;
      position: relative;
      margin: 0;
      margin-right: 16px;

      border: 2px solid var(--dusk-pink-700);

      box-shadow: inset 0px 2px 2px rgba(22, 50, 55, 0.5);
      background: var(--apricot-100);

      &:after {
        content: '';
        display: block;
        left: 0;
        top: 0;
        position: absolute;
      }

      :checked {
        background: var(--dusk-pink-700);
        border: 2px solid var(--dusk-pink-600);
      }

      :focus {
        /* outline: 1px solid var(--dusk-pink-700); */
      }
    }

    input[type='checkbox'] {
      border-radius: 2px;
      :after {
        width: 8px;
        height: 16px;
        border: 3px solid var(--grey-000);
        border-radius: 1px;
        border-top: 0;
        border-left: 0;
        left: 7px;
        top: 2px;
        transform: rotate(45deg);
      }
    }

    input[type='radio'] {
      border-radius: 50%;
      :after {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
      :checked {
        border: 6px solid var(--dusk-pink-700);
        background: var(--dusk-pink-200);
      }
    }
  }
`;

const today = new Date().toISOString().substr(0, 10);

function FormDemo(props) {
  return (
    <FormStyles>
      <label htmlFor="name">
        Your Name (Preferred)
        <input type="text" name="name" id="name" placeholder="Kate Sheppard" />
      </label>
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
      <label htmlFor="phone">
        Phone Number (Optional)
        <input type="tel" name="phone" id="phone" />
      </label>
      <label htmlFor="date-submitted">
        Date Submitted (Automatic)
        <input
          type="date"
          name="date-submitted"
          id="date-submitted"
          value={today}
        />
      </label>
      <label htmlFor="introduction" className="long-label">
        A few sentences explaining your Query
        <textarea
          name="introudction"
          id="introduction"
          cols="30"
          rows="10"
          placeholder="Please describe how Sapwood can help, e.g. questions about a mortgage, advice for investing, help with managing ongoing debt"
        />
      </label>

      <div className="checkbox-block">
        <p className="form-label">Main Topics of Interest</p>
        <label htmlFor="checkbox-debt">
          <input type="checkbox" name="topic" id="checkbox-debt" />
          debt
        </label>
        <label htmlFor="checkbox-mortgages">
          <input type="checkbox" name="topic" id="checkbox-mortgages" />
          mortgages
        </label>
        <label htmlFor="checkbox-budgeting">
          <input type="checkbox" name="topic" id="checkbox-budgeting" />
          budgeting Call
        </label>
        <label htmlFor="checkbox-investing">
          <input type="checkbox" name="topic" id="checkbox-investing" />
          Investing
        </label>
      </div>

      <div className="radio-block">
        <p className="form-label">Prefered Contact Method</p>
        <label htmlFor="radio-email">
          <input type="radio" name="contact-method" id="radio-email" />
          Email
        </label>
        <label htmlFor="radio-phone">
          <input type="radio" name="contact-method" id="radio-phone" />
          Phone
        </label>
        <label htmlFor="radio-video">
          <input type="radio" name="contact-method" id="radio-video" />
          Video Call
        </label>
        <label htmlFor="radio-in-person">
          <input type="radio" name="contact-method" id="radio-in-person" />
          In Person Meeting
        </label>
      </div>

      <input type="submit" value="Download Free Guide — PDF" />

      <input type="button" value="Download Free Guide — PDF" />

      <button type="button">Download Free Guide — PDF</button>

      <button className="button-pink-1" type="button">
        Download Free Guide — PDF
      </button>
      <button className="button-blue-1" type="button">
        Download Free Guide — PDF
      </button>
      <button className="button-green-1" type="button">
        Download Free Guide — PDF
      </button>
      <button className="button-grey-1" type="button">
        Download Free Guide — PDF
      </button>
    </FormStyles>
  );
}

export default FormDemo;
