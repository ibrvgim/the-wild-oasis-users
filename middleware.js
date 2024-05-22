import { auth } from './authentication/auth';

export const middleware = auth;

export const config = {
  matcher: ['/account'],
};
