import React from 'react';

const Privacy = () => {
  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-4 text-[#3087d1]'>Privacy Policy</h1>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>1. Introduction</h2>
        <p>
          Welcome to Slasa! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your personal information when you visit our website or use our services.
        </p>
        <p>
          By accessing or using Slasa, you agree to the terms outlined in this Privacy Policy. If you do not agree, please refrain
          from using our services.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>2. Information We Collect</h2>
        <h3 className='text-xl font-semibold mt-4'>2.1 Personal Information</h3>
        <ul className='list-disc pl-6'>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Shipping and billing address</li>
          <li>Payment details (processed securely via third-party payment gateways)</li>
        </ul>

        <h3 className='text-xl font-semibold mt-4'>2.2 Non-Personal Information</h3>
        <ul className='list-disc pl-6'>
          <li>Browser type</li>
          <li>Device information</li>
          <li>IP address</li>
          <li>Usage data (e.g., pages visited, time spent on the website)</li>
        </ul>

        <h3 className='text-xl font-semibold mt-4'>2.3 Cookies and Tracking Technologies</h3>
        <p>
          We use cookies, web beacons, and similar technologies to enhance user experience, analyze traffic, and personalize
          content. You can manage cookie settings in your browser.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>3. How We Use Your Information</h2>
        <ul className='list-disc pl-6'>
          <li>Processing and managing orders</li>
          <li>Providing customer support</li>
          <li>Improving website functionality and user experience</li>
          <li>Sending promotional emails (only if you opt-in)</li>
          <li>Ensuring security and preventing fraud</li>
          <li>Complying with legal obligations</li>
        </ul>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>4. How We Share Your Information</h2>
        <ul className='list-disc pl-6'>
          <li>Service Providers – Third-party vendors (e.g., payment processors, delivery services) to fulfill orders.</li>
          <li>Legal Authorities – If required by law, or to protect our rights and security.</li>
          <li>Business Transfers – If Slasa undergoes a merger, acquisition, or asset sale.</li>
        </ul>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>5. Data Security</h2>
        <ul className='list-disc pl-6'>
          <li>🔒 Encryption of sensitive data</li>
          <li>🔒 Secure payment processing via trusted third-party providers</li>
          <li>🔒 Limited access to personal data within our team</li>
        </ul>
        <p>
          However, no system is 100% secure, and we cannot guarantee absolute protection.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>6. Your Rights</h2>
        <ul className='list-disc pl-6'>
          <li>✔ Access & Review – Request a copy of your personal data.</li>
          <li>✔ Correction – Update inaccurate or incomplete information.</li>
          <li>✔ Deletion – Request deletion of your personal data (subject to legal obligations).</li>
          <li>✔ Opt-Out – Unsubscribe from promotional emails at any time.</li>
        </ul>
        <p>To exercise your rights, contact us at <strong><a href="/">support@slasa.com</a></strong>.</p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>7. Third-Party Links</h2>
        <p>Slasa may contain links to third-party websites. We are not responsible for their content, privacy policies, or practices.</p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>8. Changes to This Privacy Policy</h2>
        <p>
          We may update this policy periodically. Changes will be posted on this page, and your continued use of Slasa means you
          accept the revised terms.
        </p>
        <p><strong>Last updated:</strong> [Date]</p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>9. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, reach out to us at:</p>
        <ul className='list-disc pl-6'>
          <li>📧 <strong>Email:</strong> support@slasa.com</li>
          <li>🌐 <strong>Website:</strong> <a href="https://slasa-e-commerce.vercel.app/">https://slasa-e-commerce.vercel.app/</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Privacy;
