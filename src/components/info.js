import React from "react";
import { StaticQuery, graphql } from "gatsby";
const info = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      `}
      render={data => {
        const { title, description, author } = data.site.siteMetadata;
        return (
          <React.Fragment>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{author}</p>
          </React.Fragment>
        );
      }}
    />
  );
};

export default info;
