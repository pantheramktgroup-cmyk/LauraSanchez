const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/laurasanchezcoach/",
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9Z" />
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/Laura-Tu-Coach/61574003591803/",
    icon: (
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/laura.tucoach/",
    icon: (
      <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
    ),
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span className="site-footer__wordmark">LAURA SÁNCHEZ COACH</span>

        <div className="site-footer__socials" aria-label="Redes sociales">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              className="site-footer__social"
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              title={social.name}
            >
              <svg
                className="site-footer__social-icon"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                {social.icon}
              </svg>
            </a>
          ))}
        </div>

       <p className="site-footer__copy">
  <span>© 2026 Laura Sanchez.</span>
  <span>Todos los derechos reservados.</span>
</p>
      </div>
    </footer>
  );
}