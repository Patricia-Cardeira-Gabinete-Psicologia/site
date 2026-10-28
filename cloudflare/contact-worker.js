const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const RESEND_SEND_URL = "https://api.resend.com/emails";

function response(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": origin,
      "Vary": "Origin",
    },
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");
    if (!origin || origin !== env.CONTACT_ORIGIN) {
      return response({ error: "Forbidden" }, 403, env.CONTACT_ORIGIN);
    }

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": env.CONTACT_ORIGIN,
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
          Vary: "Origin",
        },
      });
    }
    if (request.method !== "POST") {
      return response({ error: "Method not allowed" }, 405, env.CONTACT_ORIGIN);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return response({ error: "Invalid request" }, 400, env.CONTACT_ORIGIN);
    }

    const { name, email, message, turnstileToken } = body ?? {};
    if (
      typeof name !== "string" || !name.trim() || name.length > 200 ||
      typeof email !== "string" || !email.trim() || email.length > 320 ||
      typeof message !== "string" || !message.trim() || message.length > 10000 ||
      typeof turnstileToken !== "string" || !turnstileToken
    ) {
      return response({ error: "Invalid request" }, 400, env.CONTACT_ORIGIN);
    }

    const verification = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
        remoteip: request.headers.get("CF-Connecting-IP") ?? "",
      }),
    });
    if (!verification.ok) {
      return response({ error: "Verification unavailable" }, 502, env.CONTACT_ORIGIN);
    }
    const verificationResult = await verification.json();
    if (!verificationResult.success || verificationResult.hostname !== env.CONTACT_HOSTNAME) {
      return response({ error: "Verification failed" }, 403, env.CONTACT_ORIGIN);
    }

    const emailResult = await fetch(RESEND_SEND_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.RESEND_FROM_EMAIL,
        to: [env.CONTACT_EMAIL_TO],
        reply_to: email.trim(),
        subject: "Pedido de contato do site",
        text: `Nome: ${name.trim()}\nEmail: ${email.trim()}\n\nMensagem:\n${message.trim()}`,
      }),
    });
    if (!emailResult.ok) {
      console.error("Resend delivery rejected", {
        status: emailResult.status,
        response: await emailResult.text(),
      });
      return response({ error: "Email delivery failed" }, 502, env.CONTACT_ORIGIN);
    }
    return response({ success: true }, 200, env.CONTACT_ORIGIN);
  },
};
