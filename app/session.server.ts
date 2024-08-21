import invariant from 'tiny-invariant';
import { createCookieSessionStorage } from '@remix-run/node';

invariant(process.env.SESSION_SECRET, 'SESSION SECRET must be set');

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === 'production',
  }
});

export const { getSession, commitSession, destroySession } = sessionStorage;

