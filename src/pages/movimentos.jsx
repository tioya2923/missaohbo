import * as React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import Seo from '../components/seo';
import * as styles from './css/lists.module.css';

const Movimentos = ({ data }) => {
  return (
    <Layout pageTitle="Movimentos de Apostolado e Associações Cristãs">
      <Seo title="Movimentos de Apostolado e Associações Cristãs" />
      <div className={styles.gridContainer}>
        {data.allWpMovimento.nodes.map((node) => {
          return (
            <div key={node.id} className={styles.gridItem}>
              <h2>
                <Link to={`/movimentos/${node.slug}`}>
                  <div className={styles.aboutHomilia}>
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
    allWpMovimento(sort: { fields: title, order: ASC }) {
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

export const Head = () => <Seo title="Movimentos" />;
export default Movimentos;
