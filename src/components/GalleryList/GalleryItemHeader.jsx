import { CardHeader, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function GalleryItemHeader({ item }) {
  return (
    <CardHeader
      title={item.title}
      action={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
    />
  );
}

export default GalleryItemHeader;
