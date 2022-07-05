import { convertAxiosErrorToError } from '@helpers/utils';
import { AxiosError } from 'axios';

describe('Http Utils', () => {
  describe('convertAxiosErrorToError', () => {
    test('With response', () => {
      const axiosError: AxiosError = new AxiosError('Error', '500', {}, null, {
        config: {},
        data: { message: 'Error' },
        headers: {},
        status: 500,
        statusText: 'Internal Error',
      });

      const errorResult = convertAxiosErrorToError(axiosError);

      expect(errorResult).toBeTruthy();
      expect(errorResult instanceof Error).toBeTruthy();
      expect(errorResult.message).toBe(
        `Status: ${axiosError.response?.status}. Data: ${JSON.stringify(
          axiosError.response?.data,
        )}. Message: ${axiosError.message}`,
      );
    });

    test('With request', () => {
      const axiosError: AxiosError = new AxiosError(
        'Error',
        '500',
        {},
        {
          message: 'Error',
        },
        undefined,
      );

      const errorResult = convertAxiosErrorToError(axiosError);

      expect(errorResult).toBeTruthy();
      expect(errorResult instanceof Error).toBeTruthy();
      expect(errorResult.message).toBe(JSON.stringify(axiosError.request));
    });

    test('With only message', () => {
      const axiosError: AxiosError = new AxiosError('Error', '500', {}, undefined, undefined);

      const errorResult = convertAxiosErrorToError(axiosError);

      expect(errorResult).toBeTruthy();
      expect(errorResult instanceof Error).toBeTruthy();
      expect(errorResult.message).toBe('Error');
    });
  });
});
