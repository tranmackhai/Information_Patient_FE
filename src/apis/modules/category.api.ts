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

const beforePregnancy = [
  {
    valueLabel: "hen_suyen",
    title: "Hen suyễn",
  },
  {
    valueLabel: "tieu_duong",
    title: "Tiểu đường",
  },
  {
    valueLabel: "beo_phi",
    title: "Béo phì",
  },
  {
    valueLabel: "benh_ly_tuyen_giap",
    title: "Bệnh lý tuyến giáp",
  },
  {
    valueLabel: "benh_tim",
    title: "Bệnh tim",
  },
  {
    valueLabel: "benh_than_man",
    title: "Bệnh thận mạn",
  },
  {
    valueLabel: "rang_mieng",
    title: "Sức khoẻ răng miệng kém",
  },
  {
    valueLabel: "pregnancy_condition",
    title: "Khác",
  },
];

const complication = [
  {
    valueLabel: "tieu_duong_thai_ky",
    title: "Tiểu đường thai kì",
  },
  {
    valueLabel: "tang_huyet_ap_thai_ki",
    title: "Tăng huyết áp thai kì",
  },
  {
    valueLabel: "tien_san_giat",
    title: "Tiền sản giật",
  },
  {
    valueLabel: "san_giat",
    title: "Sàn giật",
  },
  {
    valueLabel: "complication",
    title: "Khác",
  },
];

const infectiousDisease = [
  {
    valueLabel: "nhiem_streptococcus_b",
    title: "Nhiễm Streptococcus nhóm B",
  },
  {
    valueLabel: "viem_mang_oi",
    title: "Viêm màng ối",
  },
  {
    valueLabel: "nhiem_trung_tiet_nieu",
    title: "Nhiễm trùng tiết niệu",
  },
  {
    valueLabel: "hiv",
    title: "HIV",
  },
  {
    valueLabel: "viem_gan_b",
    title: "Viêm gan B",
  },
  {
    valueLabel: "giang_mai",
    title: "Giang mai",
  },
  {
    valueLabel: "toxoplasma",
    title: "Nhiễm Toxoplasma",
  },
  {
    valueLabel: "cmv",
    title: "Nhiễm CMV",
  },
  {
    valueLabel: "infectious_disease",
    title: "Khác",
  },
];

const toxinSubstance = [
  {
    valueLabel: "thuoc_la",
    title: "Thuốc lá",
  },
  {
    valueLabel: "ruou",
    title: "Rượu",
  },
  {
    valueLabel: "thuoc_dang_su_dung",
    title: "Thuốc đang sử dụng",
  },
  {
    valueLabel: "thuoc_da_su_dung",
    title: "Thuốc đã sử dụng",
  },
  {
    valueLabel: "toxin_substance",
    title: "Khác",
  },
];

const apgarScore = [
  {
    valueLabel: "tuoi_thai",
    title: "Tuổi thai",
  },
  {
    valueLabel: "can_nang",
    title: "Cân nặng",
  },
  {
    valueLabel: "chieu_dai",
    title: "Chiều dài",
  },
  {
    valueLabel: "vong_dau",
    title: "Vòng đầu",
  },
];

const antenatalHealth = [
  {
    valueLabel: "sinh_non",
    title: "Sinh non",
  },
  {
    valueLabel: "vo_oi_som",
    title: "Vỡ ối sớm",
  },
  {
    valueLabel: "sinh_thuong",
    title: "Sinh thường",
  },
  {
    valueLabel: "sinh_mo",
    title: "Sinh mổ",
  },
  {
    valueLabel: "chuyen_da_keo_dai",
    title: "Chuyển dạ kéo dài",
  },
  {
    valueLabel: "sot_luc_sinh",
    title: "Sốt lúc sinh",
  },
  {
    valueLabel: "chay_mau_luc_sinh",
    title: "Chảy máu lúc sinh",
  },
  {
    valueLabel: "antenatal_health",
    title: "Khác",
  },
];

const perinatalHealth = [
  {
    valueLabel: "bat_thuong_luc_sinh",
    title: "Bất thường lúc sinh",
  },
  {
    valueLabel: "benh_ly_ban_sinh",
    title: "Bệnh lý bẩm sinh",
  },
  {
    valueLabel: "tiem_ngua_lao",
    title: "Tiêm ngừa lao",
  },
  {
    valueLabel: "sinh_mo",
    title: "Sinh mổ",
  },
  {
    valueLabel: "VGSV_B",
    title: "Tiêm ngừa VGSV B",
  },
  {
    valueLabel: "tiem_vitamin_K1",
    title: "Tiêm Vitamin K1",
  },
  {
    valueLabel: "perinatal_health",
    title: "Khác",
  },
];

const postnatalCare = [
  {
    valueLabel: "nam_voi_me",
    title: "Nằm với mẹ",
  },
  {
    valueLabel: "duong_nhi",
    title: "Dưỡng nhi",
  },
  {
    valueLabel: "cham_soc_dac_biet",
    title: "Chăm sóc đặc biệt",
  },
  {
    valueLabel: "sua_me",
    title: "Sữa mẹ",
  },
  {
    valueLabel: "sua_cong_thuc",
    title: "Sữa công thức",
  },
  {
    valueLabel: "vang_da",
    title: "Vàng da",
  },
  {
    valueLabel: "benh_ly_can_theo_doi",
    title: "Bệnh lý cần theo dõi",
  },
  {
    valueLabel: "postnatal_care",
    title: "Khác",
  },
];

const categoryConfig = {
  category,
  information,
  beforePregnancy,
  complication,
  infectiousDisease,
  toxinSubstance,
  apgarScore,
  antenatalHealth,
  perinatalHealth,
  postnatalCare,
};

export default categoryConfig;
