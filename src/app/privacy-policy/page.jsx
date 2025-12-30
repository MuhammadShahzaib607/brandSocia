import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ColorGradientBackground from "@/components/ColorGradientBackground";
import AnimatedGradientBackground from "@/components/AnimatedGradientBackground";

const PrivacyPolicy = () => {
  return (
    <>
    <Header />
    <ColorGradientBackground />
    <AnimatedGradientBackground />
    <div className="h-30"></div>
    <section className="bg-transparent text-gray-900 py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Introduction</h2>
      <p className="mb-4">
        Welcome to <strong>BrandSocia</strong>. We specialize in web development,
        digital marketing, and creative design solutions. This Privacy Policy
        explains how we collect, use, and safeguard your personal information
        when you visit our website, use our services, or interact with our
        digital products.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>Personal details like name, email address, and phone number.</li>
        <li>Project or business information shared through our contact forms.</li>
        <li>Technical information such as IP address, browser type, and usage data.</li>
        <li>Cookies and analytics data for performance and marketing optimization.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>To provide web and marketing solutions tailored to your needs.</li>
        <li>To communicate project updates, proposals, and support information.</li>
        <li>To analyze website performance and improve user experience.</li>
        <li>To send promotional offers or newsletters (you can unsubscribe anytime).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Data Sharing & Disclosure</h2>
      <p className="mb-4">
        We do not sell or rent your personal data. We may share limited
        information with trusted third-party vendors (such as hosting or
        analytics providers) who assist in delivering our services. All partners
        are required to maintain strict confidentiality and comply with
        applicable data protection laws.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Cookies & Tracking</h2>
      <p className="mb-4">
        BrandSocia uses cookies to enhance your browsing experience, remember
        preferences, and analyze site performance. You can modify cookie
        settings through your browser or opt out of analytics tracking.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Data Security</h2>
      <p className="mb-4">
        We employ industry-standard security measures including encryption,
        firewalls, and access control to protect your information. However, no
        online system is completely secure, and we cannot guarantee absolute
        protection.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">7. Your Rights</h2>
      <p className="mb-4">
        You may request access, correction, deletion, or restriction of your
        data by contacting us. We respect your rights under applicable data
        protection laws (such as GDPR or other local regulations).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">8. Children’s Privacy</h2>
      <p className="mb-4">
        Our services are designed for business use and are not intended for
        individuals under 13 years of age. We do not knowingly collect personal
        data from children.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">9. Updates to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy periodically. Any significant changes
        will be communicated via our website or by email.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">10. Contact Us</h2>
      <p className="mb-4">
        For questions or concerns regarding this Privacy Policy, please contact
        us at:
      </p>
      <address className="not-italic mb-8">
        BrandSocia Privacy Team<br />
        Office #24, 2nd Floor, ICMAP Tower, Block 6, Gulshan-e-Iqbal,<br />
        Karachi, Pakistan<br />
        Email:{" "}
        <a href="mailto:privacy@brandsocia.com" className="text-blue-600 hover:underline">
          privacy@brandsocia.com
        </a>
      </address>
    </section>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;
