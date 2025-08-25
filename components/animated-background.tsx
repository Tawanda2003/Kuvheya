"use client"

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-white animate-gradient-x"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-blue-300 opacity-60 animate-float transform rotate-45"></div>
      <div className="absolute top-32 right-16 w-6 h-6 bg-sky-300 rounded-full opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute top-64 left-32 w-10 h-6 bg-blue-400 opacity-40 animate-float animation-delay-4000 transform rotate-12"></div>
      <div className="absolute bottom-32 right-24 w-8 h-8 bg-sky-400 opacity-60 animate-blob animation-delay-6000 clip-triangle"></div>
      <div className="absolute bottom-48 left-16 w-12 h-4 bg-blue-300 opacity-50 animate-float animation-delay-3000 rounded-full"></div>
      <div className="absolute top-48 right-32 w-6 h-6 bg-sky-300 opacity-40 animate-blob animation-delay-5000 transform rotate-45"></div>
      <div className="absolute top-80 left-48 w-4 h-12 bg-blue-200 opacity-30 animate-float animation-delay-1000"></div>
      <div className="absolute bottom-64 right-48 w-10 h-10 bg-sky-200 opacity-50 animate-blob animation-delay-7000 rounded-full"></div>

      {/* Larger floating circles for depth */}
      <div className="absolute top-20 right-40 w-16 h-16 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-40 left-40 w-12 h-12 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float animation-delay-2000"></div>
      <div className="absolute top-40 left-60 w-14 h-14 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
    </div>
  )
}
