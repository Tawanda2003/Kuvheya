"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import jsPDF from "jspdf"

export function CVDownload({ className = "", children }: { className?: string; children?: React.ReactNode }) {
  const downloadCV = () => {
    const doc = new jsPDF()

    // Set font
    doc.setFont("helvetica")

    // Header - Name and Title
    doc.setFontSize(24)
    doc.setTextColor(233, 30, 99) // Pink color
    doc.text("NATALIE KUVHEYA", 20, 25)

    doc.setFontSize(14)
    doc.setTextColor(100, 100, 100)
    doc.text("Digital Marketer", 20, 35)

    // Contact Section
    doc.setFontSize(12)
    doc.setTextColor(233, 30, 99)
    doc.text("C O N T A C T", 20, 50)

    doc.setFontSize(10)
    doc.setTextColor(60, 60, 60)
    doc.text("+263 787 511 100", 20, 60)
    doc.text("Kuvheyanatalie@gmail.com", 20, 67)
    doc.text("Harare, Kambuzuma", 20, 74)

    // Profile Summary
    doc.setFontSize(12)
    doc.setTextColor(233, 30, 99)
    doc.text("P R O F I L E   S U M M A R Y", 20, 90)

    doc.setFontSize(10)
    doc.setTextColor(60, 60, 60)
    const summary =
      "Results-oriented digital marketer skilled in SEO, SEM, email, and social\nmedia campaigns. Proficient in data-driven strategies that boost brand\nvisibility, lead generation, and conversions. Strong collaborator with a\npassion for leveraging the latest marketing trends to maximize ROI."
    doc.text(summary, 20, 100)

    // Education
    doc.setFontSize(12)
    doc.setTextColor(233, 30, 99)
    doc.text("E D U C A T I O N", 20, 130)

    doc.setFontSize(10)
    doc.setTextColor(60, 60, 60)
    doc.text("UNCOMMON.ORG", 20, 140)
    doc.text("Digital marketer", 20, 147)
    doc.text("2025 - 2025", 20, 154)

    doc.text("HUBSPOT", 20, 165)
    doc.text("2025-2025", 20, 172)

    // Work Experience
    doc.setFontSize(12)
    doc.setTextColor(233, 30, 99)
    doc.text("W O R K   E X P E R I E N C E", 20, 190)

    doc.setFontSize(11)
    doc.setTextColor(60, 60, 60)
    doc.text("Freelance (Rose Hair Castle)", 20, 200)
    doc.text("Volunteering", 20, 207)
    doc.text("Job Shadowing", 20, 214)

    doc.setFontSize(9)
    const workDesc =
      "Developed and implemented digital marketing strategies for a\nfamily-owned small business. Responsible for creating campaign\nplans, designing and running targeted ads on platforms like\nFacebook and Instagram, producing content calendars, and\nmonitoring analytics to optimize results. Increased brand visibility\nand helped attract new clients by deploying creative, data-driven\nsolutions tailored to business goals."
    doc.text(workDesc, 20, 225)

    // Skills Section (Right side)
    doc.setFontSize(12)
    doc.setTextColor(233, 30, 99)
    doc.text("S K I L L S", 120, 50)

    doc.setFontSize(10)
    doc.setTextColor(60, 60, 60)
    const skills = [
      "Social media marketing",
      "Content creation",
      "SEO",
      "Project Management",
      "Public Relations",
      "Teamwork",
      "Time Management",
      "Leadership",
      "Effective Communication",
      "Critical Thinking",
    ]

    let yPos = 60
    skills.forEach((skill) => {
      doc.text(`• ${skill}`, 120, yPos)
      yPos += 7
    })

    // Languages
    doc.setFontSize(12)
    doc.setTextColor(233, 30, 99)
    doc.text("L A N G U A G E S", 120, 140)

    doc.setFontSize(10)
    doc.setTextColor(60, 60, 60)
    doc.text("English: Fluent", 120, 150)

    // Save the PDF
    const pdfBlob = doc.output("blob")
    const url = window.URL.createObjectURL(pdfBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = "Natalie_Kuvheya_CV.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  return (
    <Button onClick={downloadCV} className={className}>
      {children || (
        <>
          <Download className="mr-2 h-5 w-5" />
          Download CV
        </>
      )}
    </Button>
  )
}
