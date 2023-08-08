export interface HistopathologyReport {
  id?: number;
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

export interface CytopathologyReport {
  id: number;
  report_id: number;
  slides: number;
}
