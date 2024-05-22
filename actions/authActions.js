'use server';

import { signIn, signOut } from '@/authentication/auth';

export async function signinAction() {
  await signIn('google', { redirectTo: '/account' });
}

export async function signoutAction() {
  await signOut({ redirectTo: '/' });
}
