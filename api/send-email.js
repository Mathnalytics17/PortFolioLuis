import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { to, subject, message } = req.body;

  try {
    const resend = new Resend("re_Sj5SGbB9_P5U7qYdjxTeH7ZpS15Ji8gSs");

    const data = await resend.emails.send({
      from: "Mi App <onboarding@resend.dev>",
      to,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>${subject}</h2>
          <p>${message}</p>
        </div>
      `
    });

    return res.status(200).json({ ok: true, data });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error.message,
    });
  }
}
