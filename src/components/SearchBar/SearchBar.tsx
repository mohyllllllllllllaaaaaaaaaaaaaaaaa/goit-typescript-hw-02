import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      toast.error("Please enter a search term.");
      return;
    }

    onSubmit(trimmedQuery);
    setQuery("");
  };

  return (
    <div className="div">
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className={css.button}>
        <CiSearch/>
        </button>
      </form>
    </header>
    </div>
  );
};
export default SearchBar;