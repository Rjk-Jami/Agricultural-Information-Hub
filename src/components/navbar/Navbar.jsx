"use client"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }
  return (
    <nav className="bg-white shadow-sm border-b border-green-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-green-700">AgriHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link href="/farming-guides" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md">
              Farming Guides
            </Link>
            <Link href="/crop-details" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md">
              Crop Details
            </Link>
            <Link href="/pest-control" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md">
              Pest Control
            </Link>
            <Link href="/contact">
              <div className="btn btn-primary bg-green-600 hover:bg-green-700">Contact</div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <div onClick={toggleMenu} className="btn bg-green-600 hover:bg-green-700 text-gray-700 hover:text-green-600 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              href="/"
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/farming-guides"
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md"
              onClick={toggleMenu}
            >
              Farming Guides
            </Link>
            <Link
              href="/crop-details"
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md"
              onClick={toggleMenu}
            >
              Crop Details
            </Link>
            <Link
              href="/pest-control"
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md"
              onClick={toggleMenu}
            >
              Pest Control
            </Link>
            <Link href="/contact" className="block px-3 py-2" onClick={toggleMenu}>
              <div className="btn  bg-green-600 hover:bg-green-700 w-full">Contact</div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
