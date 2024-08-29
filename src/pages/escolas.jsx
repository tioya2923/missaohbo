import * as React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import Seo from '../components/seo';
import * as styles from './css/lists.module.css';

const Escolas = ({ data }) => {
  return (
    <Layout pageTitle="Escolas Católicas e Institutos de Ensino">
      <Seo title="Escolas Católicas e Institutos de Ensino" />
      <div className={styles.gridContainer}>
        {data.allWpEscola.nodes.map((node) => {
          return (
            <div key={node.id} className={styles.gridItem}>
              <h2>
                <Link to={`/escolas/${node.slug}`}>
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
    allWpEscola(sort: { fields: title, order: ASC }) {
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

export const Head = () => <Seo title="Escolas" />;
export default Escolas;
