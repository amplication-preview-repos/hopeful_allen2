import { SortOrder } from "../../util/SortOrder";

export type RegistrationOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  registrationDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
