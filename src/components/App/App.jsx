import { GalleryList, Footer, Header, EditForm } from "../../index.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const [gallery, setGallery] = useState([]);

  const loadGallery = () => {
    axios
      .get("api/gallery")
      .then((response) => {
        setGallery(response.data);
      })
      .catch((err) => {
        console.error("ERROR in GET CLIENT", err);
        alert("Something went wrong!");
      });
  };
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <div data-testid="app">
      <Header toggleEdit={toggleEdit} />
      <EditForm isEdit={isEdit} toggleEdit={toggleEdit} loadGallery={loadGallery} />
      <GalleryList loadGallery={loadGallery} gallery={gallery} />
      <Footer />
    </div>
  );
}

export default App;
