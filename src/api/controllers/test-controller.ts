import { Post, Get, Route} from 'tsoa';
import { Request, Response } from 'express';
interface TestResponse {
    message: string;
}

export const ping = async (req:Request, res: Response) => {
    res.status(200).send(JSON.stringify({message: "message body"}))
}

@Route("Marco")
export default class TestController {
    @Get("/")
    public async getMessage(): Promise<TestResponse> {
        return {message: "getMessage"}
        
    }
    @Post("/")
    public async sendMessage() {
        return {message: "sendMessage"}
    }
    
}
