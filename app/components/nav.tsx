import { cn } from "app/utils/tailwind";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";

function NavLink({ path, name }: { path: string; name: string }) {
  return (
    <Link
      key={path}
      href={path}
      className={cn("flex align-middle relative", "transition-all")}
    >
      {name}
    </Link>
  );
}

export function Navbar() {
  return (
    <aside className="mb-16 tracking-tight">
      <nav
        className="flex flex-row gap-4 items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
        id="nav"
      >
        <NavLink path="/" name="Home" />
        <NavLink path="/blog" name="Blog" />
        <ThemeSwitch />
      </nav>
    </aside>
  );
}
