import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // post /login
  @post("login")
  login(): any {
    return {}
  }

  // get /protected
  @Get("protected")
  getHello(): string {
    return this.appService.getHello();
  }
}
