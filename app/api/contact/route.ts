import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  businessName: z.string().min(2),
  serviceInterest: z.string().min(1),
  message: z.string().min(10),
  referralSource: z.string().min(1),
});

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const payload = schema.parse(await req.json());

    if (!resend) {
      return NextResponse.json(
        { error: "Email service not configured. Add RESEND_API_KEY." },
        { status: 500 },
      );
    }

    const to = process.env.SALES_EMAIL || process.env.CONTACT_EMAIL || "sales@evolvelocalai.com";

    await resend.emails.send({
      from: "Evolve Local AI <onboarding@resend.dev>",
      to,
      replyTo: payload.email,
      subject: `New consultation request from ${payload.name}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone}`,
        `Business: ${payload.businessName}`,
        `Service: ${payload.serviceInterest}`,
        `Referral Source: ${payload.referralSource}`,
        "",
        payload.message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data", details: error.flatten() }, { status: 400 });
    }

    return NextResponse.json({ error: "Unable to send message" }, { status: 500 });
  }
}
