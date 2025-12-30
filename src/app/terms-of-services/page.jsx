import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ColorGradientBackground from "@/components/ColorGradientBackground";
import AnimatedGradientBackground from "@/components/AnimatedGradientBackground";

const TermsOfService = () => {
  return (
    <>
    <Header />
    <ColorGradientBackground />
    <AnimatedGradientBackground />
    <div className="h-30"></div>
    <section className="bg-transparent text-gray-900 py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-sm text-gray-600 mb-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Introduction</h2>
      <p className="mb-4">
        Welcome to <strong>BrandSocia</strong>. By accessing or using our website and
        services, you agree to comply with these Terms of Service. Please read
        them carefully before using our digital marketing and web development
        services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. Services</h2>
      <p className="mb-4">
        BrandSocia provides digital marketing, branding, design, and web
        development solutions. We reserve the right to modify or discontinue any
        service at our discretion without prior notice.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. User Responsibilities</h2>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>Provide accurate information when contacting or contracting us.</li>
        <li>Not engage in any unlawful or harmful activity on our website.</li>
        <li>Respect our intellectual property and refrain from unauthorized use.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Intellectual Property</h2>
      <p className="mb-4">
        All content on this site—including logos, text, graphics, and design—is
        the property of BrandSocia and is protected by copyright laws. You may
        not reproduce or distribute our materials without written permission.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Limitation of Liability</h2>
      <p className="mb-4">
        BrandSocia shall not be held liable for any indirect, incidental, or
        consequential damages arising from the use of our services or website.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Termination</h2>
      <p className="mb-4">
        We reserve the right to terminate access to our services if you violate
        these Terms or engage in activities that may harm our reputation or
        operations.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">7. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by the laws of Pakistan. Any disputes will be
        resolved under the exclusive jurisdiction of the courts of Karachi.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">8. Contact Us</h2>
      <p className="mb-4">
        For inquiries regarding these Terms, please email us at{" "}
        <a href="mailto:contact@brandsocia.com" className="text-blue-600 hover:underline">
          contact@brandsocia.com
        </a>.
      </p>
    </section>
    <Footer />
    </>
  );
};

export default TermsOfService;
