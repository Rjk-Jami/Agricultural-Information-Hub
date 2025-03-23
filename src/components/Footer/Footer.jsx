justimport Link from "next/link"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"
const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">AgriHub</h3>
          <p className="text-green-100">
            Your comprehensive resource for farming guides, crop information, and agricultural expertise.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-green-100 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/farming-guides" className="text-green-100 hover:text-white">
                Farming Guides
              </Link>
            </li>
            <li>
              <Link href="/crop-details" className="text-green-100 hover:text-white">
                Crop Details
              </Link>
            </li>
            <li>
              <Link href="/pest-control" className="text-green-100 hover:text-white">
                Pest Control
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-green-100 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>raihanjamikhan@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-green-100 hover:text-white">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-green-100 hover:text-white">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-green-100 hover:text-white">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
        <p>&copy; {new Date().getFullYear()} Agricultural Information Hub. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
