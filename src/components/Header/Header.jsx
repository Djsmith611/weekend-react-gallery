/* IMPORT STATEMENTS */
import { Box, IconButton, Stack, Typography } from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

/**
 * Header component for App
 * @param {*} toggleEdit passed as prop from App
 * @returns Header text and a button to add a photo/description
 */
function Header({ toggleEdit }) {
  return (
    <Box // MUI Box used for styling
      sx={{ // Box styles
        padding: 0,
        paddingTop: 2,
        paddingBottom: 4,
        marginBottom: 0,
        backgroundColor:"black",
        color:"white",
      }}
    >
      <Stack direction="row" spacing={125} > {/* MUI Stack used to format text and button */}
        <Typography  // MUI Typography functions as n HTML p element
        variant="h1"
        sx={{
          textAlign: "center",
          marginBottom: 0,
        }}
        gutterBottom // Adds bottom margin to element
        >
        David's Gallery
        </Typography>
        <IconButton onClick={() => {toggleEdit()}}> {/* Allows icon to function ad a button will trigger overlay and form to display */}
          <AddAPhotoIcon sx={{color:"white"}} />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Header;
