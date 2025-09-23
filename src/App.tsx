import './App.css'
import { useEffect } from 'react';
import codingImg from './assets/images/coding-img.jpeg';
import myImg from './assets/images/my-image.png';


function App() {

  useEffect(() => {
    const observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible-1");
        }
        // else {
        //   entry.target.classList.remove("visible");
        // }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden-1");
    hiddenElements.forEach(element => {
      observer.observe(element);
    });
    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);
    // Typewriter animation for describing yourself
    const descriptionArr = [
      "Full Stack Developer",
      "AI/ML enthusiast",
      "Software Engineer",
      "Web Developer",
      "Mobile Developer",
      "Software Architect"
    ];
    let i = 0;
    let j = 0;
    let isDeleting = false;
    let currentText = '';
    let speed = 100;

    function type() {
      if (i === descriptionArr.length) {
        i = 0;
      }
      const text = descriptionArr[i];
      if (isDeleting) {
        currentText = text.substring(0, j - 1);
        j--;
        speed = 75;
      } else {
        currentText = text.substring(0, j + 1);
        j++;
        speed = 85;
      }
      const skillsElem = document.getElementById("skills");
      if (skillsElem) skillsElem.innerHTML = currentText;
      if (!isDeleting && j === text.length) {
        isDeleting = true;
        speed = 2000;
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i++;
        speed = 85;
      }
      setTimeout(type, speed);
    }
    type();

  return (
    <>
    <title>Pranav Krishnan Website</title>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no"
    />
    <link rel="stylesheet" href="assets/style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
    <div className="wrapper">
      <header id="top-header">
        <img
          className="background"
          src={myImg}
          alt="Pranav Krishnan"
        />
        <div id="header">
          <h1 className="capitalize" id="name">
            Pranav Krishnan
          </h1>
          <p id="skills" />
        </div>
      </header>
      {/* Main body */}
      <div id="main">
        <header className="heading-box">
          <h2 className="capitalize hidden-1">Projects</h2>
        </header>
        <div id="Projects">
          <section className="alternating box">
            <section className="right">
              <a
                href="https://pranavkrish2005.github.io/weather-app/"
                className="image-link"
              >
                <div className="image-container">
                  <i className="fas fa-cloud" />
                  <img src={codingImg} alt="Coding Image" />
                </div>
              </a>
              <div className="description">
                <h2 className="capitalize hidden-1">Weather Forecast App</h2>
                <p>
                  React weather app to view current weather and forecast in any
                  city
                </p>
              </div>
            </section>
            <section className="left">
              <a
                href="https://github.com/pranavkrish2005/Stock-prediction-AI"
                className="image-link"
              >
                <div className="image-container">
                  <i className="fas fa-arrow-trend-up" />
                  <img src={codingImg} alt="Coding Image" />
                </div>
              </a>
              <div className="description">
                <h2 className="capitalize hidden-1">Stock Prediction AI</h2>
                <p>AI trained to predict the stock price of SPY</p>
              </div>
            </section>
            <section className="right">
              <a
                href="https://github.com/pranavkrish2005/Encryption-message-app"
                className="image-link"
              >
                <div className="image-container">
                  <i className="fas fa-message" />
                  <img src={codingImg} alt="Coding Image" />
                </div>
              </a>
              <div className="description">
                <h2 className="capitalize hidden-1">Encryption message App</h2>
                <p>
                  This is an online messaging website that communicates the
                  importance of digital encryption and demonstrates a simplified
                  model of how a messaging website works.
                </p>
              </div>
            </section>
          </section>
        </div>
        <section id="normal-box">
          <header>
            <h2 className="capitalize hidden-1">Experience and Skills</h2>
          </header>
          <section>
            <header>
              <h3 className="capitalize hidden-1">Skills</h3>
            </header>
            <div className="flex-container">
              <div className="flex-item">
                <span className="label">Programming Languages:</span>
                <span className="content">
                  Python, Java, C++, JavaScript, TypeScript, Swift
                </span>
              </div>
              <div className="flex-item">
                <span className="label">Web Development:</span>
                <span className="content">
                  React.js, Node.js, Express.js, HTML, CSS, RESTful APIs
                </span>
              </div>
              <div className="flex-item">
                <span className="label">Machine Learning &amp; AI:</span>
                <span className="content">
                  TensorFlow, Keras, Scikit-Learn, PyTorch
                </span>
              </div>
              <div className="flex-item">
                <span className="label">Data Management:</span>
                <span className="content">SQL, NoSQL (MongoDB)</span>
              </div>
              <div className="flex-item">
                <span className="label">DevOps &amp; Tools:</span>
                <span className="content">Git, Docker, AWS</span>
              </div>
            </div>
          </section>
          <hr />
          <section>
            <header>
              <h3 className="capitalize hidden-1">Experience</h3>
              <p>
                AI/ML &amp; Cybersecurity Intern : Internship with Prof. Rajeev
                Barua
              </p>
            </header>
            <p>
              • Developed a system to trace malware origins with vector databases,
              semi-supervised ML models and clustering, achieving 96% accuracy,
              significantly improving hacker group attribution.
            </p>
            <p>
              • Conducted in-depth analysis on malware executables using machine
              learning models, identifying patterns that enhanced detection
              accuracy by 22%, leading to more precise threat detection.
            </p>
            <p>
              • Collaborated on the development of AI models, improving predictive
              capabilities for identifying cybersecurity threats and reducing data
              processing time by 8% through algorithm refinement and workflow
              optimization.
            </p>
            <header>
              <p>Full Stack &amp; iOS App Developer Intern : Roam</p>
            </header>
            <p>
              • Engineered RESTful APIs, optimizing data flow and enhancing
              backend communication by reducing latency and ensuring seamless
              integration between front and backend systems.
            </p>
            <p>
              • Designed and implemented a responsive web interface using
              React.js, boosting web app traffic by 25% through enhanced usability
              and cross-platform compatibility.
            </p>
            <p>
              • Developed and launched a high-performance iOS app using Swift,
              which increased user engagement by 38% through UI/UX design and
              optimized code performance.
            </p>
            <header>
              <p>Quantum Machine Learning Researcher : University of Maryland</p>
            </header>
            <p>
              • Engineered quantum circuits that enhanced the accuracy of quantum
              machine learning transformer models by 13%, contributing to advances
              in quantum computing and machine learning integration as part of a
              collaborative research project.
            </p>
            <p>
              • Currently writing a research paper on improving quantum machine
              learning models, providing innovative insights that could lead to
              more efficient algorithms in the field.
            </p>
            <header>
              <p>Co-Founder : WWP Devs</p>
            </header>
            <p>
              • Co-founded a coding education platform, successfully teaching Java
              and Python to over 20 students, and improving their AP Computer
              Science A exam scores by 20% through a customized curriculum and
              focused teaching methods.
            </p>
            <p>
              • Managed the development of the curriculum and class operations,
              which honed leadership skills and fostered a strong learning
              environment that ignited a passion for computer science among
              students.
            </p>
          </section>
          <hr />
          <section>
            <header>
              <h3 className="capitalize hidden-1">Other Experiences</h3>
              <p>Senior Public Speaking Intern : Enspire Academy</p>
            </header>
            <p>
              • Mentored over 70 students in public speaking, leading to improved
              confidence and successful participation in 3 nationwide public
              speaking events.
            </p>
            <p>
              • Organized and led 3 public speaking events, showcasing strong
              event management and leadership abilities that contributed to the
              program’s success.
            </p>
            <header>
              <p>TED Talk speaker</p>
            </header>
            <p>
              • Delivered a TED talk on self-improvement and procrastination to
              100+ audience members sharing actionable insights and strategies
              drawn from research and personal experience.
            </p>
          </section>
        </section>
      </div>
      {/* Footer */}
      <footer>
        <header id="connect-header">
          <h2 className="capitalize">Connect with me</h2>
        </header>
        <h3 id="email">Email : pranavkrish2005@gmail.com</h3>
        <h3>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/pranavkrishnan-dev/"
                className="fa-brands fa-linkedin"
              />
            </li>
            <li>
              <a
                href="mailto:pranavkrish2005@gmail.com"
                className="fa-solid fa-envelope"
              />
            </li>
            <li>
              <a
                href="https://github.com/pranavkrish2005"
                className="fa-brands fa-github"
              />
            </li>
          </ul>
        </h3>
      </footer>
    </div>
  </>
  )
}

export default App
