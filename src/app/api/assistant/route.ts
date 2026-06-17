import { NextResponse } from "next/server";

function smartMockReply(message: string) {
  const text = message.toLowerCase();

  if (text.includes("outline") || text.includes("chapter")) {
    return `Chapter Outline: Faith During Uncertainty

1. When the Path Is Unclear
2. Trusting God Beyond What You See
3. Standing on Scripture in the Storm
4. Turning Fear Into Prayer
5. Walking Forward With Peace`;
  }

  if (text.includes("rewrite") || text.includes("pastoral") || text.includes("tone")) {
    return `Beloved, hear this clearly. Even when the road ahead is not clear, God is still faithful. The silence of a season does not mean the absence of His hand. He is working behind the scenes, guiding your steps, strengthening your heart, and preparing you for what is ahead.`;
  }

  if (text.includes("scripture") || text.includes("verse")) {
    return `Recommended Scriptures:

1. 2 Corinthians 5:7
2. Romans 8:28
3. Isaiah 41:10
4. John 14:27`;
  }

  return `The Scribe is ready to help. Ask me to create a chapter outline, rewrite content in a pastoral tone, suggest scriptures, write a sermon, or create a devotional.`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body?.message || "";

    return NextResponse.json({
      reply: smartMockReply(message),
    });
  } catch {
    return NextResponse.json({
      reply: smartMockReply(""),
    });
  }
}
