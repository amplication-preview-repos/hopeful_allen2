import { Registration } from "../registration/Registration";

export type Course = {
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  registrations?: Array<Registration>;
  startDate: Date | null;
  title: string | null;
  trainer: string | null;
  updatedAt: Date;
};
