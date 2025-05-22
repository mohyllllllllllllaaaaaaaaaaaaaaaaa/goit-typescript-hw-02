import css from "./ImageCard.module.css";

 const ImageCard = ({ src, alt, large, onClick }) => {
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
