import { AxiosError } from 'axios';

const convertAxiosErrorToError = (error: AxiosError) => {
  let errorMessage: string;
  if (error.response)
    errorMessage = `Status: ${error.response.status}. Data: ${JSON.stringify(
      error.response.data,
    )}. Message: ${error.message}`;
  else if (error.request) errorMessage = JSON.stringify(error.request);
  else errorMessage = error.message;

  return new Error(errorMessage);
};

export { convertAxiosErrorToError };
