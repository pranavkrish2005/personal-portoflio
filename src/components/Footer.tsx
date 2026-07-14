export default function Footer() {
  return (
    <footer id="connect">
      <h2 className="section-heading reveal">Connect with me</h2>
      <p className="connect-email" data-cursor="highlight">
        lorem.ipsum@example.com
      </p>
      <ul className="social-icons">
        <li>
          <a
            href="#"
            aria-label="LinkedIn"
            className="fa-brands fa-linkedin-in"
            data-cursor="highlight"
          />
        </li>
        <li>
          <a
            href="#"
            aria-label="Email"
            className="fa-solid fa-envelope"
            data-cursor="highlight"
          />
        </li>
        <li>
          <a
            href="#"
            aria-label="GitHub"
            className="fa-brands fa-github"
            data-cursor="highlight"
          />
        </li>
      </ul>
    </footer>
  )
}
