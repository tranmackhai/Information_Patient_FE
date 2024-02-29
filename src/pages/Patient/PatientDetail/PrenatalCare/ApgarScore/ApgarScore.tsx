import { useState } from "react";
import {
  Grid,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
  Button,
} from "@mui/material";
import TitleOverview from "../../../../../components/common/Title/TitleOverview";
import categoryConfig from "../../../../../apis/modules/category.api";

interface CategoryItem {
  title: string;
  valueLabel: string;
}

const ApgarScore = () => {
  const [textareaValues, setTextareaValues] = useState<{
    [key: string]: string;
  }>({});

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    item: CategoryItem
  ) => {
    const updatedTextareaValues = {
      ...textareaValues,
      [item.valueLabel]: event.target.value,
    };
    setTextareaValues(updatedTextareaValues);
    console.log(
      `Textarea for ${item.valueLabel} changed: ${event.target.value}`
    );
  };

  return (
    <TitleOverview
      title="Chỉ số lúc sinh"
      daddy={
        <Grid container spacing={1}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      borderTop: "1px solid #ddd",
                    }}
                  >
                    Chỉ số lúc sinh
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #ddd",
                      borderTop: "1px solid #ddd",
                    }}
                  >
                    Giá trị
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categoryConfig.apgarScore.map((item) => {
                  return (
                    <TableRow key={item.valueLabel}>
                      <TableCell
                        align="center"
                        width="240px"
                        sx={{ borderRight: "1px solid #ddd", padding: "4px" }}
                      >
                        {item.title}
                      </TableCell>

                      <TableCell sx={{ padding: "4px" }}>
                        <textarea
                          onChange={(event) =>
                            handleTextareaChange(event, item)
                          }
                          value={textareaValues[item.valueLabel] || ""}
                          spellCheck="false"
                          style={{
                            minWidth: "100%",
                            maxHeight: "32px",
                            outline: "none",
                            border: "transparent",
                            fontSize: "0.875rem",
                            lineHeight: "1.43",
                            fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Grid item xs={2}>
            <ListItem>
              <Button
                type="submit"
                sx={{
                  width: "60px",
                  maxHeight: "30px",
                  padding: "10px 0",
                  borderRadius: "4px",
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: "rgb(64, 224, 58, 0.83)",
                  color: "#fff",
                  fontWeight: "600",
                  border: "none",
                  textTransform: "uppercase",
                  marginRight: "12px",
                  "&:hover": {
                    backgroundColor: "rgb(64, 224, 58)",
                  },
                }}
              >
                Lưu
              </Button>
              <Button
                type="submit"
                sx={{
                  width: "60px",
                  height: "30px",
                  padding: "10px 0",
                  borderRadius: "4px",
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: "rgb(174 167 167)",
                  color: "#fff",
                  fontWeight: "600",
                  border: "none",
                  textTransform: "uppercase",
                  "&:hover": {
                    backgroundColor: "rgb(174 167 167)",
                  },
                }}
              >
                Huỷ
              </Button>
            </ListItem>
          </Grid>
        </Grid>
      }
    >
      <Grid container spacing={1}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    borderRight: "1px solid #ddd",
                    borderTop: "1px solid #ddd",
                  }}
                >
                  Chỉ số lúc sinh
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderRight: "1px solid #ddd",
                    borderTop: "1px solid #ddd",
                  }}
                >
                  Giá trị
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categoryConfig.apgarScore.map((item) => {
                return (
                  <TableRow key={item.valueLabel}>
                    <TableCell
                      align="center"
                      width="240px"
                      sx={{ borderRight: "1px solid #ddd", padding: "4px" }}
                    >
                      {item.title}
                    </TableCell>
                    <TableCell
                      align="center"
                      width="120px"
                      sx={{ borderRight: "1px solid #ddd", padding: "4px" }}
                    ></TableCell>
                    <TableCell sx={{ padding: "4px" }}>
                      <textarea
                        onChange={(event) => handleTextareaChange(event, item)}
                        value={textareaValues[item.valueLabel] || ""}
                        spellCheck="false"
                        style={{
                          minWidth: "100%",
                          maxHeight: "32px",
                          outline: "none",
                          border: "transparent",
                          fontSize: "0.875rem",
                          lineHeight: "1.43",
                          fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid item xs={2}>
          <ListItem>
            <Button
              type="submit"
              sx={{
                width: "60px",
                maxHeight: "30px",
                padding: "10px 0",
                borderRadius: "4px",
                outline: "none",
                cursor: "pointer",
                backgroundColor: "rgb(64, 224, 58, 0.83)",
                color: "#fff",
                fontWeight: "600",
                border: "none",
                textTransform: "uppercase",
                marginRight: "12px",
                "&:hover": {
                  backgroundColor: "rgb(64, 224, 58)",
                },
              }}
            >
              Lưu
            </Button>
            <Button
              type="submit"
              sx={{
                width: "60px",
                height: "30px",
                padding: "10px 0",
                borderRadius: "4px",
                outline: "none",
                cursor: "pointer",
                backgroundColor: "rgb(174 167 167)",
                color: "#fff",
                fontWeight: "600",
                border: "none",
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: "rgb(174 167 167)",
                },
              }}
            >
              Huỷ
            </Button>
          </ListItem>
        </Grid>
      </Grid>
    </TitleOverview>
  );
};

export default ApgarScore;
