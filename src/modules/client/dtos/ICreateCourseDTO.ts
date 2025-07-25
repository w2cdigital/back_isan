interface ICreateCourseDTO {
  title: string;
  descriptive: string;
  description: string;
  duration: string;
  text: string;
  contrast: boolean;
  banner: boolean;
  categoryCourseId: string;
  companyId: string;
  pageId?: string;
}

export { ICreateCourseDTO };
