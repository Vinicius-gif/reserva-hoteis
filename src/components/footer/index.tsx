import Link from 'next/link';
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8 md:px-8">
      <div className="container mx-auto flex justify-around items-center">
        <div className="w-auto md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Links</h2>
          <ul>
            <li className="mb-2">
              <Link href="/">Página Inicial</Link>
            </li>
            <li className="mb-2">
              <a href="/sobre">Sobre Nós</a>
            </li>
            <li className="mb-2">
              <a href="/contato">Contato</a>
            </li>
          </ul>
        </div>
        <div className="w-auto md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Redes Sociais</h2>
          <ul className="flex gap-4">
            <li>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
