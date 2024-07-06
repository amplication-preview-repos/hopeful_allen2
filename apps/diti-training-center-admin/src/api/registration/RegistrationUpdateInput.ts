import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RegistrationUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  registrationDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
