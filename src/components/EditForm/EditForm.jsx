import { Backdrop, Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function EditForm({ isEdit, toggleEdit, loadGallery }) {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    const clearInputFields = () => {
        setTitle('');
        setUrl('');
        setDescription('');
        toggleEdit();
    }
    const addPhoto = () => {
        const data = {
            title:title, 
            url:url, 
            description:description
        }
        axios
            .post("api/gallery", data)
            .then((res) => {
                clearInputFields();
                loadGallery();
            })
            .catch((err) => {
                console.error(err);
                alert("Something went wrong!");
            });
    }

    return(
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isEdit}
        >
          <Box sx={{
            backgroundColor:"white",
            padding:10,
            borderRadius:"10px",
          }}>
            <Stack direction="column" spacing={5}>
              <TextField label="Title" variant="filled" value={title} onChange={(e) => setTitle(e.target.value)} />
              <TextField label="Url" variant="filled" value={url} onChange={(e) => setUrl(e.target.value)} />
              <TextField label="Description" variant="filled" multiline value={description} onChange={(e) => setDescription(e.target.value)} />
              <Button variant="contained" onClick={addPhoto} >Submit Photo</Button>
              <Button variant="text" onClick={toggleEdit} color="error" >Cancel</Button>
            </Stack>
          </Box>
        </Backdrop>
    );
}

export default EditForm;