import { RegistrationCreateNestedManyWithoutCoursesInput } from "./RegistrationCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  description?: string | null;
  endDate?: Date | null;
  registrations?: RegistrationCreateNestedManyWithoutCoursesInput;
  startDate?: Date | null;
  title?: string | null;
  trainer?: string | null;
};
