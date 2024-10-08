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

export interface SlidePreview {
  id?: string;
  case_id: string;
  title: string;
  description: string;
  image_url: string;
  image_url_webp: string;
  image_file: File;
}

export type OpCase = Partial<Case>;
export type OpCaseSlide = Partial<CaseSlide>;
export type OpSlidePreview = Partial<SlidePreview>;
