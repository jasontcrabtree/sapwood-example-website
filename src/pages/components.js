import React from 'react';
import styled from 'styled-components';

import Typography from '../components/Typography';

import HeroTitleBlockFour from '../components/HeroTitleBlockFour';
import HeroTitleBlockOne from '../components/HeroTitleBlockOne';
import HeroTitleBlockThree from '../components/HeroTitleBlockThree';
import HeroTitleBlockTwo from '../components/HeroTitleBlockTwo';

import TitleBlockOne from '../components/TitleBlockOne';
import TitleBlockTwo from '../components/TitleBlockTwo';
import TitleBlockThree from '../components/TitleBlockThree';
import TitleBlockFour from '../components/TitleBlockFour';
import TextColumns from '../components/TextColumns';

const ComponentPageMainStyles = styled.main`
  /* ALL STYLES HERE ARE PURELY FOR PRESENTATION OF THE COMPONENTS PAGE, NO STYLES FOR COMPONENTS */

  grid-column: 1 / 8;

  section {
    grid-column: 1 / -1;
    border: 1px solid var(--dusk-pink-500);
    padding: 16px;
  }

  .label {
    color: var(--dusk-pink-700);
  }

  .type {
    display: flex;
    gap: 24px;
  }

  .title-blocks > * {
    margin: 80px 0px;
  }
`;

