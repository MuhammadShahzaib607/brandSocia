import React from "react";

const CookiePolicy = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <p className="text-sm text-gray-600 mb-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files placed on your device to store data that
        helps websites function efficiently and provide analytics or
        personalization.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. How We Use Cookies</h2>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>To remember your preferences and settings.</li>
        <li>To analyze website traffic and improve usability.</li>
        <li>To display relevant marketing and retargeting ads.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Types of Cookies We Use</h2>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li><strong>Essential Cookies:</strong> Required for basic website functionality.</li>
        <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our site.</li>
        <li><strong>Marketing Cookies:</strong> Used to deliver targeted advertising.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Managing Cookies</h2>
      <p className="mb-4">
        You can adjust your browser settings to refuse cookies or delete existing
        ones. However, this may affect your experience on our site.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Updates to This Policy</h2>
      <p className="mb-4">
        We may update this Cookie Policy periodically to reflect changes in our
        practices or legal requirements. Check this page regularly for updates.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Contact Us</h2>
      <p className="mb-4">
        For questions regarding our cookie practices, contact us at{" "}
        <a href="mailto:privacy@brandsocia.com" className="text-blue-600 hover:underline">
          privacy@brandsocia.com
        </a>.
      </p>
    </section>
  );
};

export default CookiePolicy;
