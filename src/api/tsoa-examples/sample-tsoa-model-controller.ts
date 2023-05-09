/**
 * PURPOSE: -provide a solid reference to use for developing API Endpoints using TSOA and generating detailed Swagger documentation 
 *          -All examples have unique sets of values to help find where information displays in Swagger
 *          -Compiling the TSOA Documentation for ease of referencing common usages of TSOA in development
 * 
 * INCLUDES: -Schema Example
 *           -Endpoint Examples
 *           -Decorators Examples
 *           -Query String Handling
 *           -Path Value Handling
 * 
 * REFERENCES: [
 *           { "annotations": https://tsoa-community.github.io/docs/annotations.html }
 *           { "exampleRoutes": https://tsoa-community.github.io/docs/examples.html },
 *           { "errorHandling": https://tsoa-community.github.io/docs/error-handling.html#specifying-error-response-types-for-openapi }
 *         ]
 * 
 * USAGE: -To see these endpoints live, drop this file into './controllers' before building/running dev.
 *        -To stop using, simply remove this file from './controllers' before building/running dev
 */
import {Body, Controller, Get, Path, Post, Query, Route, SuccessResponse, Example, Tags, Response} from "tsoa";


/************************************************************************************************** 
 * This Schema is intended as an example to highlight handling different data types coming into it
 * This will be used to Demonstrate validating data from a response body in addition to 'isInt'
 * you can also use 'isFloat'
 * 
 * Annotations follow the format: @<annotation> <condition>* <response>?
 * @summary Example Request Body Schema 
 **************************************************************************************************/
interface RequestBodyInterfaceExample {
    /**
     * Name of the User
     * @example "John Wick"
     * @minLength 2 name must be a minimum two characters
     * @maxLength 48 names cannot be longer than 48 characters in length
     * @pattern ^[a-zA-Z\s]+$
     */
    name: string,
    /**
     * Identification of the user
     * @example 467
     * @isInt Number must be an integer
     * @minimum 0 number must be equal or greater to 0
     * @maximum 500 number must less than or equal to 500
     */
    id: number,
    /**
     * Is the user happy
     * @example true
     * @isBool
     */
    isAwake?: boolean
}
/**
 * Validation Error Response, Used to facilitate a meaningful response to bad data
 */
interface ValidateErrorJSON {
    message: "Validation failed",
    details: { [name: string]: unknown };
}
/**
 * TSOA Takes the class structure below and when it runs 'tsoa routes' scans for controller files and generates the routes
 * based on the information provided below. In just this class, Routes/handling/Swagger documentation are all created, making endpoints easy
 */
@Route("SampleRoute")
@Tags("Examples")
export class SampleController extends Controller {
    /**
     * Sample Route Documentation for the development of Project WayFinder, takes POST request and echoes the response
     * @example body {
     *      "name": "John Hamm", 
     *      "id": 321, 
     *      "isAwake": true
     *     }
     * @summary Echoes Data sent in
     */
    //This Example appears as an example value in the Swagger Docs Request Body
    @Example<RequestBodyInterfaceExample>({
        name: "Johnny Silverhand ",
        id: 12345,
        isAwake: true
    })
    @Response<ValidateErrorJSON>(422, "Unprocessable Entity") /* Returns ValidateErrorJSON Object with Global Error handler, (This Shows up In Swagger Docs) */
    @SuccessResponse(201, "Created") 
    @Post()
    public async parseBodySample(@Body() body: RequestBodyInterfaceExample): Promise<RequestBodyInterfaceExample>{
        return {
            name: body.name,
            id: body.id,
            isAwake: body.isAwake || false 
        }
    }
    //This Object will be used for the following Get() method
    exampleObject = {
        name: "John Deere",
        id: 5431,
        favourite: false
    }
    /**
     * This Get() Method returns an object that exists in the class, that matches the format of the promised return type.
     * @summary Get Example
     */
    @SuccessResponse(200, "OK")
    @Get()
    public async returnAnExistingObject(): Promise<RequestBodyInterfaceExample> {
        return this.exampleObject
    }

    /**
     * Taking in a Path Parameter in Get Request
     * @summary Path Parameter Example
     * @example "123"
     */
    @SuccessResponse(200, "OK")
    @Get("/pathVal/{id}")
    public async usePathParameter(@Path() id: number) {
        return {
            id: id
        }
    }
    /**
     * Taking in a Query String Parameter Get Request
     * @summary Query String Example
     * @example "Johnny"
     */
    @SuccessResponse(200,"OK")
    @Get("/queryStr")
    public async useQueryStrings(@Query() name?: string){
        return {
            name: name
        }
    }
}
