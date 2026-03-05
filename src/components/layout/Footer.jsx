const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-screen-2xl grid grid-cols-3 items-center px-4 py-3 sm:px-6 lg:px-8">
        <img
          src="/logo.png"
          alt="Bags and Shoes"
          className="h-6 w-auto justify-self-start object-contain"
        />

        <p className="text-center text-xs text-gray-400">
          &copy; {year} Chavdar Dimov. All rights reserved.
        </p>

        <nav className="flex flex-col justify-self-end gap-1 text-xs text-gray-500 sm:flex-row sm:gap-4">
          <a href="#" className="transition-colors hover:text-gray-900">
            Terms
          </a>
          <a href="#" className="transition-colors hover:text-gray-900">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-gray-900">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
