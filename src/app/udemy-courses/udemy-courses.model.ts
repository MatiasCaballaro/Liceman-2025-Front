export interface CourseSearchResult {
  title: string;
  headline: string;
  imageURL: string;
  courseId: string;
  instructor: string;
  rating: string;
  reviewQuantity: string;
  content_info_duration: string;
  content_info_lectures: string;
}

export interface Curriculum {
  summary: string;
  curriculumSections: CurriculumSection[];
}

export interface CurriculumSection {
  title: string;
  summary: string;
  curriculumClasses: CurriculumClasses[];
}

export interface CurriculumClasses {
  title: string;
  duration: string;
}