import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function smartMockReply(message: string) {
  const text = message.toLowerCase();

  if (text.includes("outline") || text.includes("chapter")) {
    return `
Chapter Outline: Faith During Uncertainty

1. When the Path Is Unclear
Open with the reality that every believer will face seasons where the next step is not obvious.

2. Trusting God Beyond What You See
Teach that faith is not denial. Faith is confidence in God's nature when circumstances are unclear.

3. Standing on Scripture in the Storm
Use 2 Corinthians 5:7, Romans 8:28, and Isaiah 41:10 to anchor the chapter.

4. Turning Fear Into Prayer
Show how uncertainty can become a place of deeper surrender and dependence on God.

5. Walking Forward With Peace
End with encouragement that God is still leading, even when the road is hidden.
`;
  }

  if (
    text.includes("rewrite") ||
    text.includes("pastoral") ||
    text.includes("tone")
  ) {
    return `
Beloved, hear this clearly. Even when the road ahead is not clear, God is still faithful. The silence of a season does not mean the absence of His hand. He is working behind the scenes, guiding your steps, strengthening your heart, and preparing you for what is ahead.

Faith is not pretending that the storm is not real. Faith is choosing to trust that God is greater than the storm.
`;
  }

  if (text.includes("sermon")) {
    return `
Sermon Title: Faith Beyond the Storm

Main Scripture:
2 Corinthians 5:7 — "For we walk by faith, not by sight."

Main Points:
1. Faith sees beyond present circumstances.
2. God's promises remain true in uncertain seasons.
3. Trusting God produces peace.
4. Every storm can become a testimony.

Closing Thought:
The storm may be loud, but God's word is stronger.
`;
  }

  if (text.includes("scripture") || text.includes("verse")) {
    return `
Recommended Scriptures:

1. 2 Corinthians 5:7
"For we walk by faith, not by sight."

2. Romans 8:28
God works all things together for good.

3. Isaiah 41:10
God promises His presence and strength.

4. John 14:27
Jesus gives peace that the world cannot give.
`;
  }

  if (text.includes("devotional")) {
    return `
Devotional Title: Trusting God When You Cannot See

Scripture:
2 Corinthians 5:7

Reflection:
There are moments when God asks us to move forward without showing us every detail. In those moments, faith becomes more than a word. It becomes the way we walk.

Prayer:
Lord, help me trust You when I do not understand the path. Strengthen my faith and fill my heart with peace.
`;
  }

  return `
The Scribe is ready to help. You can ask me to create a chapter outline, rewrite content in a warm pastoral tone, suggest scriptures, write a sermon, or create a devotional.
`;
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        reply: smartMockReply(message),
      });
    }

    const completion = await openai.chat.completions.create({
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
      completion.choices[0]?.message?.content || smartMockReply(message);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("AI Assistant Error:", error);

    const body = await request.clone().json().catch(() => null);
    const fallbackMessage = body?.message || "";

    return NextResponse.json({
      reply: smartMockReply(fallbackMessage),
    });
  }
}
