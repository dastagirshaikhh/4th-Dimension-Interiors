import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-[#1A0507] text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            <b className='text-2xl'>4</b><span className="relative">
                                <sup>th</sup>
                            </span>&nbsp;Dimension Interior Designers
                        </h3>
                        <p className="text-white/70 mb-4">Your trusted Interior advisors, guiding you to your perfect home.</p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="https://www.instagram.com/azim_idricy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-white/70 hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/properties" className="text-white/70 hover:text-white transition-colors">Properties</Link></li>
                            <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Interior designer</Link></li>
                            <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Interior consultant</Link></li>
                            <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Turnkey projects</Link></li>
                            <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Ms Fabrication structure</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="text-white/70 mb-2">Kharghar Navi Mumbai, Navi Mumbai (New Mumbai), India 410210</p>
                        <p className="text-white/70 mb-2">Phone: +91 123 456 789</p>
                        <p className="text-white/70 mb-2">Email: example@gmail.com</p>
                    </div>
                </div>
                <div className="border-t border-white/10 mt-12 pt-8 text-center">
                    <p className="text-white/70">&copy; 2025 4<sup>th</sup> Dimension Interior Designers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

