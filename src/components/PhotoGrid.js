import React from 'react';
import { Link } from 'gatsby';
import { Get_gallery_images } from "../hooks/get_gallery_images"
import Container from 'components/Container';
import TitleText from 'components/TitleText';
import Img from "gatsby-image"


const PhotoGrid = () => {

const images = Get_gallery_images()
//returns an data object with photo info
//need to add title info



  return (
        <div className="artworkInd"  >
		
       {images.map((node) => (
				
				

			
				<div className="artworkInd_cells" >
					
			<a href={"/art/" + node.childImageSharp.fluid.src.split("/")[4].split(".")[0]}>
				<TitleText key={node.childImageSharp.fluid.src} title={node.childImageSharp.fluid.src.split("/")[4].split(".")[0]}/> 
					
			
				<Img  key={node.id} fluid={node.childImageSharp.fluid} imgStyle={{ width: '100%' }}>
			
				</Img>
				</a>
			
				
				</div>
				
            ))}
			
	   </div>
    )
};

export default PhotoGrid; 