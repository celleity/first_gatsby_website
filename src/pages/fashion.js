import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const FashionPage = () => {
  return (
    <Layout pageName="fashion" titleName="Fashion">
      <Helmet>
     
      </Helmet>
      <Container>
      
        <p >This is the fashion page</p>
      </Container>
    </Layout>
  );
};

export default FashionPage;