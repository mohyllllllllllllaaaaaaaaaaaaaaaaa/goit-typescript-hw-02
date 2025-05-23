import ImageCard from '../ImageCard/ImageCard';
import css from "./imageGallery.module.css";
import { UnsplashPhoto } from '../../ApiService/photos';

export interface GalerryProps {
  images: UnsplashPhoto[] ;
  onImageClick: (img: {src: string; alt: string}) => void; 
}
 const PhotoGallery: React.FC<GalerryProps> = ({ images, onImageClick }) => {
  return (
    <div className={css.container}>
    <ul className={css.list}>
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