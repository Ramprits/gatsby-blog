import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/layout";

const articles = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allStrapiArticle {
            edges {
              node {
                id
                title
                content
                createdAt
              }
            }
          }
        }
      `}
      render={data => {
        const articles = data.allStrapiArticle.edges;
        return (
          <Layout>
            <h3>Welcome to articles!</h3>
            {articles.map(({ node }) => {
              return (
                <React.Fragment>
                  <p key={node.id}>{node.title}</p>
                </React.Fragment>
              );
            })}
          </Layout>
        );
      }}
    />
  );
};

articles.propTypes = {
  title: PropTypes.string
};

export default articles;
