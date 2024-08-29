import * as React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import Seo from '../components/seo';
import * as styles from './css/homilias.module.css';

const Paroquias = ({ data }) => {
  return (
    <Layout pageTitle="Paroquias">
      <Seo title="Paroquias" />
      <div className={styles.gridContainer}>
        {data.allWpParoquia.nodes.map((node) => {
          return (
            <div key={node.id} className={styles.gridItem}>
              <h2>
                <Link to={`/paroquias/${node.slug}`}>
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
    allWpParoquia(sort: { fields: title, order: ASC }) {
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

export const Head = () => <Seo title="Paroquias" />;
export default Paroquias;
