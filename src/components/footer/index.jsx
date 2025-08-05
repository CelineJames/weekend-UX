import logo from '@/assets/logo.png';
import linkedIn from '@/assets/linkedIn.png';
import twitter from '@/assets/twitter.png';
import facebook from '@/assets/facebook.png';
import dribble from '@/assets/dribble.png';
import github from '@/assets/github.png';

export default function Footer() {
  return (
    <footer className="bg-navyblue text-light px-6 md:px-20 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
        {/* Logo & Description */}
        <div className="col-span-2">
          <img src={logo} alt="Ed-Circle Logo" className="mb-4" />
          <p className="text-sm leading-relaxed">
            Top learning experiences that create more talent in the world.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h5 className="text-sm text-footergray mb-3 font-semibold">Product</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="/product/overview" className="hover:underline">Overview</a></li>
            <li><a href="/product/features" className="hover:underline">Features</a></li>
            <li><a href="/product/solutions" className="hover:underline">Solutions</a></li>
            <li><a href="/product/tutorials" className="hover:underline">Tutorials</a></li>
            <li><a href="/pricing" className="hover:underline">Pricing</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h5 className="text-sm text-footergray mb-3 font-semibold">Company</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/press" className="hover:underline">Press</a></li>
            <li><a href="/news" className="hover:underline">News</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h5 className="text-sm text-footergray mb-3 font-semibold">Socials</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a></li>
            <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Dribbble</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h5 className="text-sm text-footergray mb-3 font-semibold">Legal</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="/terms" className="hover:underline">Terms</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy</a></li>
            <li><a href="/cookies" className="hover:underline">Cookies</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-6 text-footergray text-sm">
        <p>© {new Date().getFullYear()} Ed-Circle. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter icon" className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedIn} alt="LinkedIn icon" className="w-5 h-5" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook icon" className="w-5 h-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub icon" className="w-5 h-5" />
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
            <img src={dribble} alt="Dribbble icon" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
