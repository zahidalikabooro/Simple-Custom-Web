import React from 'react'
import Header from '@/components/Header'

export default function Contact() {
  return (
    <div>
           <Header />
         <div className="container">
      <h1 className="title">Contact Us</h1>
      <p>This is the Contact page.</p>
      <a href="/about" className="link">Go to About</a>
      <a href="/" className="link">Back to Home</a>
    </div>
    </div>
  )
}
