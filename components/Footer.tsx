import { profile } from "@/lib/data";
import { Container } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-line pb-10 pt-8">
      <Container className="flex flex-wrap justify-between gap-3 text-sm text-muted max-sm:justify-center max-sm:text-center">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.
        </p>
        <a href="#top" className="font-medium text-ink-2 transition-colors hover:text-accent">
          Back to top ↑
        </a>
      </Container>
    </footer>
  );
}
