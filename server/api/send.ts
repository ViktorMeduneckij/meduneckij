import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  const resend = new Resend(process.env.NUXT_RESEND_API_KEY);
  const body = await readBody(event);

  const response = await resend.emails.send({
    from: "viktor@meduneckij.lt",
    to: ["viktor@meduneckij.lt"],
    subject: "New message from " + body.name,
    html:
      "<p>Name: " +
      body.name +
      "</p><p>Email: " +
      body.email +
      "</p><p>Message: " +
      body.message +
      "</p>",
  });

  if (response.error) {
    throw createError({
      statusCode: 500,
      message: "Error sending email",
    });
  }

  return response;
});
