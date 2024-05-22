import { createGuest, getGuest } from '@/libraries/data-service';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    authorized({ auth, _ }) {
      return !!auth?.user;
    },

    async signIn({ user }) {
      try {
        const existingUser = await getGuest(user?.email);

        if (!existingUser)
          await createGuest({ email: user?.email, fullName: user?.name });

        return true;
      } catch {
        return false;
      }
    },

    async session({ session }) {
      const guest = await getGuest(session?.user.email);
      session.user.guestId = guest.id;

      return session;
    },
  },

  pages: {
    signIn: '/login',
    signOut: '/account',
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
