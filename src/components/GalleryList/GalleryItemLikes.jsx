/* IMPORT STATEMENTS */
import { CardActions, IconButton, Chip } from "@mui/material";
import axios from "axios";
import FavoriteIcon from "@mui/icons-material/Favorite";

/**
 * Like 
 * @param {*} props passed from GalleryItem
 * @returns 
 */
function GalleryItemLikes({ item, loadGallery }) {
  const likeItem = (id) => {
    axios
      .put(`api/gallery/like/${id}`)
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
        <FavoriteIcon data-testid="like" />
      </IconButton>
      <Chip label={item.likes} />
    </CardActions>
  );
}

export default GalleryItemLikes;
