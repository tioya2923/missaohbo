import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './posts.module.css';

const Missao = ({ data }) => {
  const missao = data.wpMissao;
  const image = missao.featuredImage ? getImage(missao.featuredImage.node.localFile.childImageSharp.gatsbyImageData) : null;

  return (
    <Layout pageTitle="">
      <Seo title={missao.title} />
      <div className={styles.postContainer}>
        <p className={styles.titles}>{missao.title}</p>
       
        {image ? (
          <GatsbyImage image={image} alt={missao.featuredImage.node.altText} />
        ) : (
          <p>Imagem não disponível</p>
        )}
        <div dangerouslySetInnerHTML={{ __html: missao.content }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    wpMissao(id: { eq: $id }) {
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

export const Head = ({ data }) => <Seo title={data.wpMissao.title} />;
export default Missao;
