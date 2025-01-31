"use server";

import { db } from "@/app/_lib/firebase";

export async function verifyLink(link: string) {
  const snapshot = await db.collection("profiles").doc(link).get();
  return snapshot.exists;
}
