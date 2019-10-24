import React from 'react';
import Nav from './Nav';

export default function About() {
  return (
    <div className="about-container">
      <Nav />
      About Container
      <div className="grid-card">
        <div className="about-header">
          <h1 className="about-welcome">Welcome</h1>
          <h3 className="about-catch-phrase">We're Dance Everyday, a place where dancers and dance enthusist come together to share how anyone can Dance Anyday!</h3>
        </div>
        <div className="header-img">
          <img  />
        </div>
        <div className="met-your-devs">
          <h2>The Keyboard Hackers Who Made This For You</h2>
          <div className="nelson">
            <h3 className="dev-name">Nelson Lopez</h3>
            <img src="https://i.imgur.com/4lAzr1u.jpg" alt="Nelson Mondela"/>
            <h5 className="dev-about">The man, the coder, the legend. From professional bartender to senior software developer in the making. He truly believes in the tranformative power of simplicity and clear communication. Easily the most valuable player of the Dance Everyday team.</h5>
          </div>
          <div className="anna">
            <h3 className="dev-name">Anna Moser</h3>
            <img src="https://i.imgur.com/RTcpSKq.jpg" alt="Anna Moser"/>
            <h5 className="dev-about">Focused, creative, and a silent killer are short descriptions of her designing powers. She enforces that good design and good relationships come from collaboration. With her, our team stayed on track and overcame every bump in the road.</h5>
          </div>
          <div className="jaabel">
            <h3 className="dev-name">Jaabel Lopez</h3>
            <img src="https://i.imgur.com/BKbBbLq.jpg" alt="Jaabel Lopez"/>
            <h5 className="dev-about">The author, the zouker, the challenger. Men with a vision are needed in every team, large or small. He an individual who brings his passions for creativity to the team and brings out the best in all the people he speaks to. As a team player, he elevates everyones experiences, engages his team, and inspires everyone everywhere.</h5>
          </div>
        </div>
      </div>
    </div>
  )
}