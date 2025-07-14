// app/api/explain/route.ts
import OpenAI from 'openai'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this exists in your .env
})

export async function POST(req: NextRequest) {
  try {
    const { question, language = 'english', mode = 'simple' } = await req.json()

    if (!question || question.trim().length === 0) {
      return NextResponse.json(
        { error: "Please provide a question to explain" },
        { status: 400 }
      )
    }

    let prompt = ''

    if (language === 'english') {
      if (mode === 'story') {
        prompt = `Tell me a fun story to explain this concept like I'm 5 years old. Make it engaging and use simple words: ${question}`
      } else {
        prompt = `Explain this like I'm 5 years old, in a simple and fun way using easy words and maybe an analogy: ${question}`
      }
    } else {
      if (mode === 'story') {
        prompt = `একটি মজার গল্পের মাধ্যমে একজন ৫ বছর বয়সী বাংলাদেশী শিশুর মতো করে সহজভাবে ব্যাখ্যা করুন: ${question}`
      } else {
        prompt = `একজন ৫ বছর বয়সী বাংলাদেশী শিশুর মতো করে সহজভাবে ব্যাখ্যা করুন: ${question}`
      }
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 400,
    })

    const explanation = completion.choices[0].message?.content

    if (!explanation) {
      return NextResponse.json({ error: "Failed to generate explanation" }, { status: 500 })
    }

    return NextResponse.json({ explanation })
  } catch (error) {
    console.error('OpenAI API error:', error)
    return NextResponse.json(
      { error: "Sorry, I couldn't explain that right now. Please try again!" },
      { status: 500 }
    )
  }
}
