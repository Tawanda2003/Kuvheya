"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/components/navigation"
import { Mail, Phone, Linkedin, MapPin, ExternalLink, Send } from "lucide-react"
import { CVDownload } from "@/components/cv-download"
import { useState } from "react"
import { sendContactMessage } from "./actions"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setMessage("")

    try {
      const result = await sendContactMessage(formData)
      if (result.success) {
        setMessage("Thank you! Your message has been sent successfully.")
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      } else {
        setMessage("Sorry, there was an error sending your message. Please try again.")
      }
    } catch (error) {
      setMessage("Sorry, there was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      <Navigation />

      <section className="pt-20 md:pt-24 pb-12 md:pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6 md:mb-8">
              Let's Work Together
            </h1>
            <p className="text-lg md:text-xl text-blue-500 mb-8 md:mb-12 text-center px-4">
              Ready to grow your online presence? I'd love to help you achieve your digital marketing goals.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Form */}
              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-600 text-xl md:text-2xl">Send Me a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form id="contact-form" action={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-blue-600 mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="border-blue-200 focus:border-blue-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-blue-600 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="border-blue-200 focus:border-blue-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-blue-600 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        className="border-blue-200 focus:border-blue-500"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-blue-600 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="border-blue-200 focus:border-blue-500"
                        placeholder="Tell me about your project or how I can help you..."
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                    {message && (
                      <div
                        className={`text-center p-3 rounded-md text-sm ${
                          message.includes("successfully") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}
                      >
                        {message}
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div
                    onClick={() => {
                      const form = document.getElementById("contact-form")
                      if (form) {
                        form.scrollIntoView({ behavior: "smooth" })
                        const nameInput = document.getElementById("name") as HTMLInputElement
                        if (nameInput) nameInput.focus()
                      }
                    }}
                    className="block cursor-pointer"
                  >
                    <Card className="border-blue-200 bg-white hover:scale-105 transition-transform cursor-pointer h-full">
                      <CardHeader className="pb-2 md:pb-4">
                        <CardTitle className="flex flex-col items-center text-blue-600 text-base md:text-lg">
                          <Mail className="h-6 md:h-8 w-6 md:w-8 mb-2 md:mb-4 text-blue-500" />
                          Email
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center pt-0">
                        <p className="text-blue-600 text-xs md:text-sm">Kuvheyanatalie@gmail.com</p>
                      </CardContent>
                    </Card>
                  </div>

                  <a href="tel:+263787511100" className="block">
                    <Card className="border-blue-200 bg-white hover:scale-105 transition-transform cursor-pointer h-full">
                      <CardHeader className="pb-2 md:pb-4">
                        <CardTitle className="flex flex-col items-center text-blue-600 text-base md:text-lg">
                          <Phone className="h-6 md:h-8 w-6 md:w-8 mb-2 md:mb-4 text-blue-500" />
                          Phone
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center pt-0">
                        <p className="text-blue-600 text-xs md:text-sm">+263787511100</p>
                      </CardContent>
                    </Card>
                  </a>

                  <a
                    href="https://linkedin.com/in/natalie-kuvheya-4739ab351"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="border-blue-200 bg-white hover:scale-105 transition-transform cursor-pointer h-full">
                      <CardHeader className="pb-2 md:pb-4">
                        <CardTitle className="flex flex-col items-center text-blue-600 text-base md:text-lg">
                          <Linkedin className="h-6 md:h-8 w-6 md:w-8 mb-2 md:mb-4 text-blue-500" />
                          LinkedIn
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center pt-0">
                        <p className="text-blue-600 text-xs md:text-sm">View Profile</p>
                      </CardContent>
                    </Card>
                  </a>

                  <Card className="border-blue-200 bg-white h-full">
                    <CardHeader className="pb-2 md:pb-4">
                      <CardTitle className="flex flex-col items-center text-blue-600 text-base md:text-lg">
                        <MapPin className="h-6 md:h-8 w-6 md:w-8 mb-2 md:mb-4 text-blue-500" />
                        Location
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <p className="text-blue-600 text-xs md:text-sm">Harare, Zimbabwe</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-blue-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-blue-600 text-base md:text-lg">Why Work With Me?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 md:space-y-3 text-blue-600 text-sm md:text-base">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>Proven track record with 30% average engagement increase</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>100% on-time content delivery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>HubSpot certified digital marketing specialist</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>Experience across multiple industries</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <CVDownload className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                    <ExternalLink className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                    Download My Resume
                  </CVDownload>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
