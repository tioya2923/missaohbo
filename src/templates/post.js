import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './posts.module.css';



const BlogPost = ({ data }) => {
  const image = getImage(data.wpPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData);
  return (
    <Layout pageTitle="">
      <div className={styles.postContainer}>
        <p className={styles.titles}>{data.wpPost.title}</p>
        <p className={styles.date}>{data.wpPost.date}</p>
        {image ? (
          <GatsbyImage image={image} alt={data.wpPost.featuredImage.node.altText} />
        ) : (
          <p>Imagem não disponível</p>
        )}


        <div dangerouslySetInnerHTML={{ __html: data.wpPost.content }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      date(formatString: "D/MM/YYYY")
      content
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

export const Head = ({ data }) => <Seo title={data.wpPost.title} />;

export default BlogPost;
