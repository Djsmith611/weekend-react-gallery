import { CardMedia } from "@mui/material";
function GalleryItemImage({ item }) {
  return <CardMedia component="img" image={item.url} alt={item.title} />;
}

export default GalleryItemImage;
