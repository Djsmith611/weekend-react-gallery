/* IMPORT STATEMENT */
import { CardMedia } from "@mui/material";

/**
 * Image componet for display in GalleryItem
 * @param {*} item object passed from GalleryItem
 * @returns Image
 */
function GalleryItemImage({ item }) {
  {/* MUI CardMedia component will display an image with styling consistent with card component */}
  return <CardMedia component="img" image={item.url} alt={item.title} />; 
}
export default GalleryItemImage;
