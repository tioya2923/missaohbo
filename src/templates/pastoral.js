import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './posts.module.css';

const Pastoral = ({ data }) => {
  const pastoral = data.wpPastoral;
  const image = pastoral.featuredImage ? getImage(pastoral.featuredImage.node.localFile.childImageSharp.gatsbyImageData) : null;

  return (
    <Layout pageTitle="">
      <Seo title={pastoral.title} />
      <div className={styles.postContainer}>
        <p className={styles.titles}>{pastoral.title}</p>
        <p className={styles.date}>{pastoral.date}</p>
        {image ? (
          <GatsbyImage image={image} alt={pastoral.featuredImage.node.altText} />
        ) : (
          <p>Imagem não disponível</p>
        )}
        <div dangerouslySetInnerHTML={{ __html: pastoral.content }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    wpPastoral(id: { eq: $id }) {
      title
      content
      date(formatString: "D/MM/YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.wpPastoral.title} />;
export default Pastoral;
