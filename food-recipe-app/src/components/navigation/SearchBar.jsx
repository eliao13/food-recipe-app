import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function SearchBar({ setSearchWords }) {
  const [searchValue, setSearchValue] = useState("");
  const [timer, setTimer] = useState(null);

  function handleSearchChange(searchWords) {
    setSearchValue(searchWords);

    if (timer) {
      clearTimeout(timer);
    }

    setTimer(
      setTimeout(() => {
        if (searchWords.trim() !== "") {
          setSearchWords(searchWords);
        }
      }, 1000)
    );
  }

  return (
    <div className="search-field">
      <TextField
        id="outlined-search"
        label="Enter Items..."
        variant="outlined"
        value={searchValue}
        onChange={(e) => {
          handleSearchChange(e.target.value);
        }}
      />
    </div>
  );
}
