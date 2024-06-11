export interface Case {
  id: string;
  title: string;
  type: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface CaseSlide {
  id: string;
  case_id: string;
  title: string;
  description: string;
  image_url: string;
  created_at: string;
  updated_at: string;
  image_url_webp: string;
}

export type OperationCase = Partial<Case>;
export type OperationCaseSlide = Partial<CaseSlide>;
