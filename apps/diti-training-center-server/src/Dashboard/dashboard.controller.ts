import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DashboardService } from "./dashboard.service";
import { RegistrationFindManyArgs } from "../registration/base/RegistrationFindManyArgs";
import { UserFindManyArgs } from "../user/base/UserFindManyArgs";
import { Registration } from "../registration/base/Registration";

@swagger.ApiTags("dashboards")
@common.Controller("dashboards")
export class DashboardController {
  constructor(protected readonly service: DashboardService) {}

  @common.Get("/users")
  @swagger.ApiOkResponse({
    type: UserFindManyArgs
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetAllUsers(
    @common.Body()
    body: RegistrationFindManyArgs
  ): Promise<UserFindManyArgs[]> {
        return this.service.GetAllUsers(body);
      }

  @common.Get("/course/:courseId/registrations")
  @swagger.ApiOkResponse({
    type: Registration
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetCourseRegistrations(
    @common.Body()
    body: RegistrationFindManyArgs
  ): Promise<Registration[]> {
        return this.service.GetCourseRegistrations(body);
      }
}
