import React from 'react';
import './CurriculumVitae.css';
import porfilePic from '../assets/porfile.jpg';

const CurriculumVitae = () => {
  return (
    <div className="cv">
      <div className="main">
        <div>
          <img className="cv-img" src={porfilePic} alt="Foto" />
        </div>
        <div>
          <h2 className="my-name">Mario Sergio Domínguez Consuegra</h2>
          <h1 className="my-porfile">Front-End Developer</h1>
        </div>
      </div>
      <div className="cv-izq cv-container">
        <section className=" part">
          <h2>Personal Profile</h2>
          <hr />

          <p>
            I am creative and innovative developer capable of solving problems
            that arise. I have a professional attitude. I search in
            bibliographies and I research to solve doubts and to solve complex
            problems. I like to investigate all technologies I use. I have a
            good technical English.I love programming.
          </p>
        </section>
        <section className="contact-info part">
          <h2>Contact</h2>
          <hr />
          <p>Direction: Holguín ,Cuba</p>
          <p>Mobile: +53 58595831</p>
          <p>Email: mario.sergdc@gmail.com</p>
          <p>
            LinkedIn:
            <a
              href="https://linkedin.com/in/mario-domínguez-consuegra-460609248"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              mario-domínguez-consuegra-460609248
            </a>
          </p>
          <p>
            GitHub:{' '}
            <a
              href="https://github.com/mariosergdc"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              mariosergdc
            </a>
          </p>
        </section>
        <section className=" part">
          <h2>Languages</h2>
          <hr />
          <p>Español: Native</p>
          <p>English: Intermediate(good technical English)</p>
        </section>
      </div>
      <div className="cv-container">
        <section className=" part">
          <h2>Skills</h2>
          <hr />
          <p>
            <b>React.js</b>: Reducers Redux Context
          </p>
          <p>Java Script</p>
          <p>HTML</p>
          <p>CSS: FlexBox, GridCSS, Bootstrap</p>
          <p>Node.js: Express Mongoose</p>
          <p>MongoDB</p>
          <p>
            <b>Git</b> GitHub
          </p>
        </section>
        <section className=" part">
          <h2>Education</h2>
          <hr />

          <p>
            2013-2018: Bachelor's degree in Computer Science (Universidad de
            Oriente,Santiago de Cuba)
          </p>

          <p>Courses: React.js FlexBox GridCSS JS</p>
        </section>
      </div>
    </div>
  );
};

export default CurriculumVitae;
