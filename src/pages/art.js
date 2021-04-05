import React from 'react';
import Helmet from 'react-helmet';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from 'components/Layout';
//import Gallery from 'components/PhotoGrid';
import Container from 'components/Container';
import Headings from 'components/Headings';
import { Gallery } from "gatsby-theme-gallery";

const ArtPage = () => {

const headingNames = ["Ink", "Watercolour", "Sketchbooks", "Photography", "Prints", "Acrylic", "Other"]

  return (
    <Layout pageName="art" titleName="Art">
      <Helmet>
        <title>Art</title>
      </Helmet>
      <Container>
            

			  <div className="artwork"> 
			  <Headings headingNames={headingNames} page="art"/>
			   <Gallery galleryMedium="Ink" /> 
			  <Gallery galleryMedium="Sketchbooks"/> 
			    <Gallery galleryMedium="Watercolour" /> 
				<Gallery galleryMedium="Photography" /> 
				<Gallery galleryMedium="Prints" /> 
				<Gallery galleryMedium="Acrylic" /> 
				<Gallery galleryMedium="Other" /> 
			   </div> 
				
      </Container>
    </Layout>
  );
};

export default ArtPage;