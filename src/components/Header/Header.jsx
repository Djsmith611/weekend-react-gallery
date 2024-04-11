import { Box, Typography } from "@mui/material";

function Header() {
  return (
    <Box
      sx={{
        padding: 0,
        paddingTop: 2,
        paddingBottom: 4,
        marginBottom: 0,
        backgroundColor:"black",
        color:"white",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          marginBottom: 0,
        }}
        gutterBottom
      >
        David's Gallery
      </Typography>
    </Box>
  );
}

export default Header;
