import { useEffect, useState } from "react";
import TitleDetail from "../../../../components/common/Title/TitleDetail";
import {
  Box,
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
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { usePatient } from "../../../../hooks/usePatient";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import provinces from "../../../../json/address.json";

type Ward = {
  name: string;
  code: number;
  codename: string;
  division_type: string;
  short_codename: string;
};

type District = {
  name: string;
  code: number;
  codename: string;
  division_type: string;
  short_codename: string;
  wards: Ward[];
};

const InformationPatient = () => {
  const { id } = useParams();
  const { patient, updatePatient, resUpdatePatient } = usePatient({
    id: id ? Number(id) : undefined,
  });

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    patientUpdateForm.setFieldValue("gender", event.target.value);
  };

  const patientUpdateForm = useFormik({
    initialValues: {
      patientCode: patient?.data.patientCode,
      fullName: patient?.data.fullName,
      DOB: dayjs(patient?.data.DOB),
      gender: patient?.data?.gender,
      guarantor: patient?.data.guarantor,
      phone: patient?.data.phone,
      address: patient?.data.address,
      province: patient?.data?.province,
      district: patient?.data?.district,
      ward: patient?.data?.ward,
    },
    validationSchema: Yup.object({
      patientCode: Yup.string()
        .max(14, "Mã bệnh nhân tối đa 14 số ")
        .required("Vui lòng nhập mã bệnh nhân"),
      fullName: Yup.string()
        .min(4, "Họ và tên tối thiểu 4 ký tự ")
        .required("Vui lòng nhập tên bệnh nhân"),
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
    enableReinitialize: patient ? true : false,
    // enableReinitialize: true,
    onSubmit: async (values) => {
      console.log("submit", values.gender);
      try {
        if (id) {
          const formData = {
            patientCode: values.patientCode,
            fullName: values.fullName,
            DOB: new Date(values.DOB.format("MM/DD/YYYY")),
            gender: values.gender,
            guarantor: values.guarantor,
            phone: values.phone,
            address: values.address,
            province: values.province,
            district: values.district,
            ward: values.ward,
          };
          console.log("Form data", formData);
          updatePatient({ id: Number(id), payload: formData });
        }
      } catch (error) {
        console.log(error);
        toast.error("Đã xảy ra lỗi khi cập nhật thông tin bệnh nhân");
      }
      console.log(patient?.data.province);
    },
  });

  const [districts, setDistricts] = useState<District[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);

  const handleChangeProvinces = (e: any) => {
    const value = e.target.value;
    const province = provinces.find((item) => item.codename === value);
    console.log("Privince: ", province, value);
    patientUpdateForm.setFieldValue("province", value);
    if (province) {
      setDistricts(province.districts);
    }
  };

  const handleChangeDistricts = (e: any) => {
    const value = e.target.value;
    patientUpdateForm.setFieldValue("district", value);
    const district = districts.find((item) => item.codename === value);
    console.log("District:", district, "Value:", value);
    if (district) {
      setWards(district.wards);
    }
  };

  useEffect(() => {
    if (resUpdatePatient) {
      toast.success("Cập nhật thông tin thành công");
    }
  }, [resUpdatePatient]);

  // console.log(id);

  return (
    <Box component="form" onSubmit={patientUpdateForm.handleSubmit}>
      <TitleDetail title="Thông tin cá nhân">
        <ToastContainer />
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
                name="patientCode"
                value={patientUpdateForm.values.patientCode}
                onChange={patientUpdateForm.handleChange}
                color="success"
                size="small"
                error={
                  patientUpdateForm.touched.patientCode &&
                  patientUpdateForm.errors.patientCode !== undefined
                }
                helperText={
                  patientUpdateForm.touched.patientCode &&
                  (patientUpdateForm.errors.patientCode as React.ReactNode)
                }
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
                name="fullName"
                value={patientUpdateForm.values.fullName}
                onChange={patientUpdateForm.handleChange}
                color="success"
                size="small"
                error={
                  patientUpdateForm.touched.fullName &&
                  patientUpdateForm.errors.fullName !== undefined
                }
                helperText={
                  patientUpdateForm.touched.fullName &&
                  (patientUpdateForm.errors.fullName as React.ReactNode)
                }
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
                    value={patientUpdateForm.values.DOB}
                    onChange={(newValue: Dayjs | null) =>
                      patientUpdateForm.setFieldValue("DOB", newValue)
                    }
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
                value={patientUpdateForm.values.gender}
                onChange={handleGenderChange}
                sx={{ maxHeight: "24px" }}
              >
                <FormControlLabel
                  value="true"
                  control={
                    <Radio sx={{ height: "12px", marginRight: "8px" }} />
                  }
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
                name="guarantor"
                value={patientUpdateForm.values.guarantor}
                onChange={patientUpdateForm.handleChange}
                color="success"
                size="small"
                error={
                  patientUpdateForm.touched.guarantor &&
                  patientUpdateForm.errors.guarantor !== undefined
                }
                helperText={
                  patientUpdateForm.touched.guarantor &&
                  (patientUpdateForm.errors.guarantor as React.ReactNode)
                }
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
                name="phone"
                value={patientUpdateForm.values.phone}
                onChange={patientUpdateForm.handleChange}
                color="success"
                size="small"
                error={
                  patientUpdateForm.touched.guarantor &&
                  patientUpdateForm.errors.guarantor !== undefined
                }
                helperText={
                  patientUpdateForm.touched.guarantor &&
                  (patientUpdateForm.errors.guarantor as React.ReactNode)
                }
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
                name="address"
                value={patientUpdateForm.values.address}
                onChange={patientUpdateForm.handleChange}
                color="success"
                size="small"
                error={
                  patientUpdateForm.touched.address &&
                  patientUpdateForm.errors.address !== undefined
                }
                helperText={
                  patientUpdateForm.touched.address &&
                  (patientUpdateForm.errors.address as React.ReactNode)
                }
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
                name="province"
                value={patientUpdateForm.values.province}
                onChange={handleChangeProvinces}
                sx={{
                  width: "210px",
                  height: "28px",
                  margin: "6px 0",
                }}
              >
                {provinces?.map((item, index) => {
                  return (
                    <MenuItem value={item.name} key={index}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </ListItem>
            <ListItem>
              <Select
                color="success"
                variant="outlined"
                placeholder="Quận, Huyện"
                // name="district"
                value={patientUpdateForm.values.district}
                onChange={handleChangeDistricts}
                sx={{
                  width: "210px",
                  height: "28px",
                  margin: "6px 0",
                }}
              >
                {districts?.map((item, index) => {
                  return (
                    <MenuItem value={item.name} key={index}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </ListItem>
            <ListItem>
              <Select
                color="success"
                variant="outlined"
                placeholder="Phường, Xã"
                value={patientUpdateForm.values.ward}
                // name="ward"
                onChange={patientUpdateForm.handleChange}
                sx={{
                  width: "210px",
                  height: "28px",
                  margin: "6px 0",
                }}
              >
                {wards?.map((item, index) => {
                  return (
                    <MenuItem value={item.name} key={index}>
                      {item.name}
                    </MenuItem>
                  );
                })}
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
    </Box>
  );
};

export default InformationPatient;
