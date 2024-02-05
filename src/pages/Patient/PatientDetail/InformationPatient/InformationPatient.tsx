import TitleDetail from "../../../../components/common/Title/TitleDetail";
import {
  Button,
  FormControlLabel,
  Grid,
  ListItem,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import categoryConfig from "../../../../apis/modules/category.api";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useState } from "react";

const InformationPatient = () => {
  const [gender, setGender] = useState("male");

  const handleGenderChange = (event: any) => {
    setGender(event.target.value);
  };

  return (
    <TitleDetail title="Thông tin cá nhân">
      <Grid container spacing={1}>
        <Grid item xs={2}>
          {categoryConfig.information.map((item) => {
            return (
              <ListItem
                key={item.id}
                sx={{
                  i: {
                    paddingRight: "6px",
                    color: "#6d6e6a",
                  },
                  span: {
                    fontWeight: "450",
                  },
                }}
              >
                <i className={item.icon}></i>
                <span>{item.title}</span>
              </ListItem>
            );
          })}
        </Grid>
        <Grid item xs={3}>
          <ListItem>
            <TextField
              type="text"
              placeholder="Mã bệnh nhân"
              color="success"
              size="small"
              InputProps={{
                style: {
                  height: "28px",
                },
              }}
              sx={{
                margin: "6px 0",
                "& input::placeholder": {
                  fontSize: "16px",
                },
              }}
            />
          </ListItem>
          <ListItem>
            <TextField
              type="text"
              placeholder="Họ và tên"
              color="success"
              size="small"
              InputProps={{
                style: {
                  height: "28px",
                  fontSize: "1rem",
                },
              }}
              sx={{
                margin: "6px 0",
                "& input::placeholder": {
                  fontSize: "16px",
                },
              }}
            />
          </ListItem>
          <ListItem>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DatePicker"]}
                sx={{
                  justifyContent: "center",
                  width: "210px",
                  // height: "28px",
                  overflowY: "hidden",
                }}
              >
                <DatePicker
                  format="DD/MM/YYYY"
                  label="Ngày sinh"
                  value={dayjs("01/01/2005")}
                  sx={{
                    width: "100%",
                    ".css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
                      padding: "4px 14px !important",
                    },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </ListItem>
          <ListItem sx={{ alignItems: "center" }}>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={gender}
              onChange={handleGenderChange}
              sx={{ maxHeight: "24px" }}
            >
              <FormControlLabel
                value="true"
                control={<Radio sx={{ height: "12px", marginRight: "8px" }} />}
                label="Nam"
              />
              <FormControlLabel
                value="false"
                control={
                  <Radio sx={{ fontSize: "12px", marginRight: "8px" }} />
                }
                label="Nữ"
              />
            </RadioGroup>
          </ListItem>
          <ListItem>
            <TextField
              type="text"
              placeholder="Người giám hộ"
              color="success"
              size="small"
              InputProps={{
                style: {
                  height: "28px",
                  fontSize: "1rem",
                },
              }}
              sx={{
                margin: "6px 0",
                "& input::placeholder": {
                  fontSize: "16px",
                },
              }}
            />
          </ListItem>
          <ListItem>
            <TextField
              type="text"
              placeholder="Số điện thoại"
              color="success"
              size="small"
              InputProps={{
                style: {
                  height: "28px",
                  fontSize: "1rem",
                },
              }}
              sx={{
                margin: "6px 0",
                "& input::placeholder": {
                  fontSize: "16px",
                },
              }}
            />
          </ListItem>
          <ListItem>
            <TextField
              type="text"
              placeholder="Địa chỉ"
              color="success"
              size="small"
              InputProps={{
                style: {
                  height: "28px",
                  fontSize: "1rem",
                },
              }}
              sx={{
                margin: "6px 0",
                "& input::placeholder": {
                  fontSize: "16px",
                },
              }}
            />
          </ListItem>
          <ListItem>
            <Select
              color="success"
              variant="outlined"
              placeholder="Tỉnh thành"
              value={"Hà Nội"}
              onChange={(e: any) => {}}
              sx={{
                width: "210px",
                height: "28px",
                margin: "6px 0",
              }}
            >
              <MenuItem>Hà Nội</MenuItem>
            </Select>
          </ListItem>
          <ListItem>
            <Select
              color="success"
              variant="outlined"
              placeholder="Quận, Huyện"
              value="Hà Đông"
              onChange={(e: any) => {}}
              sx={{
                width: "210px",
                height: "28px",
                margin: "6px 0",
              }}
            >
              <MenuItem>Huyện Hà Đông</MenuItem>
            </Select>
          </ListItem>
          <ListItem>
            <Select
              color="success"
              variant="outlined"
              placeholder="Phường, Xã"
              value="Hà Đông"
              onChange={(e: any) => {}}
              sx={{
                width: "210px",
                height: "28px",
                margin: "6px 0",
              }}
            >
              <MenuItem>Xã Hà Đông</MenuItem>
            </Select>
          </ListItem>
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
    </TitleDetail>
  );
};

export default InformationPatient;
