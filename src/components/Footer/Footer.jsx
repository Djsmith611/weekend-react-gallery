/* IMPORT STATEMENTS */
import { Box, Typography } from "@mui/material";

/**
 * Footer content to be displayed in App
 * @returns Footer element
 */
function Footer() {
  return (
    <Box sx={{ // MUI Box for styling
        padding:1,
        textAlign:"center",
    }}>
      <Typography variant="h5">David Smith</Typography> {/* MUI Typography is similar to HTML <p></p> */}
    </Box>
  );
}

export default Footer;
