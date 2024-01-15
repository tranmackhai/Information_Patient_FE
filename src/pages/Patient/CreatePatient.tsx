import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { usePatient } from "../../hooks/usePatient";
import { useAddress } from "../../hooks/useAddress";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const gender = [
  {
    label: "Nam",
    value: true,
  },
  {
    label: "Nữ",
    value: false,
  },
];

const CreatePatient = () => {
  const navigate = useNavigate();
  const { createPatient } = usePatient({});
  const { provinces } = useAddress();
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState<string>();
  console.log(provinces);
  const patientForm = useFormik({
    initialValues: {
      patientCode: "",
      fullName: "",
      DOB: dayjs("01-01-2005"),
      gender: true,
      guarantor: "",
      phone: "",
      address: "",
      addressLevelIds: [],
    },
    validationSchema: Yup.object({
      patientCode: Yup.string()
        .max(14, "Mã bệnh nhân tối đa 14 số ")
        .required("Vui lòng nhập mã bệnh nhân"),
      fullName: Yup.string()
        .min(4, "Họ và tên tối thiểu 4 ký tự ")
        .required("Vui lòng nhập tên bệnh nhân"),
      DOB: Yup.date().required("Vui lòng nhập ngày tháng năm sinh bệnh nhân"),
      guarantor: Yup.string()
        .min(4, "Họ và tên tối thiểu 4 ký tự")
        .required("Vui lòng nhập tên người giám hộ"),
      phone: Yup.string()
        .min(10, "Số điện thoại không hợp lệ")
        .matches(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
          "Số điện thoại không hợp lệ"
        )
        .required("Vui lòng nhập số điện thoại"),
    }),
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const formData = {
          patientCode: values.patientCode,
          fullName: values.fullName,
          DOB: new Date(values.DOB.format("DD-MM-YYYY")),
          gender: values.gender,
          guarantor: values.guarantor,
          phone: values.phone,
          address: values.address,
          addressLevelIds: values.addressLevelIds,
        };
        console.log();

        createPatient({ payload: formData });
      } catch (error) {}
    },
  });

  return (
    <Box component="form" onSubmit={patientForm.handleSubmit}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              type="text"
              placeholder="Mã bệnh nhân"
              name="patientCode"
              fullWidth
              value={patientForm.values.patientCode}
              onChange={patientForm.handleChange}
              color="success"
              error={
                patientForm.touched.patientCode &&
                patientForm.errors.patientCode !== undefined
              }
              helperText={
                patientForm.touched.patientCode &&
                patientForm.errors.patientCode
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              placeholder="Tên bệnh nhân"
              name="fullName"
              value={patientForm.values.fullName}
              onChange={patientForm.handleChange}
              color="success"
              fullWidth
              error={
                patientForm.touched.fullName &&
                patientForm.errors.fullName !== undefined
              }
              helperText={
                patientForm.touched.fullName && patientForm.errors.fullName
              }
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              ".MuiStack-root": {
                paddingTop: "0 !important",
              },
              label: {
                paddingTop: "6px !important",
              },
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DatePicker"]}
                sx={{
                  justifyContent: "center",
                }}
              >
                <DatePicker
                  label="Ngày sinh"
                  value={patientForm.values.DOB}
                  onChange={(newValue: Dayjs | null) =>
                    patientForm.setFieldValue("DOB", newValue)
                  }
                  sx={{ width: "100%" }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{ fontWeight: 500, fontSize: "1rem", marginBottom: "6px" }}
            >
              Giới tính
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                span: {
                  display: "block",
                  textAlign: "center",
                  margin: "0 4px",
                  fontSize: "1rem",
                  width: "60px",
                  padding: "2px 0",
                  borderRadius: "50%",
                  cursor: "pointer",
                  backgroundColor: "#f8f8f8",
                },
              }}
            >
              {gender.map((item) => {
                return (
                  <span
                    key={item.label}
                    style={
                      item.value === patientForm.values.gender
                        ? {
                            border: "1px solid #fcaf17",
                            backgroundColor: "#fff",
                          }
                        : {}
                    }
                    onClick={() => {
                      patientForm.setFieldValue("gender", item.value);
                    }}
                  >
                    {item.label}
                  </span>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="text"
              placeholder="Người giám hộ"
              name="guarantor"
              value={patientForm.values.guarantor}
              onChange={patientForm.handleChange}
              color="success"
              error={
                patientForm.touched.guarantor &&
                patientForm.errors.guarantor !== undefined
              }
              helperText={
                patientForm.touched.guarantor && patientForm.errors.guarantor
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              placeholder="Số điện thoại"
              name="phone"
              value={patientForm.values.phone}
              onChange={patientForm.handleChange}
              color="success"
              fullWidth
              error={
                patientForm.touched.phone &&
                patientForm.errors.phone !== undefined
              }
              helperText={patientForm.touched.phone && patientForm.errors.phone}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="text"
              placeholder="Địa chỉ"
              name="address"
              value={patientForm.values.address}
              onChange={patientForm.handleChange}
              color="success"
              error={
                patientForm.touched.address &&
                patientForm.errors.address !== undefined
              }
              helperText={
                patientForm.touched.address && patientForm.errors.address
              }
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              fullWidth
              name="province"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              variant="outlined"
              // value={provinces?.data.data}
              // onChange={handleChangeProvinces}
            >
              {provinces?.data?.map((item: { id: string; name: string }) => {
                return (
                  <MenuItem value={item.name} key={item.id}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          {/* <Grid item xs={6}>
            <Select
              fullWidth
              name="district"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              variant="outlined"
              value={patientForm.values.district}
              onChange={handleChangeDistricts}
            >
              {districts.map((item, index) => {
                return (
                  <MenuItem value={item.name} key={index}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid> */}
          {/* <Grid item xs={6}>
            <Select
              fullWidth
              name="ward"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              variant="outlined"
              value={patientForm.values.ward}
              onChange={patientForm.handleChange}
            >
              {wards.map((item, index) => {
                return (
                  <MenuItem value={item.name} key={index}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid> */}
        </Grid>
        <Box display="flex" paddingBottom="24px" justifyContent="right">
          <button
            type="submit"
            style={{
              width: "120px",
              padding: "10px 0",
              borderRadius: "4px",
              outline: "none",
              cursor: "pointer",
              backgroundColor: "rgb(64, 224, 58)",
              color: "#fff",
              fontWeight: "600",
              border: "none",
              textTransform: "uppercase",
              marginRight: "12px",
            }}
          >
            Thêm
          </button>
          <button
            type="button"
            style={{
              width: "120px",
              padding: "10px 0",
              borderRadius: "4px",
              outline: "none",
              cursor: "pointer",
              backgroundColor: "rgb(174 167 167)",
              color: "#fff",
              fontWeight: "600",
              border: "none",
              textTransform: "uppercase",
            }}
            onClick={() => {
              // handleCancel();
            }}
          >
            Huỷ
          </button>
        </Box>
      </Container>
    </Box>
  );
};

export default CreatePatient;
