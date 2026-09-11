import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logo} alt="DevStack" className="h-9" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="mt-5 flex gap-5 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-pink-600">
                GitHub
              </a>
              <a href="#" className="hover:text-pink-600">
                Twitter
              </a>
              <a href="#" className="hover:text-pink-600">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Product
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-pink-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-pink-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Legal
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-pink-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 text-sm text-gray-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-pink-600">
              Privacy
            </a>
            <a href="#" className="hover:text-pink-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;