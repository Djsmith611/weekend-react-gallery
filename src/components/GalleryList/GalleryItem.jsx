/* IMPORT STATEMENTS */
import {
  GalleryItemHeader,
  GalleryItemImage,
  GalleryItemDescription,
  GalleryItemLikes,
} from "../../index.jsx"; // Check index,jsx for more information
import { Box, Card } from "@mui/material";
import { useState } from "react";

/**
 * Returns an item to dbe displayed in GalleryList
 * @param {*} props passed from GalleryList 
 * @returns an MUI card filled out with data from the galleryList array
 */
function GalleryItem({ item, loadGallery }) {
  /* Variable stores state for specific card to display or hide item description */
  const [isDescription, setIsDescription] = useState(false);

  /**
   * Toggles Description boolean
   */
  const toggleDescription = () => {
    setIsDescription(!isDescription); // isDescription setter
  };
  return (
    <Card sx={{ // MUI Card is used for displaying data in an organized reuseable component
      width: "20%",
      height: "60vh",
     }} data-testid="galleryItem" > {/* data-testid is used for automated testing, use npm test to try it out! */}
      <GalleryItemHeader item={item} loadGallery={loadGallery} /> {/* Header for Card */}
      <Box sx={{ // Will conditionally render box content depending on isDescription variable
        height:"40vh"
      }} data-testid="toggle" onClick={toggleDescription}> {/* data-testid is used for automated testing, use npm test to try it out! */}
        {!isDescription && <GalleryItemImage item={item} />}
        {isDescription && <GalleryItemDescription item={item} />}
      </Box>
      {/* Conditionally rendered likes and like button due to styling conflict */}
      {!isDescription && <GalleryItemLikes item={item} loadGallery={loadGallery} />}
    </Card>
  );
}

export default GalleryItem;
