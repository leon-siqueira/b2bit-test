export function commonErrorMessages(code: number) : string {
  const errors = {
    401: 'You\'re not allowed to access this page. Please log in.',
    408: 'Request timeout',
    500: 'An error occurred on the server. Please try again later',
  } as Record<number, string>;

  return errors[code] || 'An error occurred. Please try again later';
}
