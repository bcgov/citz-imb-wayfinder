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

//Sample Interface for data expected in the BodyRequest
interface RequestBodyInterface {
    name: string,
    id: number,
    favourite?: string
}

@Route("SampleRoute")
export class SampleTestController {
    @SuccessResponse(200, "OK")
    @Post("/")
    public async victoryLap(@Body() body: RequestBodyInterface){
        try {
            return {
                name: body.name || "Gerald Ford",
                id: body.id || 12345,
                favourite: body.favourite || "Ford Model T" 
            }
        } catch(error) {
            console.log("Bad Request occured", typeof(error))
        }
    }
}
