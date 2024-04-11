import {
  GalleryItemHeader,
  GalleryItemImage,
  GalleryItemDescription,
  GalleryItemLikes,
} from "../../index.jsx";
import { Box, Card, Stack } from "@mui/material";
import { useState } from "react";

function GalleryItem({ item, loadGallery }) {
  const [isDescription, setIsDescription] = useState(false);
  const toggleDescription = () => {
    setIsDescription(!isDescription);
  };
  return (
    <Card sx={{ 
      width: "20%",
      height: "60vh",
     }} data-testid="galleryItem" >
      <GalleryItemHeader item={item} />
      <Box sx={{
        height:"40vh"
      }} data-testid="toggle" onClick={toggleDescription}>
        {!isDescription && <GalleryItemImage item={item} />}
        {isDescription && <GalleryItemDescription item={item} />}
      </Box>
      {!isDescription && <GalleryItemLikes item={item} loadGallery={loadGallery} />}
    </Card>
  );
}

export default GalleryItem;
