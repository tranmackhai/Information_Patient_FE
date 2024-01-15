import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, TextField } from "@mui/material";
import { ReactNode, useState } from "react";

interface Props {
  onSearch?: (value: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSearch && search !== "") {
      onSearch(search);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        padding: "12px 0",
        marginLeft: "12px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <TextField
        type="text"
        placeholder="Nhập từ khoá"
        name="keyword"
        size="small"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        color="success"
      />
      <IconButton type="submit" sx={{ color: "rgb(94, 53, 177)" }}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default Search;
