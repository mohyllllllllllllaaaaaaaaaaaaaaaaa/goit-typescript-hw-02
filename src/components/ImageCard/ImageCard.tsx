import css from "./ImageCard.module.css";

export interface ImagesCardInterface {
  src: string;
  alt: string;
  large: string;
  onClick: (image: {src: string; alt: string}) => void;
}
 const ImageCard = ({ src, alt, large, onClick }: ImagesCardInterface) => {
  const handleClick = () => {
    onClick({ src: large, alt });
  };

  return (
    <div className={css.card} >
      <img src={src} alt={alt} className={css.image} onClick={handleClick} />
    </div>
  );
};
export default ImageCard;
