export interface Case {
  id: number;
  title: string;
  type: string;
  description: string;
}

export interface CaseSlide {
  id: number;
  case_id: number;
  title: string;
  description: string;
  image_url: string;
}

export type OperationCase = Partial<Case>;
