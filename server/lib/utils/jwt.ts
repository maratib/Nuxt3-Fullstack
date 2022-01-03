import { Response } from "express";
import { setCookie } from "h3";
import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

export function generateAccessToken(user: User) {
  return jwt.sign({ userId: user.id }, process.env.JWT_ACCESS_SECRET!, {
    expiresIn: "10m",
  });
}

export function generateRefreshToken(user: User) {
  return jwt.sign({ userId: user.id }, process.env.JWT_REFRESH_SECRET!, {
    expiresIn: "4h",
  });
}

export function generateTokens(user: any) {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return {
    accessToken,
    refreshToken,
  };
}

export const sendRefreshToken = (res: Response, token: string) => {
  setCookie(res, "refresh_token", token, {
    httpOnly: true,
    sameSite: true,
    // path: "/api/user/login",
  });
};
