import React from 'react';
import { Link } from 'gatsby';
import { Get_gallery_images } from "../hooks/get_gallery_images"
import Container from 'components/Container';
import Img from "gatsby-image"


const PhotoGrid = () => {

const images = Get_gallery_images()

  return (
        <div className="artworkInd"  >
       {images.map((node) => (
				<div className="artworkInd_cells">
                <Img key={node.id} fluid={node.childImageSharp.fluid} imgStyle={{ width: '100%' }}>
				
				</Img>
					<p className="hoverText">Text</p> 
				</div>
			 
            ))}
		
	   </div>
    )
};

export default PhotoGrid;