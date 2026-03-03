const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm font-semibold tracking-tight text-gray-900">
            ECOM
          </p>

          <nav className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Contact Us
            </a>
          </nav>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          &copy; {year} Chavdar Dimov. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
