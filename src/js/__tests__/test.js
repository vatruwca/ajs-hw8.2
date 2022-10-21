import ErrorRepository from '../app';

const clientErrors = new ErrorRepository();

test('checking the receipt of the text by the error code', () => {
  const testErrors = new Map(
    [
      [400, 'Bad Request'],
      [401, 'Unauthorized '],
      [402, 'Payment Required'],
      [403, 'Forbidden'],
      [404, 'Not Found'],
    ],
  );
  expect(clientErrors.translate(404)).toEqual(testErrors.get(404));
});

test('checking for an unknown error code', () => {
  expect(clientErrors.translate(500)).toEqual('Unknown error');
});
