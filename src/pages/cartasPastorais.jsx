import * as React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import Seo from '../components/seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './css/homilias.module.css';

const Pastorais = ({ data }) => {
  return (
    <Layout pageTitle="Pastorais">
      <Seo title="Pastorais" />
      <div className={styles.gridContainer}>
        {data.allWpPastoral.nodes.map((node) => {
          const image = node.featuredImage ? getImage(node.featuredImage.node.localFile.childImageSharp.gatsbyImageData) : null;
          return (
            <div key={node.id} className={styles.gridItem}>
              <h2>
                <Link to={`/pastorais/${node.slug}`}>
                  {image ? (
                    <GatsbyImage image={image} alt={node.featuredImage.node.altText} />
                  ) : (
                    <p>Imagem não disponível</p>
                  )}
                  <div className={styles.aboutHomilia}>
                    <p className={styles.datas}>{node.date}</p>
                    <p className={styles.textos}>{node.title}</p>
                  </div>
                </Link>
              </h2>
              <div dangerouslySetInnerHTML={{ __html: node.content }} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpPastoral(sort: { date: DESC }) {
      nodes {
        id
        slug
        title
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
  }
`;

export const Head = () => <Seo title="Cartas Pastorais" />;
export default Pastorais;
