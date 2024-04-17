/* IMPORT STATEMENTS */
import { CardActions, IconButton, Chip } from "@mui/material";
import axios from "axios";
import FavoriteIcon from "@mui/icons-material/Favorite";

/**
 * "footer" for Card component
 * @param {*} props passed from GalleryItem
 * @returns like button and like count for given item
 */
function GalleryItemLikes({ item, loadGallery }) {
  /**
   * 
   * @param {*} id for item
   */
  const likeItem = () => {
    axios
      .put(`api/gallery/like/${item.id}`)
      .then((res) => {
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
          likeItem();
        }}
      >
        <FavoriteIcon data-testid="like" />
      </IconButton>
      <Chip label={item.likes} />
    </CardActions>
  );
}

export default GalleryItemLikes;
