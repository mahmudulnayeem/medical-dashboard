import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        const users = [
          {
            id: "1",
            name: "doctor",
            password: "doctor",
            role: "doctor",
          },
          {
            id: "2",
            name: "admin",
            password: "admin",
            role: "admin",
          },
          {
            id: "3",
            name: "patient",
            password: "patient",
            role: "patient",
          },
          {
            id: "4",
            name: "pathology",
            password: "pathology",
            role: "pathology",
          },
        ];
        const user = users.find((user) => user.name === credentials?.username);
        if (!user) return null;
        if (
          credentials?.username === user?.name &&
          credentials?.password === user?.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
