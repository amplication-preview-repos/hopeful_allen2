import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RegistrationListRelationFilter } from "../registration/RegistrationListRelationFilter";

export type CourseWhereInput = {
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  registrations?: RegistrationListRelationFilter;
  startDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  trainer?: StringNullableFilter;
};
