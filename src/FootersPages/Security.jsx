import React from "react";

const Security = () => {
  return (
    <div className="container mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-[#3087d1] mb-6">Security Policy</h1>

      {/* Section 1: Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Your Security Matters</h2>
        <p className="text-gray-700">
          At Slasa, we prioritize your security by ensuring your data, payments, and transactions
          are protected with industry-leading security standards.
        </p>
      </section>

      {/* Section 2: Data Protection */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Data Protection & Privacy</h2>
        <p className="text-gray-700">
          We use **256-bit SSL encryption** to protect your personal data from unauthorized access.
          Our servers comply with **GDPR, CCPA**, and other global privacy laws.
        </p>
      </section>

      {/* Section 3: Secure Payments */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Secure Payment Methods</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>All transactions are secured via **PCI DSS-compliant** payment gateways.</li>
          <li>We support **3D Secure Authentication** for all online transactions.</li>
          <li>Your card details are **never stored** on our servers.</li>
        </ul>
      </section>

      {/* Section 4: Fraud Prevention */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Fraud Detection & Monitoring</h2>
        <p className="text-gray-700">
          Our AI-powered fraud detection system continuously monitors suspicious activity and
          alerts our security team for immediate action.
        </p>
      </section>

      {/* Section 5: Compliance Standards */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Compliance & Certifications</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Compliant with **GDPR (General Data Protection Regulation)**.</li>
          <li>Regular security audits to ensure **ISO 27001** compliance.</li>
          <li>Adheres to **CCPA (California Consumer Privacy Act)** standards.</li>
        </ul>
      </section>

      {/* Section 6: Security Best Practices */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Security Best Practices</h2>
        <p className="text-gray-700">
          We recommend users enable **two-factor authentication (2FA)** and use **strong passwords**
          to enhance account security.
        </p>
      </section>

      {/* Section 7: FAQ */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h2>
        <div className="bg-gray-100 p-4 rounded-md">
          <details className="mb-3">
            <summary className="cursor-pointer font-medium">Is my payment information safe?</summary>
            <p className="text-gray-700 mt-2">
              Yes, we use encrypted payment gateways and **3D Secure Authentication**.
            </p>
          </details>
          <details className="mb-3">
            <summary className="cursor-pointer font-medium">How do you prevent data breaches?</summary>
            <p className="text-gray-700 mt-2">
              Our security team runs regular **penetration tests** and updates our firewalls.
            </p>
          </details>
          <details className="mb-3">
            <summary className="cursor-pointer font-medium">Can I request my data to be deleted?</summary>
            <p className="text-gray-700 mt-2">
              Yes, under **GDPR & CCPA**, you can request data deletion from your account settings.
            </p>
          </details>
        </div>
      </section>

      {/* Section 8: Contact Us */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Need More Help?</h2>
        <p className="text-gray-700">
          If you have any concerns about security, reach out to our support team at:
          <strong> security@slasa.com</strong>
        </p>
      </section>
    </div>
  );
};

export default Security;
