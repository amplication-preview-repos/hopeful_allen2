import { RegistrationUpdateManyWithoutCoursesInput } from "./RegistrationUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  description?: string | null;
  endDate?: Date | null;
  registrations?: RegistrationUpdateManyWithoutCoursesInput;
  startDate?: Date | null;
  title?: string | null;
  trainer?: string | null;
};
