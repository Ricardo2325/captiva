import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-12 py-10"
      style={{ borderTop: '1px solid #1e1e2e' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <span className="font-display font-extrabold text-lg" style={{ color: '#e8e8f2' }}>
          Captiva
        </span>

        {/* Legal links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs" style={{ color: '#8888aa' }}>
          <Link href="#" className="hover:text-text-primary transition-colors duration-200">
            Política de privacidad
          </Link>
          <Link href="#" className="hover:text-text-primary transition-colors duration-200">
            Aviso legal
          </Link>
          <Link href="#" className="hover:text-text-primary transition-colors duration-200">
            Cookies
          </Link>
        </div>

        {/* Contact */}
        <a
          href="mailto:hola@captiva.es"
          className="text-xs transition-colors duration-200 hover:text-text-primary"
          style={{ color: '#8888aa' }}
        >
          hola@captiva.es
        </a>

      </div>
    </footer>
  );
}
