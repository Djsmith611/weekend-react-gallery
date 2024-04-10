import { CardActions, IconButton, Chip } from "@mui/material";
import axios from "axios";
import FavoriteIcon from "@mui/icons-material/Favorite";

function GalleryItemLikes({ item, loadGallery }) {
  const likeItem = (id) => {
    axios
      .put(`api/gallery/${id}`)
      .then((response) => {
        loadGallery();
      })
      .catch((err) => {
        console.error("ERROR in PUT CLIENT", err);
        alert("Something bad happened.");
      });
  };

  return (
    <CardActions sx={{ marginTop: 3 }}>
      <IconButton
        onClick={() => {
          likeItem(item.id);
        }}
      >
        <FavoriteIcon />
      </IconButton>
      <Chip label={item.likes} />
    </CardActions>
  );
}

export default GalleryItemLikes;
