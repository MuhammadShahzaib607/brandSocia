import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' , 
    children: [
      { href: '/services/web-development', label: 'Web Development' },
      { href: '/services/seo', label: 'SEO' },
      { href: '/services/digital-marketing', label: 'Digital Marketing' },
      { href: '/services/social-media-marketing', label: 'Social Media Marketing' },
      { href: '/services/graphic-designing', label: 'Graphic Designing' },
      { href: '/services/content-strategy', label: 'Content Strategy' },
      { href: '/services/ecomerce-solutions', label: 'Ecommerce Solutions' }
    ]
  },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export const SERVICES = [
  { href: '/services/web-development', label: 'Web Development' },
  { href: '/services/seo', label: 'SEO' },
  { href: '/services/digital-marketing', label: 'Digital Marketing' },
  { href: '/services/social-media-marketing', label: 'Social Media Marketing' },
  { href: '/services/graphic-designing', label: 'Graphic Designing' },
  { href: '/services/ecomerce-solutions', label: 'Ecommerce Solutions' }
]

export const SOCIAL_LINKS = [
  {
    name: "Twitter",
    href: "#",
    icon: <FaTwitter className="text-2xl" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/brand-socia/",
    icon: <FaLinkedin className="text-2xl" />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61577997013762",
    icon: <FaFacebook className="text-2xl" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/brandsocia/",
    icon: <FaInstagram className="text-2xl" />,
  },
];

export const COMPANY_INFO = {
  name: 'BrandSocia',
  logo: '/WhatsApp_Image_2025-07-01_at_17.12.43_38099a7e-removebg-preview.png',
  email: 'contact@brandsocia.com',
  phone: '+92 328 3389247',
  address: 'Office # 24, 2nd Floor, ICMAP Tower, ICMAP Head Office, ST-18/C, Block 6, Gulshan-e-Iqbal, Karachi 75300'
}
