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
import useSewingGallery from "../hooks/useSewingGallery";
import useSketchbooksGallery from "../hooks/useSketchbooksGallery";
import Grid from "./Grid";
import Tile from "./Tile";

const imgStyles: any = {
  css: {
    position: "absolute",
	display:"grid",
	backgroundcolor:"black",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    transition: "transform 0.5s, filter 0.25s",
    "&:hover": {
      //transform: "scale(1.1)",
      filter: "saturate(1.3)",
    },
  },
};

const Gallery = ({galleryMedium}) => {
		var images; 
	
	if (galleryMedium === ("Ink")){
		images = useInkGallery();

	}
		
	if (galleryMedium === ("Watercolour")){
		images = useWatercolourGallery();
	
	}
	if (galleryMedium === ("Sketchbooks")){
		images = useSketchbooksGallery();
		
	}
		if (galleryMedium === ("Photography")){
		images = usePhotographyGallery();
	
	}
	if (galleryMedium === ("Prints")){
		images = usePrintsGallery();
	
	}

	if (galleryMedium === ("Acrylic")){
		images = useAcrylicGallery();
	
	}
	if (galleryMedium === ("Other")){
		
		images = useOtherGallery();
	
	}

	if (galleryMedium === ("Sewing")){
		
		images = useSewingGallery();
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
          > {galleryMedium !== "Sewing" ?	<div className="caption">   {image.name}  </div> : null}
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