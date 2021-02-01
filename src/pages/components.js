import React from 'react';
import styled from 'styled-components';

import Typography from '../components/TypographyDemo';

import HeroTitleBlockFour from '../components/titles/HeroTitleBlockFour';
import HeroTitleBlockOne from '../components/titles/HeroTitleBlockOne';
import HeroTitleBlockThree from '../components/titles/HeroTitleBlockThree';
import HeroTitleBlockTwo from '../components/titles/HeroTitleBlockTwo';

import TitleBlockOne from '../components/titles/TitleBlockOne';
import TitleBlockTwo from '../components/titles/TitleBlockTwo';
import TitleBlockThree from '../components/titles/TitleBlockThree';
import TitleBlockFour from '../components/titles/TitleBlockFour';
import TextColumns from '../components/textSections/TextColumns';
import TextLargeImage from '../components/textSections/TextLargeImage';
import TextMediumImage from '../components/textSections/TextMediumImage';
import ImageTextReverseOrder from '../components/textSections/ImageTextReverseOrder';
import CardGridOne from '../components/cardBlocks/CardGridOne';
import CardGridTwo from '../components/cardBlocks/CardGridTwo';
import CardGridThree from '../components/cardBlocks/CardGridThree';
import CardGridFour from '../components/cardBlocks/CardGridFour';
import FormDemo from '../components/FormDemo';
import ImageWrapper from '../components/ImageWrapper';

const ComponentPageMainStyles = styled.main`
  /* ALL STYLES HERE ARE PURELY FOR PRESENTATION OF THE COMPONENTS PAGE, NO STYLES FOR COMPONENTS */

  grid-column: 1 / 8;

  section {
    grid-column: 1 / -1;
    border: 1px solid var(--dusk-pink-500);
  }

  .label {
    color: var(--dusk-pink-700);
    margin-bottom: 24px;
    margin-top: 72px;
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
        <h2 className="label">
          Text Columns Two Columns with Background Column Style
        </h2>
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
        <h2 className="label">Text Columns Background Column Style</h2>
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

      <section>
        <h1 className="label">Unordered List</h1>
        <ul>
          <li>
            New Zealand has a universal superannuation scheme. Everyone aged 65
            years old or over, who is a New Zealand citizen or permanent
            resident and normally lives in New Zealand at the time they apply is
            eligible.
          </li>
          <li>
            They must also have lived in New Zealand for at least 10 years since
            they turned 20 with five of those years being since they turned 50.
          </li>
          <li>
            Time spent overseas in certain countries and for certain reasons may
            be counted for New Zealand Superannuation.
          </li>
          <li>
            New Zealand Superannuation is taxed, the rate of which depends on
            their other income.
          </li>
          <li>
            The amount of Superannuation paid depends on the person's household
            situation.
          </li>
          <li>
            For a married couple the net tax amount is set by legislation to be
            no less than 66% of net average wage.
          </li>
        </ul>
      </section>

      <section>
        <h1 className="label">Ordered List</h1>
        <ol>
          <li>
            New Zealand has a universal superannuation scheme. Everyone aged 65
            years old or over, who is a New Zealand citizen or permanent
            resident and normally lives in New Zealand at the time they apply is
            eligible.
          </li>
          <li>
            They must also have lived in New Zealand for at least 10 years since
            they turned 20 with five of those years being since they turned 50.
          </li>
          <li>
            Time spent overseas in certain countries and for certain reasons may
            be counted for New Zealand Superannuation.
          </li>
          <li>
            New Zealand Superannuation is taxed, the rate of which depends on
            their other income.
          </li>
          <li>
            The amount of Superannuation paid depends on the person's household
            situation.
          </li>
          <li>
            For a married couple the net tax amount is set by legislation to be
            no less than 66% of net average wage.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="label">Text Sections</h2>
        <TitleBlockThree
          title="Sapwood Client Resources"
          headingLevel="h2"
          serifStyle="serif"
        />
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
      </section>

      <section>
        <h2 className="label">Text Sections</h2>
        <TitleBlockThree
          title="Varied Client Packages"
          headingLevel="h2"
          serifStyle="serif"
        />
        <TextLargeImage />
      </section>

      <section>
        <h2 className="label">Text Sections</h2>
        <TitleBlockThree
          title="One-on-one Client Meetings"
          headingLevel="h2"
          serifStyle="serif"
        />
        <TextMediumImage />
      </section>

      <section>
        <h2 className="label">Text Sections</h2>
        <TitleBlockThree
          title="Appproachable and Adaptable Solutions"
          headingLevel="h2"
          serifStyle="serif"
        />
        <ImageTextReverseOrder />
      </section>

      <section>
        <h2 className="label">Card Grids</h2>
        <h3 className="label">Card Grid One</h3>
        <CardGridOne />
        <h3 className="label">Card Grid Two</h3>
        <CardGridTwo />
        <h3 className="label">Card Grid Three</h3>
        <CardGridThree />
        <h3 className="label">Card Grid Four</h3>
        <CardGridFour />
      </section>

      <section>
        <h2 className="label">Form Inputs and Buttons</h2>
        <FormDemo />
      </section>
    </ComponentPageMainStyles>
  );
}

export default ComponentsPage;
