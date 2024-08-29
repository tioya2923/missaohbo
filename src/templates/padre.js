import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './posts.module.css';

const Padre = ({ data }) => {
  const padre = data.wpClero;
  const image = padre.featuredImage ? getImage(padre.featuredImage.node.localFile.childImageSharp.gatsbyImageData) : null;

  return (
    <Layout pageTitle="">
      <Seo title={padre.title} />
      <div className={styles.postContainer}>
        <p className={styles.titles}>{padre.title}</p>
      
        {image ? (
          <GatsbyImage image={image} alt={padre.featuredImage.node.altText} />
        ) : (
          <p>Imagem não disponível</p>
        )}
        <div dangerouslySetInnerHTML={{ __html: padre.content }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    wpClero(id: { eq: $id }) {
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

export const Head = ({ data }) => <Seo title={data.wpClero.title} />;
export default Padre;
