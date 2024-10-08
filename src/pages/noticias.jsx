import * as React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import Seo from '../components/seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './css/noticias.module.css';

const Noticias = ({ data }) => {
  return (
    <Layout pageTitle="Notícias">
      <div className={styles.gridContainer}>
        {data.allWpPost.nodes.map((node) => {
          const image = node.featuredImage ? getImage(node.featuredImage.node.localFile.childImageSharp.gatsbyImageData) : null;
          return (
            <div key={node.id} className={styles.gridItem}>
              <h2>
                <Link to={`/noticias/${node.slug}`}>
                  {image ? (
                    <GatsbyImage image={image} alt={node.featuredImage.node.altText} />
                  ) : (
                    <p>Imagem não disponível</p>
                  )}
                  <div className={styles.aboutNew}>
                    <p className={styles.datas}>{node.date}</p>
                    <p className={styles.textos}>{node.title}</p>
                  </div>
                </Link>
              </h2>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpPost(sort: { date: DESC }) {
      nodes {
        id
        slug
        title
        date(formatString: "D/MM/YYYY")
        excerpt
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

export const Head = () => <Seo title="Notícias" />;
export default Noticias;
