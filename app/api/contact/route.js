import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Expects the request body (JSON) to have:
 *  - name (string, required)
 *  - email (string, required)
 *  - phone (string, optional)
 *  - message (string, optional)
 */
export async function POST(req) {
  try {
    const data = await req.json();

    // Debug environment
    console.log("[Contact API] EMAIL_USER exists:", !!process.env.EMAIL_USER);
    console.log("[Contact API] EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("[Contact API] EMAIL_USER or EMAIL_PASS missing");
      return NextResponse.json(
        { success: false, message: "Email configuration missing" },
        { status: 500 }
      );
    }

    // Validate required fields
    if (!data.name || !data.email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required" },
        { status: 400 }
      );
    }

    // Attempt to set up transporter (basic Gmail, fallback SMTP if needed)
    let transporter;
    try {
      transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        secure: false,
        tls: {
          rejectUnauthorized: false,
        },
      });
      await transporter.verify();
      console.log("[Contact API] Gmail direct config success");
    } catch (gmailError) {
      // Fallback to SMTP config
      try {
        transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
          tls: {
            rejectUnauthorized: false,
          },
        });
        await transporter.verify();
        console.log("[Contact API] SMTP Gmail config success");
      } catch (smtpError) {
        console.error("[Contact API] All email configs failed");
        return NextResponse.json(
          { success: false, message: "Could not set up email service" },
          { status: 500 }
        );
      }
    }

    // Create HTML for the email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin:20px auto; padding:20px; background:#fbfbfb; border-radius:10px; border:1px solid #eee; }
          .header { font-size: 1.5rem; margin-bottom: 14px; color: #fa7c27;}
          .label { font-weight: bold; color: #E87124;}
          .field { margin-bottom: 12px; }
          .msg { white-space: pre-line; background: #fff7ed; padding: 12px; border-radius: 4px;}
          .footer { color:#888; font-size:13px; margin-top:24px;}
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">📬 New Contact Form Submission</div>
          <div class="field"><span class="label">Name:</span> ${data.name}</div>
          <div class="field"><span class="label">Email:</span> ${data.email}</div>
          ${
            data.phone
              ? `<div class="field"><span class="label">Phone:</span> ${data.phone}</div>`
              : ""
          }
          ${
            data.message
              ? `<div class="field"><span class="label">Message:</span>
                 <div class="msg">${data.message.replace(/\n/g, "<br/>")}</div>
                </div>`
              : ""
          }
          <div class="footer">Form received at: ${new Date().toLocaleString(
            "en-IN",
            {
              timeZone: "Asia/Kolkata",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }
          )}</div>
        </div>
      </body>
      </html>
    `;

    // Plain-text fallback
    const textContent = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ""}
${data.message ? `Message:\n${data.message}` : ""}
Received At: ${new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}
    `;

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Contact Form: ${data.name} (${data.email})`,
      text: textContent,
      html: htmlContent,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("[Contact API] Email sent:", result.messageId);

    return NextResponse.json({
      success: true,
      message: "Your message was sent successfully!",
      messageId: result.messageId,
    });
  } catch (error) {
    console.error("[Contact API] Error sending email:", error);

    let errorMessage = "Could not send your message. Please try again.";
    if (error && typeof error === "object" && "code" in error) {
      if (error.code === "EAUTH") {
        errorMessage = "Email authentication failed. Please check configuration.";
      } else if (error.code === "ECONNECTION") {
        errorMessage = "Connection to email server failed.";
      } else if (error.code === "ETIMEDOUT") {
        errorMessage = "Email sending timed out.";
      }
    }
    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
        error: process.env.NODE_ENV === "development" && error instanceof Error ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
