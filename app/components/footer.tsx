function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FooterItemLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      className="flex gap-2 items-center transition-all"
      rel="noopener noreferrer"
      target="_blank"
      href={href}
    >
      <ArrowIcon />
      <p className="h-7">{text}</p>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <FooterItemLink href="/rss" text="rss" />
        </li>
        <li>
          <FooterItemLink
            href="https://www.linkedin.com/in/andy-chanwy/"
            text="LinkedIn"
          />
        </li>
        <li>
          <FooterItemLink href="https://github.com/andlimey" text="GitHub" />
        </li>
        <li>
          <FooterItemLink
            href="https://vercel.com/templates/next.js/portfolio-starter-kit"
            text="View Original Source"
          />
        </li>
      </ul>
    </footer>
  );
}
