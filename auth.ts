import NextAuth from "next-auth";
import Twitter from "next-auth/providers/twitter";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [Twitter],
  session: {
    strategy: 'jwt'
  }
});
