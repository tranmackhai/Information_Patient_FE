import TitleDetail from "../../../../components/common/Title/TitleDetail";
import BeforePregnancyCondition from "./BeforePregnancyCondition";
import Complication from "./Complication";
import InfectiousDisease from "./InfectiousDisease";
import ToxinSubstance from "./ToxinSubstance";

const MecicalHistory = () => {
  return (
    <TitleDetail title="Tiền sử bệnh lý của mẹ">
      <BeforePregnancyCondition />
      <Complication />
      <InfectiousDisease />
      <ToxinSubstance />
    </TitleDetail>
  );
};

export default MecicalHistory;
