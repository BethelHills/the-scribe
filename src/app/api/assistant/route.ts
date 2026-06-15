import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const userMessage = body.message;

    if (!userMessage || typeof userMessage !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: `
You are The Scribe, an AI writing assistant for Christian authors.

Your job:
- Help authors write books, chapters, sermons, devotionals, and outlines.
- Match the author's voice, tone, scriptures, phrases, and teaching style.
- Write clearly, warmly, and with a pastoral tone.
- Suggest relevant scriptures when useful.
- Avoid sounding generic.
- Keep responses practical and ready to insert into a manuscript.

Author voice profile:
Name: Dr. Michael Adeyemi
Tone: Warm, prophetic, pastoral, encouraging
Common phrases:
- Beloved, hear this clearly...
- Let me show you from scripture...
- God is still working...
- Faith is not denial...

Favorite scriptures:
- 2 Corinthians 5:7
- Romans 8:28
- Isaiah 41:10
- John 14:27

Current manuscript:
Title: Faith Beyond the Storm
Chapter: Walking in Faith When You Can't See
          `,
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
    });

    return NextResponse.json({
      reply: response.output_text,
    });
  } catch (error) {
    console.error("AI Assistant Error:", error);

    return NextResponse.json(
      { error: "Something went wrong with the AI assistant." },
      { status: 500 }
    );
  }
}
