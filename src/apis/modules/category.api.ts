import BadgeIcon from "@mui/icons-material/Badge";

const category = [
  {
    id: "1",
    icon: "fa-solid fa-house",
    path: "/",
    title: "Trang chủ",
  },
  {
    id: "2",
    icon: "fa-solid fa-hospital-user",
    path: "/patient",
    title: "Bệnh nhân",
  },
  // {
  //   id: "3",
  //   icon: "fa-solid fa-notes-medical",
  //   path: "/medical-record",
  //   title: "Hồ sơ bệnh án",
  // },
  {
    id: "4",
    icon: "fa-regular fa-user",
    path: "/account",
    title: "Tài khoản",
  },
];

const information = [
  {
    id: "11",
    icon: "fa-solid fa-id-card",
    title: "Mã bệnh nhân",
  },
  {
    id: "12",
    icon: "fa-solid fa-hospital-user",
    title: "Họ và tên",
  },
  {
    id: "13",
    icon: "fa-solid fa-notes-medical",
    title: "Ngày sinh",
  },
  {
    id: "14",
    icon: "fa-solid fa-genderless",
    title: "Giới tính",
  },
  {
    id: "15",
    icon: "fa-regular fa-user",
    title: "Người giám hộ",
  },
  {
    id: "16",
    icon: "fa-solid fa-phone",
    title: "Số điện thoại",
  },
  {
    id: "17",
    icon: "fa-solid fa-road",
    title: "Địa chỉ",
  },
  {
    id: "18",
    icon: "fa-solid fa-map-location-dot",
    title: "Tỉnh thành",
  },
  {
    id: "19",
    icon: "fa-regular fa-map",
    title: "Quận / Huyện",
  },
  {
    id: "20",
    icon: "fa-solid fa-warehouse",
    title: "Phường / Xã",
  },
];

const categoryConfig = { category, information };

export default categoryConfig;