function ComponentsPage() {
  return (
    <ComponentPageMainStyles>
      <section>
        <h1>Sapwood Components</h1>
        <p>Hello Components!</p>
      </section>

      <Typography />

      <section>
        <h2 className="label">Hero Title Blocks</h2>
        <div className="title-blocks">
          <HeroTitleBlockOne title="1. Money advice that meets you where you are" />
          <HeroTitleBlockTwo title="2. Money advice that meets you where you are" />
          <HeroTitleBlockThree title="3. Money advice that meets you where you are" />
          <HeroTitleBlockFour title="4. Money advice that meets you where you are" />
        </div>
      </section>

      <section>
        <h2 className="label">Standard Title Blocks</h2>
        <div className="title-blocks">
          <TitleBlockOne
            title="One: Sapwood Client Resources"
            headingLevel="h2"
            serifStyle="serif"
          />

          <TitleBlockTwo
            title="Two: Packages and Services"
            headingLevel="h2"
            serifStyle="serif"
          />

          <TitleBlockThree
            title="Three: Contact Sapwood"
            headingLevel="h2"
            serifStyle="serif"
          />

          <TitleBlockFour
            title="Four: Flexible Titles"
            headingLevel="h2"
            serifStyle="serif"
          />
        </div>
      </section>

      <section>
        <h2 className="label">Long Form Text — Regular Size</h2>

        <p>
          The FMA supports New Zealand’s transition to an integrated financial
          system – one that looks beyond financial returns to also consider
          non-financial factors.*
        </p>

        <p>
          An integrated financial system will require organisations to take
          account of their impacts on the environment, communities, and
          individuals, alongside traditional financial considerations. And also
          how these factors impact their organisation, including its financial
          performance.
        </p>

        <p>
          There is growing demand for organisations to identify their natural,
          social and human capital risks and opportunities, and to disclose how
          these will affect their financial performance. This is the concept
          behind the widely recognised Environmental, Social and Governance
          (ESG), and Climate Related Financial Disclosures (CRFD) frameworks.
        </p>

        <p>
          At the same time, demand for integrated investment products is rising,
          with heightened interest in products that either exclude investments
          associated with negative impacts, or fund those associated with
          positive impacts. These typically take one of two forms: securities
          such as ‘green bonds’ which often fund specific projects, or ethical
          or responsible managed funds, including some KiwiSaver schemes.
        </p>

        <p>
          As demand for integrated financial products grows, we want to ensure
          that investors can be confident these products deliver what they
          promise, and that investors are protected from poor product design and
          misleading promotion such as ‘greenwashing’.
        </p>

        <p>
          The FMA’s use of the term ‘integrated financial system’ reflects that
          other related terms do not have a commonly shared meaning and are not
          as widely inclusive. This includes the terms ‘ethical’, ‘responsible’,
          ‘sustainable’, ‘green’, ‘impact’, and ‘ESG’.
        </p>
        <p>
          The Treasury’s Living Standards Framework describes these
          non-financial factors as natural, social, and human capitals (in
          addition to traditional financial and physical capital).
        </p>
      </section>

      <section className="p-small">
        <h2 className="label">Long Form Text — Small Size</h2>

        <p>
          The FMA supports New Zealand’s transition to an integrated financial
          system – one that looks beyond financial returns to also consider
          non-financial factors.*
        </p>

        <p>
          An integrated financial system will require organisations to take
          account of their impacts on the environment, communities, and
          individuals, alongside traditional financial considerations. And also
          how these factors impact their organisation, including its financial
          performance.
        </p>

        <p>
          There is growing demand for organisations to identify their natural,
          social and human capital risks and opportunities, and to disclose how
          these will affect their financial performance. This is the concept
          behind the widely recognised Environmental, Social and Governance
          (ESG), and Climate Related Financial Disclosures (CRFD) frameworks.
        </p>

        <p>
          At the same time, demand for integrated investment products is rising,
          with heightened interest in products that either exclude investments
          associated with negative impacts, or fund those associated with
          positive impacts. These typically take one of two forms: securities
          such as ‘green bonds’ which often fund specific projects, or ethical
          or responsible managed funds, including some KiwiSaver schemes.
        </p>

        <p>
          As demand for integrated financial products grows, we want to ensure
          that investors can be confident these products deliver what they
          promise, and that investors are protected from poor product design and
          misleading promotion such as ‘greenwashing’.
        </p>

        <p>
          The FMA’s use of the term ‘integrated financial system’ reflects that
          other related terms do not have a commonly shared meaning and are not
          as widely inclusive. This includes the terms ‘ethical’, ‘responsible’,
          ‘sustainable’, ‘green’, ‘impact’, and ‘ESG’.
        </p>
        <p>
          The Treasury’s Living Standards Framework describes these
          non-financial factors as natural, social, and human capitals (in
          addition to traditional financial and physical capital).
        </p>
      </section>

      <section>
        <h2 className="label">Text Columns</h2>
        <TextColumns
          columnOne="Paying down debt and long-term interest loans in a managed, deliberate
        way that lets you work towards long-term goals while minimizing fees and
        ensuring you can meet your weekly needs."
          columnTwo="Setting short, medium and long-term goals to work towards — whether
        that’s paying off a loan, saving for a holiday, getting a new bike for
        your kids, or saving for your first home or retirement."
          columnThree="Working towards long-term financial security for yourself, your family
        and loved ones through making financial investments with different
        levels of managed risk and time horizons."
        />
      </section>

      <section>
        <h2 className="label">Text Columns Two Columns</h2>
        <TextColumns
          columnOne="Paying down debt and long-term interest loans in a managed, deliberate
        way that lets you work towards long-term goals while minimizing fees and
        ensuring you can meet your weekly needs."
          columnTwo="Setting short, medium and long-term goals to work towards — whether
        that’s paying off a loan, saving for a holiday, getting a new bike for
        your kids, or saving for your first home or retirement."
        />
      </section>

      <section>
        <h2 className="label">Text Columns Two Columns</h2>
        <TextColumns
          backgroundColumnStyle
          columnOne="Paying down debt and long-term interest loans in a managed, deliberate
        way that lets you work towards long-term goals while minimizing fees and
        ensuring you can meet your weekly needs."
          columnTwo="Setting short, medium and long-term goals to work towards — whether
        that’s paying off a loan, saving for a holiday, getting a new bike for
        your kids, or saving for your first home or retirement."
        />
      </section>

      <section>
        <h2 className="label">Text Columns Light Background Colour</h2>
        <TextColumns
          backgroundColumnStyle
          columnOne="Paying down debt and long-term interest loans in a managed, deliberate
        way that lets you work towards long-term goals while minimizing fees and
        ensuring you can meet your weekly needs."
          columnTwo="Setting short, medium and long-term goals to work towards — whether
        that’s paying off a loan, saving for a holiday, getting a new bike for
        your kids, or saving for your first home or retirement."
          columnThree="Working towards long-term financial security for yourself, your family
        and loved ones through making financial investments with different
        levels of managed risk and time horizons."
        />
      </section>
    </ComponentPageMainStyles>
  );
}

export default ComponentsPage;
