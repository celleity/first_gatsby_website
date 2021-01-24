import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const ThoughtsPage = () => {
  return (
    <Layout pageName="thoughts" titleName="Thoughts">
      <Helmet>
        <title>Thoughts</title>
      </Helmet>
      <Container>
      
        <p>This is the thoughts page</p>
      </Container>
    </Layout>
  );
};

export default ThoughtsPage;