import { CardContent, Typography } from "@mui/material";

function GalleryItemDescription({ item }) {
  return (
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {item.description}
      </Typography>
    </CardContent>
  );
}

export default GalleryItemDescription;
