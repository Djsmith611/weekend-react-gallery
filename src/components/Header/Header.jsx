import { Box, IconButton, Stack, Typography } from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';



function Header({ toggleEdit }) {
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
      <Stack direction="row" spacing={125} >
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
        <IconButton onClick={() => {toggleEdit()}}>
          <AddAPhotoIcon sx={{color:"white"}} />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Header;
