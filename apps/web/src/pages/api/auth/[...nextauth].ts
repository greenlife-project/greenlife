import NextAuth from "next-auth";

import { authOptions } from "@garden/auth";

// @ts-ignore
export default NextAuth(authOptions);
