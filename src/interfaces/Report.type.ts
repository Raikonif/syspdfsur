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
  sample_date: string | null | number | any;
  reception_date: string | null | number | any;
  report_date: string | null | number | any;
}

export interface IsValidReport {
  patient_id: boolean;
  medic_id: boolean;
  type: boolean;
  service: boolean;
  clinical_diagnosis: boolean;
  study_code: boolean;
  sample_date: boolean;
  reception_date: boolean;
  report_date: boolean;
}
