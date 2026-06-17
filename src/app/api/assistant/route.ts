import OpenAI from "openai";
import { NextResponse } from "next/server";

function getOpenAI() {
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key is missing." },
        { status: 500 }
      );
    }

    const completion = await getOpenAI().chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are The Scribe, an AI assistant for Christian authors. Help write manuscripts, sermons, devotionals, and outlines in a warm, pastoral, prophetic, scripture-rich tone.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const reply =
      completion.choices[0]?.message?.content ||
      "No response was generated.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("AI Assistant Error:", error);

    return NextResponse.json(
      {
        error: "AI request failed. Check your API key, billing, or model access.",
      },
      { status: 500 }
    );
  }
}
