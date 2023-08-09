export interface Report {
  id: number;
  patient_id: number;
  medic_id: number;
  type: string;
  service: string;
  clinical_diagnosis: string;
  study_code: string;
  sample_date: string;
  reception_date: string;
  report_date: string;
}

export interface IReportForm {
  patient_id: number;
  medic_id: number;
  type: string;
  service: string;
  clinical_diagnosis: string;
  study_code: string;
  sample_date: string;
  reception_date: string;
  report_date: string;
}
