/**
 * PURPOSE: Health Endpoint Controller for Project Wayfinder
 */
import { Get, Route, SuccessResponse, Tags, Example } from "tsoa";

  interface HealthPointInterface {
    response: string
  }
  
  @Route("health")
  @Tags("Health")
  export class HealthClassController {
    /**
     * Project Waypoint's health handler to confirm API is online with Openshift
     * @summary Health endpoint for OpenShift
     */
    @Example<string>("Project Waypoint API Online")
    @SuccessResponse(200, "OK")
    @Get()
    public async healthCheck() { 
      return "Project Waypoint API Online" 
    }
  }