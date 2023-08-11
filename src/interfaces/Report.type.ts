export interface Report {
  id: number;
  patient_id: number;
  medic_id: number;
  type: string;
  service: string;
  clinical_diagnosis: string;
  study_code: string;
  sample_date: Date;
  reception_date: Date;
  report_date: Date;
}

export interface IReportForm {
  patient_id: number;
  medic_id: number;
  type: string;
  service: string;
  clinical_diagnosis: string;
  study_code: string;
  sample_date: Date | null;
  reception_date: Date | null;
  report_date: Date | null;
}
