import { ArgumentsHost, Catch, ExceptionFilter,  HttpException, HttpStatus, NotFoundException  } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import logger from '../logger/log';

@Catch()
export class GeneralExceptionFilter<T> implements ExceptionFilter {

  constructor(private configService: ConfigService) {}

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const path = request.url.toLowerCase();
    let status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    if (exception instanceof NotFoundException) {     
     
    } 
   //console.info('exception', exception);

    let message = exception.message;
    let error;     
    const exceptionLog = `${path} ${exception.message || exception.toString()}`;
    const data  = JSON.stringify(request.body);
    switch(status) {
      case 400:
        error = "Bad Request";
        logger.info(`400: ${exceptionLog} | Data: ${data}`);
        break;
      case 404: 
        error = "Not Found";
        break;
      case 503: 
        error = "Service Unavaliable";
        logger.error(`503: ${exceptionLog} | Data: ${data}`);
        break; 
      case 500: 
        error = "Internal Server Error";
        logger.error(`500: ${exceptionLog} | Data: ${data}`);
        break;
      default: 
        error = "An Error Occured";
        logger.error(`${exceptionLog}| Data: ${data}`)
    }
    if (!status || status > 499) {
      message = 'A server error occured.';
    }
    const responseBody = {
      statusCode: status,      
      message,
      error
    }
    //response.status(status).json(responseBody);
    // response.body(responseBody);
    response.json();
  }
}
