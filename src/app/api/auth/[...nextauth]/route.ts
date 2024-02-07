import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import GithubProvider from "next-auth/providers/github";
import TwitchProvider from "next-auth/providers/twitch";
import DiscordProvider from "next-auth/providers/discord";

// login with google
// const googleProvider = GoogleProvider({
//   clientId: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// });

// // login with facebook
// const facebookProvider = FacebookProvider({
//   clientId: process.env.FACEBOOK_CLIENT_ID,
//   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
// });

// // login with twitter
// const twitterProvider = TwitterProvider({
//   clientId: process.env.TWITTER_CLIENT_ID,
//   clientSecret: process.env.TWITTER_CLIENT_SECRET,
// });

// // login with github
// const githubProvider = GithubProvider({
//   clientId: process.env.GITHUB_CLIENT_ID,
//   clientSecret: process.env.GITHUB_CLIENT_SECRET,
// });

// // login with twitch
// const twitchProvider = TwitchProvider({
//   clientId: process.env.TWITCH_CLIENT_ID,
//   clientSecret: process.env.TWITCH_CLIENT_SECRET,
// });

// // login with discord
// const discordProvider = DiscordProvider({
//   clientId: process.env.DISCORD_CLIENT_ID,
//   clientSecret: process.env.DISCORD_CLIENT_SECRET,
// });

// login with credentials
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const respone = await fetch("http://127.0.0.1:3000/api/auth/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await respone.json();
        console.log(user);

        if (user) {
          return user.data;
        } else {
          return null;
        }
      },
    }),

    // googleProvider,
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "", 
    }),

    // facebookProvider, 
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID || "",
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
      }),
  ],
});

export { handler as GET, handler as POST };
