import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RegistrationWhereInput = {
  course?: CourseWhereUniqueInput;
  id?: StringFilter;
  registrationDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
