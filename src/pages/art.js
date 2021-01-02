import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const ArtPage = () => {
  return (
    <Layout pageName="art" titleName="Art">
      <Helmet>
        <title>Art</title>
      </Helmet>
      <Container>
      
        <p>This is the art page</p>
      </Container>
    </Layout>
  );
};

export default ArtPage;