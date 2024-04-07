function GalleryItemDisplay({item}) {
    return(
        <div className="GalleryItemDisplay">
            <img src={item.url} alt={item.title} />
        </div>
    )
}

export default GalleryItemDisplay;