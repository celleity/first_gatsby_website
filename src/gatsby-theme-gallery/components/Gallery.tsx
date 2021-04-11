/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import Img from "gatsby-image";
import { Lightbox } from "react-modal-image";
import useGallery from "../hooks/useGallery";
import useInkGallery from "../hooks/useInkGallery";
import useWatercolourGallery from "../hooks/useWatercolourGallery";
import usePhotographyGallery from "../hooks/usePhotographyGallery";
import usePrintsGallery from "../hooks/usePrintsGallery";
import useAcrylicGallery from "../hooks/useAcrylicGallery";
import useOtherGallery from "../hooks/useOtherGallery";
import useSketchbooksGallery from "../hooks/useSketchbooksGallery";
import Grid from "./Grid";
import Tile from "./Tile";

const imgStyles: any = {
  css: {
    position: "absolute",
	display:"grid",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    transition: "transform 0.5s, filter 0.25s",
    "&:hover": {
      transform: "scale(1.1)",
      filter: "saturate(1.3)",
    },
  },
};

const Gallery = ({galleryMedium}) => {
		var images; 
		console.log(galleryMedium)
	if (galleryMedium === ("Ink")){
		images = useInkGallery();
		console.log(galleryMedium)
		console.log(images)
	}
		
	if (galleryMedium === ("Watercolour")){
		images = useWatercolourGallery();
		console.log(galleryMedium)
		console.log(images)
	}
	if (galleryMedium === ("Sketchbooks")){
		images = useSketchbooksGallery();
		console.log(galleryMedium)
		console.log(images)
	}
		if (galleryMedium === ("Photography")){
		images = usePhotographyGallery();
		console.log(galleryMedium)
		console.log(images)
	}
	if (galleryMedium === ("Prints")){
		images = usePrintsGallery();
		console.log(galleryMedium)
		console.log(images)
	}

	if (galleryMedium === ("Acrylic")){
		images = useAcrylicGallery();
		console.log(galleryMedium)
		console.log(images)
	}
	if (galleryMedium === ("Other")){
		
		images = useOtherGallery();
		console.log(galleryMedium)
		console.log(images)
	}
	
  
  const [showImageIndex, setShowImageIndex] = React.useState<
    number | undefined
  >(undefined);

  return (
    <div id={galleryMedium}>
      <Grid>
        {images.map((image, index) => (
          <Tile
			className="tile"
            key={image.id}
            onClick={() => {
              setShowImageIndex(index);
            }}
          > 	<div className="caption"> {image.name} </div>
            <Img alt={image.name} fluid={image.fluid} {...imgStyles}/>
		
			
          </Tile>
        ))}
      </Grid>
      {showImageIndex !== undefined && (
        <Lightbox
          hideDownload={true}
          large={images[showImageIndex].publicURL}
          onClose={() => {
            setShowImageIndex(undefined);
          }}
        />
      )}
    </div>
  );
};

export default Gallery;