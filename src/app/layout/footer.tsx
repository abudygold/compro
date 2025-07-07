import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { Mail, Phone } from '@mui/icons-material';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-[#0F171D] text-white py-10 px-5 lg:px-20">
      <div className="grid grid-cols-1 gap-8 pb-10 border-b border-gray-700 md:grid-cols-3 lg:grid-cols-5">
        {/* Logo and Description */}
        <div className="col-span-2">
          <Image
            src="/images/company-logo-white.svg"
            alt="Company Logo"
            width={196}
            height={62}
          />
          <Typography
            className="text-sm text-white md:lg:py-10"
            sx={{
              fontFamily: "'Gabarito', sans-serif",
            }}
          >
            Connecta Empowers Businesses
            <br />
            With A Cutting-Edge CPaaS
            <br />
            Platform
          </Typography>
          <div className="mt-6 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone fontSize="small" />
              <span>+6221 50322031</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail fontSize="small" />
              <a href="mailto:info@connecta.id" className="underline">
                info@connecta.id
              </a>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="space-y-2 text-sm">
          <Typography
            variant="subtitle2"
            className="font-bold! text-white uppercase mb-3!"
          >
            Menu
          </Typography>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-[#99A3A9]">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#99A3A9]">
                Product
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#99A3A9]">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#99A3A9]">
                Privacy note
              </Link>
            </li>
          </ul>
        </div>

        {/* Home */}
        <div className="col-span-1 space-y-2 text-sm lg:col-span-1">
          <Typography
            variant="subtitle2"
            className="font-bold! text-white uppercase mb-3!"
          >
            Home
          </Typography>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-[#99A3A9]">
                First CTA
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#99A3A9]">
                What We Offer
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#99A3A9]">
                Best Feature We Have
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#99A3A9]">
                Who Are We
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#99A3A9]">
                Number
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#99A3A9]">
                Let’s See Our Offer
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#99A3A9]">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#99A3A9]">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="flex flex-col items-center justify-between gap-2 mt-6 text-xs text-[#747D82] lg:flex-row">
        <div className="space-x-4">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms</Link>
        </div>
        <div>Copyright © 2025 Connecta. All rights reserved.</div>
      </div>
    </footer>
  );
};
