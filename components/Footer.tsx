export default function Footer() {
    return (
      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="mx-auto max-w-6xl text-sm text-zinc-600">
          © {new Date().getFullYear()} Rayan Ahmed
        </div>
      </footer>
    );
  }