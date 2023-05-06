import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";

  interface HealthPointInterface {
    message: string;
  }
  
  @Route("health")
  export class HealthClassController {
    @SuccessResponse(200, "OK")
    @Get("/")
    public async healthCheck(): Promise<HealthPointInterface> {
      try { 
        return {
          message: "Express + Typescript API Online"
        }
      } catch(ex) {
        console.error(ex);
        return {} as HealthPointInterface
      }
    }
  }