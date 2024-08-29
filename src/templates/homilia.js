import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './posts.module.css';

const Homilia = ({ data }) => {
  const homilia = data.wpHomilia;
  const image = homilia.featuredImage ? getImage(homilia.featuredImage.node.localFile.childImageSharp.gatsbyImageData) : null;

  return (
    <Layout pageTitle="">
      <Seo title={homilia.title} />
      <div className={styles.postContainer}>
        <p className={styles.titles}>{homilia.title}</p>
        <p className={styles.date}>{homilia.date}</p>
        {image ? (
          <GatsbyImage image={image} alt={homilia.featuredImage.node.altText} />
        ) : (
          <p>Imagem não disponível</p>
        )}
        <div dangerouslySetInnerHTML={{ __html: homilia.content }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    wpHomilia(id: { eq: $id }) {
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

export const Head = ({ data }) => <Seo title={data.wpHomilia.title} />;
export default Homilia;
