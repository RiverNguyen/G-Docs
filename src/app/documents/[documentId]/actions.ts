"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export const getDocuments = async (ids: Id<"documents">[]) => {
  return await convex.query(api.documents.getByIds, { ids });
};

export const getUsers = async () => {
  const { sessionClaims } = await auth();

  const clerk = await clerkClient();

  const res = await clerk.users.getUserList({
    organizationId: [sessionClaims?.org_id as string],
  });

  const users = res.data.map((user) => ({
    id: user.id,
    name:
      user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
    avatar: user.imageUrl,
    color: "",
  }));

  return users;
};
