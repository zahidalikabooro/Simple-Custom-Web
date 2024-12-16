import React from 'react'
import Header from '@/components/Header'

export default function Contact() {
  return (
    <div>
           <Header />
      <div className="container">
      <h1 className="title">About Us</h1>
      <p>This is the About page.</p>
      <a href="/" className="link">Back to Home</a>
      <a href="/contact" className="link">Go to Contact</a>
    </div>
    </div>
  )

}
