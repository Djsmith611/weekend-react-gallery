/* IMPORT STATEMENTS */
import { CardHeader, IconButton, Menu, MenuItem, Divider } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Vertical dots icon
import { useState } from "react";
import axios from "axios";

/**
 * "header" for GalleryItem
 * @param {*} props passed from GalleryItem 
 * @returns Image title and an options button to render the delete button
 */
function GalleryItemHeader({ item, loadGallery }) {
  const [anchorEl, setAnchorEl] = useState(null); // Anchor Element for the Menu
  const open = Boolean(anchorEl); // Boolean for if Menu is open
  
  /**
   * Handles click event for MoreVertIcon/IconButton
   */ 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Setting Menu anchor to area clicked
  };

  /**
   * Handles close event for Menu
   */
  const handleClose = () => {
    setAnchorEl(null); // Removes set Menu anchor
  };

  /**
   * Handles delete button click
   */
  const handleDelete = () => {
    /* Axios call to submit a DELETE request to the server */
    axios
      .delete(`/api/gallery/${item.id}`)
      .then((res) => {
        loadGallery(); // Reloads gallery images
        setAnchorEl(null); // Removes set Menu anchor
      })
      .catch((err) => { // Error message
        console.error(err);
      });
  }
  return (
    <> {/* empty element to satisfy jsx requirements while maintaining styling */}
      <CardHeader // MUI CardHeader component contains header info for Card component
        title={item.title} // Will display image title
        action={ // Actions for header
          <IconButton
          id="icon-button" // id established for popup functionality
          aria-controls={open ? 'basic-menu' : undefined} // Indicates Menu is controlled by the IconButton
          aria-haspopup="true" // Indicates that a popup(Menu) is availible
          aria-expanded={open ? 'true' : undefined}// Indicates whether the Menu is currently expanded or collapsed.
          onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        }
      />
      <Menu // MUI Menu component displays a popup menu on the item
        id="basic-menu" // id established for popup functionality
        anchorEl={anchorEl} // Anchor Element
        open={open} // Menu open boolean
        onClose={handleClose} // Calls when Menu is closed
        MenuListProps={{ // Props passed to Menu
          'aria-labelledby': 'icon-button',
        }}
        >
        <MenuItem onClick={handleDelete}>Delete</MenuItem> {/* Delete button */}
        <Divider sx={{ my: 0.5 }} /> {/* Divider for styling and UI improvement */}
        <MenuItem onClick={handleClose}>Close</MenuItem> {/* Close button to exit Menu */}
      </Menu>
    </ >
  );
}

export default GalleryItemHeader;
