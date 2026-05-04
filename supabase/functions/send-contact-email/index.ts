import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const TO_EMAIL = "info@allintech.co.il";
const FROM_EMAIL = "AllInTech <onboarding@resend.dev>";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  subject: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendEmail(payload: Record<string, unknown>) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const text = await res.text();
  if (!res.ok) {
    console.error("Resend error", res.status, text);
    throw new Error(`Resend ${res.status}: ${text}`);
  }
  return text;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data = (await req.json()) as ContactPayload;
    const name = String(data.name ?? "").trim().slice(0, 100);
    const phone = String(data.phone ?? "").trim().slice(0, 30);
    const email = String(data.email ?? "").trim().slice(0, 255);
    const subject = String(data.subject ?? "").trim().slice(0, 100);

    if (!name || name.length < 2) throw new Error("שם לא תקין");
    if (!phone || phone.length < 7) throw new Error("טלפון לא תקין");
    if (!isValidEmail(email)) throw new Error("אימייל לא תקין");
    if (!subject) throw new Error("נושא חסר");

    // 1) Email to company
    await sendEmail({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: email,
      subject: `פנייה חדשה מהאתר - ${subject}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; color:#111;">
          <h2>פנייה חדשה מהאתר</h2>
          <p><strong>שם:</strong> ${name}</p>
          <p><strong>טלפון:</strong> ${phone}</p>
          <p><strong>אימייל:</strong> ${email}</p>
          <p><strong>נושא:</strong> ${subject}</p>
        </div>
      `,
    });

    // 2) Confirmation email to user
    await sendEmail({
      from: FROM_EMAIL,
      to: [email],
      subject: "קיבלנו את פנייתך",
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; color:#111; line-height:1.6;">
          <p>שלום ${name},</p>
          <p>קיבלנו את פנייתך, תודה שפנית אלינו.</p>
          <p>נחזור אליך בהקדם האפשרי.</p>
          <br/>
          <p>בברכה,<br/>צוות AllInTech</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("send-contact-email error:", message);
    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
