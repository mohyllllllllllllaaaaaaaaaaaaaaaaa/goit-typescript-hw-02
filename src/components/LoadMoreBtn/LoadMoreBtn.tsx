import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
  disabled: boolean;
}

 const LoadMoreBtn = ({ onClick, disabled }: LoadMoreBtnProps) => (
  <div className={css.wrapper}>
    <button className={css.button} onClick={onClick} disabled={disabled}>
    Load More
    </button>
  </div>
);
export default LoadMoreBtn;
