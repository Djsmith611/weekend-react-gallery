/* IMPORT STATEMENT */
import { CardContent, Typography } from "@mui/material";

/**
 * description for Card displays
 * @param {*} item prop passed from GalleryItem component
 * @returns card description to be conditionally rendered
 */
function GalleryItemDescription({ item }) {
  return (
    <CardContent> {/* MUI CardContent component used to display content within Card component */}
      <Typography variant="body2" color="text.secondary"> {/* MUI Typography component functions similarly to <p></p> */}
        {item.description} {/* item description stored in item object */}
      </Typography>
    </CardContent>
  );
}

export default GalleryItemDescription;
