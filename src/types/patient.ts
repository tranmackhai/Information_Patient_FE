type PatientDTo = {
  patientCode: string;
  guarantor: string;
  fullName: string;
  gender: boolean;
  DOB: Date;
  phone: string;
  address: string;
  addressLevelIds: string[];
};

export type { PatientDTo };
