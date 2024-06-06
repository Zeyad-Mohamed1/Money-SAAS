import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app
  .get("/", async (c) => {
    return c.json({ hello: "world" });
  })
  .post(
    "/",
    zValidator(
      "json",
      z.object({
        name: z.string(),
        userId: z.string(),
      })
    ),
    (c) => {
      const { name, userId } = c.req.valid("json");
      return c.json({ hello: "world" });
    }
  );

export const GET = handle(app);
export const POST = handle(app);
