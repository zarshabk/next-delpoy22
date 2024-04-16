"use server";

import connectionDb from "@/db/connection";
import User from "@/models/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Toast from "@/components/Toast";
export const createUser = async (formData) => {
  await connectionDb();
  console.log(formData.get("username"));
  const user = await User.findOne({ email: formData.get("email") });
  if (user) {
    cookies().set(
      "message",
      JSON.stringify({ error: true, msg: "user already exist" }),
      {
        expires: new Date(Date.now() + 10 * 1000),
      }
    );
  }

  await User.create({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  cookies().set(
    "message",
    JSON.stringify({ success: true, msg: "user addedd successfully" }),
    {
      expires: new Date(Date.now() + 10 * 1000),
    }
  );
  redirect("/login");
};
