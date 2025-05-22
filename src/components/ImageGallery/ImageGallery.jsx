import ImageCard from '../ImageCard/ImageCard';
import css from "./imageGallery.module.css";

 const PhotoGallery = ({ images, onImageClick, isScrolling }) => {
  return (
    <div className={css.container}>
    <ul className={`${css.list} ${isScrolling ? "scroll-animation" : ""}`}>
      {images.map((img) => (
        <li key={img.id} className={css.item}>
          <ImageCard
            src={img.urls.small}
            alt={img.alt_description}
            large={img.urls.regular}
            onClick={onImageClick}
          />
        </li>
      ))}
    </ul>
    </div>
  );
};
export default PhotoGallery;