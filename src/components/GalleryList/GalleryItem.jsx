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
    <Card sx={{ width: "20%" }} data-testid="galleryItem" height="300px">
      <GalleryItemHeader item={item} />
      <Box height="10%" data-testid="toggle" onClick={toggleDescription}>
        {!isDescription && <GalleryItemImage item={item} />}
        {isDescription && <GalleryItemDescription item={item} />}
        <GalleryItemLikes item={item} loadGallery={loadGallery} />
      </Box>
    </Card>
  );
}

export default GalleryItem;
