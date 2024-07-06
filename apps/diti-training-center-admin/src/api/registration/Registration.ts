import { Course } from "../course/Course";
import { User } from "../user/User";

export type Registration = {
  course?: Course | null;
  createdAt: Date;
  id: string;
  registrationDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
