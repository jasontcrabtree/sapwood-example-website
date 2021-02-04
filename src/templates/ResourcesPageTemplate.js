import React from 'react';
import { graphql } from 'gatsby';
import HTMLRenderer from 'react-html-renderer';
import styled from 'styled-components';
import SEO from '../components/globalComponents/SEO';
import HeroTitleBlockOne from '../components/titles/HeroTitleBlockOne';
import SliceZone from '../components/globalComponents/SliceZone';
import CardGridFour from '../components/cardBlocks/CardGridFour';
import TextColumns from '../components/textSections/TextColumns';
import ImageTextReverseOrder from '../components/textSections/ImageTextReverseOrder';
import CardGridTwo from '../components/cardBlocks/CardGridTwo';

export const resourcesPageQuery = graphql`
  query resourcesRepeatablePage($uid: String) {
    prismicResourcesRepeatable(uid: { eq: $uid }) {
      uid
      data {
        page_title {
          text
        }
      }
    }
  }
`;

const ResourcesPageMainStyles = styled.main`
  section {
    display: grid;
    grid-column: 1 / -1;
    /* margin-left: auto;
    margin-right: auto; */
    /* margin-top: 96px; */
  }

  section + * {
    margin-top: 96px;
  }

  section > * {
    /* width: 100%; */
    /* max-width: 100%; */
    /* margin-left: auto;
    margin-right: auto; */
  }

  section > * + * {
    /* margin-top: 96px; */
  }

  section > figure {
    margin-top: 96px;
  }
`;

const ResourcesPageTemplate = (props) => {
  const { data } = props;

  const resourcesPageDataRes = data.prismicResourcesRepeatable.data;

  console.log(resourcesPageDataRes);

  const title = resourcesPageDataRes.page_title.text;

  console.log(title);

  return (
    <ResourcesPageMainStyles id="main">
      <SEO
      /* title={title}
        image={image}
        imageALT={imageALT}
        description={description} */
      />
      <section>
        <HeroTitleBlockOne title={title} headingLevel="h2" />
      </section>
      <section>
        <ImageTextReverseOrder />
      </section>
      <section>
        <h2>Applying these Resources</h2>
        <TextColumns
          columnOne="DISCLAIMER TEXT:

          Mauris, ut turpis euismod auctor scelerisque integer sem commodo. Ipsum suspendisse ac lectus felis, nam sed at donec. Bibendum aliquam tortor bibendum id varius cras in vel hac. Ac ultrices hac enim posuere sed mauris quis congue. Molestie eu, eget nam magnis cursus eget volutpat faucibus. Augue elit, curabitur laoreet in sed magna a amet. Amet tellus luctus aliquet a malesuada. Condimentum commodo nec mattis urna quam cursus. Sollicitudin bibendum in pharetra enim dictum lacus, vitae non fames. "
        />
      </section>
      <section>
        <CardGridTwo />
      </section>
      <section>
        <h2>Applying these Resources</h2>
        <TextColumns
          columnOne="DISCLAIMER TEXT:

          Mauris, ut turpis euismod auctor scelerisque integer sem commodo. Ipsum suspendisse ac lectus felis, nam sed at donec. Bibendum aliquam tortor bibendum id varius cras in vel hac. Ac ultrices hac enim posuere sed mauris quis congue. Molestie eu, eget nam magnis cursus eget volutpat faucibus. Augue elit, curabitur laoreet in sed magna a amet. Amet tellus luctus aliquet a malesuada. Condimentum commodo nec mattis urna quam cursus. Sollicitudin bibendum in pharetra enim dictum lacus, vitae non fames. "
        />
      </section>
      <section>
        <CardGridFour />
      </section>
    </ResourcesPageMainStyles>
  );
};

export default ResourcesPageTemplate;
