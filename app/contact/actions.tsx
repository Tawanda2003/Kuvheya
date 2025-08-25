"use server"

import { Resend } from "resend"

const resend = new Resend("re_7yn21Ukx_8yhxQw3Td12PXmY3XciiEEdr")

export async function sendContactMessage(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  if (!name || !email || !subject || !message) {
    return { success: false, error: "All fields are required" }
  }

  try {
    // Send email to you (Natalie)
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["kuvheyanatalie@gmail.com"],
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #dbeafe;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">New Contact Form Submission</h1>
              <p style="color: #dbeafe; margin: 10px 0 0 0; font-size: 16px;">Someone wants to work with you!</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              
              <!-- Contact Details Card -->
              <div style="background-color: #dbeafe; border-left: 4px solid #2563eb; padding: 25px; margin-bottom: 30px; border-radius: 8px;">
                <h2 style="color: #1e40af; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">Contact Details</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #1d4ed8; width: 80px;">Name:</td>
                    <td style="padding: 8px 0; color: #4a4a4a;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #1d4ed8;">Email:</td>
                    <td style="padding: 8px 0; color: #4a4a4a;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #1d4ed8;">Subject:</td>
                    <td style="padding: 8px 0; color: #4a4a4a;">${subject}</td>
                  </tr>
                </table>
              </div>
              
              <!-- Message Card -->
              <div style="background-color: #ede9fe; border-left: 4px solid #7c3aed; padding: 25px; margin-bottom: 30px; border-radius: 8px;">
                <h3 style="color: #5b21b6; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Message:</h3>
                <div style="background-color: #ffffff; padding: 20px; border-radius: 6px; border: 1px solid #c4b5fd;">
                  <p style="line-height: 1.6; color: #4a4a4a; margin: 0; white-space: pre-wrap; font-size: 15px;">${message}</p>
                </div>
              </div>
              
              <!-- Action Buttons -->
              <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: 600; margin: 0 10px; box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);">Reply Now</a>
                <a href="tel:+263787511100" style="display: inline-block; background-color: #ffffff; color: #2563eb; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: 600; margin: 0 10px; border: 2px solid #2563eb;">Call Client</a>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background-color: #fafafa; padding: 20px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #666666; font-size: 14px;">This message was sent from your portfolio contact form</p>
              <p style="margin: 5px 0 0 0; color: #999999; font-size: 12px;">Natalie Kuvheya - Digital Marketing Specialist</p>
            </div>
            
          </div>
        </body>
        </html>
      `,
    })

    // Send confirmation email to the sender
    await resend.emails.send({
      from: "Natalie Kuvheya <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for reaching out! 🌟",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Your Message</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #dbeafe;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 600;">Thank You! 🌟</h1>
              <p style="color: #dbeafe; margin: 15px 0 0 0; font-size: 18px;">Your message has been received</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              
              <p style="font-size: 18px; color: #4a4a4a; margin: 0 0 20px 0;">Hi <strong style="color: #2563eb;">${name}</strong>,</p>
              
              <p style="font-size: 16px; color: #4a4a4a; line-height: 1.6; margin: 0 0 25px 0;">
                Thank you for reaching out! I've received your message about "<strong style="color: #1d4ed8;">${subject}</strong>" and I'm excited to learn more about your project.
              </p>
              
              <!-- Next Steps Card -->
              <div style="background: linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%); padding: 30px; border-radius: 12px; margin: 30px 0; border: 1px solid #60a5fa;">
                <h3 style="color: #1e40af; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; text-align: center;">What happens next?</h3>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                  <div style="display: flex; align-items: center;">
                    <div style="background-color: #2563eb; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">1</div>
                    <p style="margin: 0; color: #4a4a4a; font-size: 15px;">I'll review your message within 24 hours</p>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <div style="background-color: #2563eb; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">2</div>
                    <p style="margin: 0; color: #4a4a4a; font-size: 15px;">I'll respond with initial thoughts and next steps</p>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <div style="background-color: #2563eb; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">3</div>
                    <p style="margin: 0; color: #4a4a4a; font-size: 15px;">We can schedule a call to discuss your project in detail</p>
                  </div>
                </div>
              </div>
              
              <!-- Contact Options -->
              <div style="background-color: #ede9fe; padding: 25px; border-radius: 8px; margin: 25px 0;">
                <h4 style="color: #5b21b6; margin: 0 0 15px 0; font-size: 16px; text-align: center;">Need to reach me urgently?</h4>
                <div style="text-align: center;">
                  <a href="https://linkedin.com/in/natalie-kuvheya-4739ab351" style="display: inline-block; background-color: #0077b5; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 5px 10px;">LinkedIn</a>
                  <a href="tel:+263787511100" style="display: inline-block; background-color: #25d366; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 5px 10px;">Call Me</a>
                </div>
              </div>
              
              <p style="font-size: 16px; color: #4a4a4a; line-height: 1.6; margin: 25px 0 0 0;">
                Looking forward to working together and helping you achieve your digital marketing goals!
              </p>
              
            </div>
            
            <!-- Footer -->
            <div style="background-color: #1e40af; padding: 30px; text-align: center; color: #ffffff;">
              <h3 style="margin: 0 0 15px 0; font-size: 20px; font-weight: 600;">Natalie Kuvheya</h3>
              <p style="margin: 0; font-size: 16px; opacity: 0.9;">Digital Marketing Specialist & Creative Strategist</p>
              <div style="margin: 20px 0 0 0; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.2);">
                <p style="margin: 0; font-size: 14px; opacity: 0.8;">📧 kuvheyanatalie@gmail.com</p>
                <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">📱 +263787511100</p>
                <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">📍 Harare, Zimbabwe</p>
              </div>
            </div>
            
          </div>
        </body>
        </html>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Failed to send message" }
  }
}
