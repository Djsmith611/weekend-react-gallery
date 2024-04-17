import { CardHeader, IconButton, Menu, MenuItem, Divider } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import axios from "axios";

function GalleryItemHeader({ item, loadGallery }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    
    axios
      .delete(`/api/gallery/${item.id}`)
      .then((res) => {
        loadGallery();
        setAnchorEl(null);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <>
    <CardHeader
      title={item.title}
      action={
        <IconButton
        id="icon-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        
      }
    />
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'icon-button',
      }}
      >
      <MenuItem onClick={handleDelete}>Delete</MenuItem>
      <Divider sx={{ my: 0.5 }} />
      <MenuItem onClick={handleClose}>Close</MenuItem>
    </Menu>
    </ >
  );
}

export default GalleryItemHeader;
