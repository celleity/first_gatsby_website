import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const ArtPage = () => {
  return (
    <Layout pageName="art">
      <Helmet>
        <title>Art</title>
      </Helmet>
      <Container>
        <h1>Art</h1>
        <p>This is the art page</p>
      </Container>
    </Layout>
  );
};

export default ArtPage;