import { ApiResponseHeader } from './api-response-header';
import { ApiResponseMessages } from './api-response-messages';

export class ApiResponse<T> {
  constructor(
    public readonly header: ApiResponseHeader,
    public readonly body: Map<string, T>,
  ) {}

  static success<T>(body: T, message?: string): ApiResponse<T> {
    const responseData = new Map<string, T>();
    responseData.set('data', body);
    const apiResponse = new ApiResponse(
      new ApiResponseHeader(message ?? ApiResponseMessages.SUCCESS),
      responseData,
    );
    return apiResponse;
  }
}
