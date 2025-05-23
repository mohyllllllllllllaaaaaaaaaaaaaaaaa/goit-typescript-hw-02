import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}
export const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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