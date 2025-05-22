import css from "./LoadMoreBtn.module.css";

 const LoadMoreBtn = ({ onClick, disabled }) => (
  <div className={css.wrapper}>
    <button className={css.button} onClick={onClick} disabled={disabled}>
    Load More
    </button>
  </div>
);
export default LoadMoreBtn;
