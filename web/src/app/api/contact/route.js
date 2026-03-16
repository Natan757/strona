export async function POST(request) {
  try {
    const { name, email, phone, category, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Send email via Resend integration
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "BagsByAga Contact <kontakt@bagsbyaga.pl>",
        to: "kontakt@bagsbyaga.pl",
        replyTo: email,
        subject: `Nowe zapytanie z kontaktu: ${category || "inne"}`,
        html: `
          <h2>Nowe zapytanie z formularza kontaktowego</h2>
          <p><strong>Imię i nazwisko:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
          <p><strong>Kategoria:</strong> ${category || "Nie podano"}</p>
          <h3>Wiadomość:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      console.error("Resend error:", emailResponse.statusText);
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
      });
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact route:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}