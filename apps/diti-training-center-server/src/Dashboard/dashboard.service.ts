import { Injectable } from "@nestjs/common";
import { User } from "../user/base/User";
import { UserFindManyArgs } from "../user/base/UserFindManyArgs";
import { RegistrationFindManyArgs } from "../registration/base/RegistrationFindManyArgs";
import { Registration } from "../registration/base/Registration";

@Injectable()
export class DashboardService {
  constructor() {}
  async GetAllUsers(args: User): Promise<UserFindManyArgs[]> {
    throw new Error("Not implemented");
  }
  async GetCourseRegistrations(args: RegistrationFindManyArgs): Promise<Registration[]> {
    throw new Error("Not implemented");
  }
}
