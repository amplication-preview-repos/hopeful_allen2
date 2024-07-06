import * as graphql from "@nestjs/graphql";
import { User } from "../user/base/User";
import { UserFindManyArgs } from "../user/base/UserFindManyArgs";
import { RegistrationFindManyArgs } from "../registration/base/RegistrationFindManyArgs";
import { Registration } from "../registration/base/Registration";
import { DashboardService } from "./dashboard.service";

export class DashboardResolver {
  constructor(protected readonly service: DashboardService) {}

  @graphql.Query(() => [UserFindManyArgs])
  async GetAllUsers(
    @graphql.Args()
    args: User
  ): Promise<UserFindManyArgs[]> {
    return this.service.GetAllUsers(args);
  }

  @graphql.Query(() => [Registration])
  async GetCourseRegistrations(
    @graphql.Args()
    args: RegistrationFindManyArgs
  ): Promise<Registration[]> {
    return this.service.GetCourseRegistrations(args);
  }
}
