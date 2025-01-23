import React from 'react';
import './portfolio.css';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id='home'>
        <h2>Home</h2>
        <Image src='https://picsum.photos/200/300' alt='Profile Picture' style={{ width: '180px', borderRadius: '90px', border: '3px solid #0072ff' }} />
        <p>Hello! I am Uzair Ahmed, a passionate web developer with skills in JavaScript React and CSS</p>
        <h3>And I am a <span>Frontend Developer</span></h3>
        <p>Front-End Developer Responsibilities Collaborate with designers
          optimize applications develop features and maintain brand
          consistency for user-facing interfaces</p>
      </section>
      <section id='about'>
        <h2>About</h2>
        <h3>Professional Background</h3>
        <p>I graduated with a degree in Computer Science and have worked on various projects ranging from web applications to machine learning models.</p>
        <h3>Skills</h3>
        <p>JavaScript, React, Node.js, Python, CSS, HTML.</p>
        <h3>Interests</h3>
        <p>I enjoy learning about new technologies, contributing to open-source projects, and exploring UI/UX design.</p>
        <h3>Goals</h3>
        <p>My goal is to build innovative solutions that improve user experience and efficiency.</p>
      </section>
      <section id='contact'>
        <h2>Contact</h2>
        <form>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' required />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' required />
          </div>
          <div>
            <label htmlFor='message'>Message:</label>
            <textarea id='message' name='message' required></textarea>
          </div>
          <button type='submit'>Submit</button>
        </form>
        
      </section>
    </div>
  );
};

export default Portfolio;
