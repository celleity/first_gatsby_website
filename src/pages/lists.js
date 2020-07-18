import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const ListsPage = () => {
  return (
    <Layout pageName="lists">
      <Helmet>
        <title>Lists</title>
      </Helmet>
      <Container>
        <h1>Lists</h1>
        <p>This is the list page</p>
      </Container>
    </Layout>
  );
};

export default ListsPage;