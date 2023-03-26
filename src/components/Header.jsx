import React from 'react'

function Header() {
  return (
    <nav>
    <NavContent />
    </nav>
  )
}
function NavContent() {
    return (
      <>
          <h2>Sukhwant(sukh)</h2>
          <div>
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#timeline">Timeline</a>
          <a href="#services">Services</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#contact">Contact </a>
          </div>
          <a href="mailto:paddasukhwantsingh@gmail.com">
              <button>Email</button>
          </a>
      </>
    )
  }
export default Header