import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Info from "../components/info";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
    </div>
    <hr />
    <Info />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
