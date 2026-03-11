import { NextResponse } from "next/server"
import { Resend } from "resend"
import { createClient } from "@supabase/supabase-js"

const resend = new Resend(process.env.RESEND_API_KEY)

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: Request) {

  const { name, email, phone, message } = await req.json()

  const { error } = await supabase
    .from("contact_messages")
    .insert([{ name, email, phone, message }])

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  await resend.emails.send({
    from: "Website Contact <onboarding@resend.dev>",
    to: ["othdaberehealthcare@gmail.com"],
    subject: "New Contact Message",
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  })

  return NextResponse.json({ success: true })

}