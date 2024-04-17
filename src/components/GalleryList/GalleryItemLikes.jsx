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
   * Adds to like count of given item
   * @param {*} id for item
   */
  const likeItem = () => {
    /* Axios call to submit a PUT request */
    axios
      .put(`api/gallery/like/${item.id}`)
      .then((res) => {
        loadGallery(); // Reload gallery images to display new like count
      })
      .catch((err) => { // Error handling
        console.error("ERROR in PUT CLIENT", err);
        alert("Something bad happened.");
      });
  };

  return (
    <CardActions sx={{ marginTop: 3 }}> {/* MUI CardActions component holds buttons on Card component */}
      <IconButton // MUI IconButton component allows an icon to function as a button
        onClick={() => {
          likeItem(); // Adds to item like count
        }}
      >
        <FavoriteIcon data-testid="like" /> {/* data-testid is used for automated testing, use npm test and try it out! */}
      </IconButton>
      <Chip label={item.likes} /> {/* MUI Chip used for styling of like count */}
    </CardActions>
  );
}

export default GalleryItemLikes;
