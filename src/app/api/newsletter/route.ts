import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();

    // Store in subscribers JSON log (safe, local, zero bloat)
    const subscribersDir = path.join(process.cwd(), "data");
    const subscribersFile = path.join(subscribersDir, "subscribers.json");

    if (!fs.existsSync(subscribersDir)) {
      fs.mkdirSync(subscribersDir, { recursive: true });
    }

    let subscribers: { email: string; subscribedAt: string; source: string }[] = [];
    if (fs.existsSync(subscribersFile)) {
      try {
        subscribers = JSON.parse(fs.readFileSync(subscribersFile, "utf8"));
      } catch {
        subscribers = [];
      }
    }

    const existingIndex = subscribers.findIndex((s) => s.email === cleanEmail);
    if (existingIndex === -1) {
      subscribers.push({
        email: cleanEmail,
        subscribedAt: new Date().toISOString(),
        source: "newsletter_section"
      });
      fs.writeFileSync(subscribersFile, JSON.stringify(subscribers, null, 2), "utf8");
    }

    // Optional webhook forwarder if configured in environment
    const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail, timestamp: new Date().toISOString() })
      }).catch((err) => console.error("[Newsletter Webhook Error]:", err));
    }

    return NextResponse.json(
      { success: true, message: "Welcome to the SaaSInsider Weekly Software Briefing!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Newsletter API Error]:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
