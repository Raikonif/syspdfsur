export interface GenericObject {
  [key: string]: unknown;
}
export interface HistopathologyReport {
  id: number;
  report_id: number;
  slides?: number;
  blocks: number;
  macroscopy: string;
  microscopy: string;
  conclusion: string;
}

export interface IHistopathologyReportForm extends GenericObject {
  report_id: number;
  slides?: number;
  blocks: number;
  macroscopy: string;
  microscopy: string;
  conclusion: string;
}

export interface PAPReport {
  id: number;
  report_id: number;
  slides: number;
}

export interface IPAPReportForm {
  report_id: number;
  slides: number;
}

export interface CytopathologyReport {
  id: number;
  report_id: number;
  slides: number;
}

export interface ICytopathologyReportForm {
  report_id: number;
  slides: number;
}

export interface GenericValues {
  [key: string]: string | number | null;
}

export interface GenericValidation {
  [key: string]: boolean;
}

export interface IsValidHistopathologyReport {
  slides: boolean;
  blocks: boolean;
  macroscopy: boolean;
  microscopy: boolean;
  conclusion: boolean;
}
