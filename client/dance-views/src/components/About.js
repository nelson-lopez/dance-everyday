import React from 'react';
import Nav from './Nav';
import Footer from './Footer'

export default function About() {
  return (
    <div>
      <Nav />
      <div className="about-container">
        <h1>Welcome</h1>
        <h3>We're Dance Everyday, a place where dancers and dance enthusist come together to share how anyone can Dance Anyday!</h3>

        <h2>The Keyboard Hackers Who Made This For You</h2>

        <h2>Nelson Lopez</h2>
        <img className="profile" src="https://i.imgur.com/4lAzr1u.jpg" alt="Nelson Mondela" />
        <p>The man, the coder, the legend. From professional bartender to senior software developer in the making. He truly believes in the tranformative power of simplicity and clear communication. Easily the most valuable player of the Dance Everyday team.</p>


        <h2>Anna Moser</h2>
        <img className="profile" src="https://i.imgur.com/RTcpSKq.jpg" alt="Anna Moser" />
        <p>Focused, creative, and a silent killer are short descriptions of her designing powers. She enforces that good design and good relationships come from collaboration. With her, our team stayed on track and overcame every bump in the road.</p>


        <h2>Jaabel Lopez</h2>
        <img className="profile" src="https://i.imgur.com/BKbBbLq.jpg" alt="Jaabel Lopez" />
        <p>The author, the zouker, the challenger. Men with a vision are needed in every team, large or small. He an individual who brings his passions for creativity to the team and brings out the best in all the people he speaks to. As a team player, he elevates everyones experiences, engages his team, and inspires everyone everywhere.</p>
      </div>
      <Footer />
    </div>

  )
}