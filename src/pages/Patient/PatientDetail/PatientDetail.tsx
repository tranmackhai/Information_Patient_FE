import InformationPatient from "./InformationPatient";
import BloodGroup from "./BloodGroup";
import MedicalHistory from "./MedicalHistory";
import PrenatalCare from "./PrenatalCare";
import MedicalRecord from "./MedicalRecord";
import NutritionalAssessment from "./NutritionalAssessment";
import VaccinationRecord from "./VaccinationRecord";

export const PatientDetail = () => {
  return (
    <>
      <InformationPatient />
      <BloodGroup />
      <MedicalHistory />
      <PrenatalCare />
      <MedicalRecord />
      <NutritionalAssessment />
      <VaccinationRecord />
    </>
  );
};
