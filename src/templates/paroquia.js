import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './posts.module.css';

const Paroquia = ({ data }) => {
  const paroquia = data.wpParoquia;
  const image = paroquia.featuredImage ? getImage(paroquia.featuredImage.node.localFile.childImageSharp.gatsbyImageData) : null;

  return (
    <Layout pageTitle="">
      <Seo title={paroquia.title} />
      <div className={styles.postContainer}>
        <p className={styles.titles}>{paroquia.title}</p>
       
        {image ? (
          <GatsbyImage image={image} alt={paroquia.featuredImage.node.altText} />
        ) : (
          <p>Imagem não disponível</p>
        )}
        <div dangerouslySetInnerHTML={{ __html: paroquia.content }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    wpParoquia(id: { eq: $id }) {
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

export const Head = ({ data }) => <Seo title={data.wpParoquia.title} />;
export default Paroquia;
