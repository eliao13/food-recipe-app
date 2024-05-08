import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ setSearchWords }) {
  const [searchValue, setSearchValue] = useState("");
  const [timer, setTimer] = useState(null);
  const navigate = useNavigate();

  function handleSearchChange(searchWords) {
    setSearchValue(searchWords);

    if (timer) {
      clearTimeout(timer);
    }

    setTimer(
      setTimeout(() => {
        if (searchWords.trim() !== "") {
          setSearchWords(searchWords);
          navigate("/");
          setSearchValue("");
          document.getElementById("outlined-search").blur();
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
        sx={{ width: "100%" }}
      />
    </div>
  );
}
