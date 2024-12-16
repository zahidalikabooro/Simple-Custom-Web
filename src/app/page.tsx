import React from 'react'
import Header from '@/components/Header'
export default function () {
  return (
    <div>
      <Header />
      <div className="container">
      <h1 className="title">Welcome to My Next.js Website</h1>
      <p>This is the homepage.</p>
      <a href="/about" className="link">Go to About</a>
    </div>
    </div>
  )
}
