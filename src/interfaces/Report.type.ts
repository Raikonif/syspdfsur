interface Report {
  id: number;
  sub_report_id: number;
  patient_id: number;
  medic_id: number;
  sampling_date: string;
  sample_reception_date: string;
  report_date: string;
}

export default Report;
