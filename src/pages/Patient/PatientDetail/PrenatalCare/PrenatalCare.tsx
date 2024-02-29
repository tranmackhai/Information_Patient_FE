import TitleDetail from "../../../../components/common/Title/TitleDetail";
import AntenatalHealth from "./AntenatalHealth";
import ApgarScore from "./ApgarScore";
import PerinatalHealth from "./PerinatalHealth";
import PostnatalCare from "./PostnatalCare";

const PrenatalCare = () => {
  return (
    <TitleDetail title="Tiền căn sản khoa">
      <ApgarScore />
      <AntenatalHealth />
      <PerinatalHealth />
      <PostnatalCare />
    </TitleDetail>
  );
};

export default PrenatalCare;
