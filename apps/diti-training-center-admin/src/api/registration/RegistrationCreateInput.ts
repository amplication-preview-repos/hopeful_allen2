import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RegistrationCreateInput = {
  course?: CourseWhereUniqueInput | null;
  registrationDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
