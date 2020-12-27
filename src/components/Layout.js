import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'assets/stylesheets/application.scss';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Title from 'components/Title';


const Layout = ({ children, pageName, titleName}) => {

  let className = '';

  if ( pageName ) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className}}>
        <title>Celine's Web Site</title>
      </Helmet>
	

      
        <Header />
		 
		 
        <main>{ children }</main>
      
      
    </>
  );

};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  
}

export default Layout;