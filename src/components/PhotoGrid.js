import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';
import Img from "gatsby-image"


const PhotoGrid = ({image}) => {
  return (
    <PhotoGrid>
     <img src={image} alt="this is some art"/>
    </PhotoGrid>
  );
};

export default PhotoGrid;