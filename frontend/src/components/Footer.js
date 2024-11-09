import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-3">
    <div className="container mx-auto px-4 text-center">
      <p className="text-2xl font-semibold mb-2">Anshu Private Limited</p>
      <p className="text-sm text-gray-400 mb-1">© {new Date().getFullYear()} Anshu Private Limited. All rights reserved.</p>
     
    </div>
  </footer>
);

export default Footer;
