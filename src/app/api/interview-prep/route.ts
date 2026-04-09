import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const client = new Anthropic();

export async function POST(req: NextRequest) {
  try {
    const { messages, careerPath, identity } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages required' }, { status: 400 });
    }

    const systemPrompt = `You are an expert AI interview coach at Uplrn AI Labs. You are helping a student prepare for interviews for "${careerPath}" roles. Their career identity is "${identity}".

Your job:
- Ask them one interview question at a time
- After they answer, give honest feedback (what was good, what to improve)
- Provide a model answer they can learn from
- Then ask the next question
- Mix technical, behavioral, and situational questions relevant to "${careerPath}"
- Be encouraging but honest — tell them if an answer needs work
- Keep responses concise (under 200 words)
- Use simple English — many students are from Punjab, India and may not be native English speakers
- If the student says "start" or it's the first message, begin with an easy warm-up question

Start every feedback with a score out of 10 for their answer.`;

    const anthropicMessages = messages.map((m: { role: string; content: string }) => ({
      role: m.role as 'user' | 'assistant',
      content: m.content,
    }));

    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 512,
      system: systemPrompt,
      messages: anthropicMessages,
    });

    const text = response.content[0].type === 'text' ? response.content[0].text : '';

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error('Interview prep error:', error);
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}
