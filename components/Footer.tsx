import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp;
          Three.js.
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
