import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export { default as GalleryItemHeader } from './components/GalleryList/GalleryItemHeader.jsx';
export { default as GalleryItemImage } from './components/GalleryList/GalleryItemImage.jsx';
export { default as GalleryItemDescription } from './components/GalleryList/GalleryItemDescription.jsx';
export { default as GalleryItemLikes } from './components/GalleryList/GalleryItemLikes.jsx';
export { default as GalleryItem } from './components/GalleryList/GalleryItem.jsx';
export { default as GalleryList} from './components/GalleryList/GalleryList.jsx';
export { default as Header } from './components/Header/Header.jsx';
export { default as Footer } from './components/Footer/Footer.jsx';