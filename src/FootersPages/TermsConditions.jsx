import React from 'react';

const TermsConditions = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#3087d1]">Terms & Conditions</h1>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
        <p>
          Welcome to Slasa! These Terms and Conditions outline the rules and regulations for the use of our website and services. 
          By accessing this website, you agree to comply with and be bound by these terms. If you do not agree with any part of 
          these terms, please refrain from using our website.
        </p>
      </section>

      {/* Definitions */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Definitions</h2>
        <ul className="list-disc ml-5">
          <li><strong>"Company," "We," "Our," or "Us"</strong> refers to Slasa.</li>
          <li><strong>"User," "You," or "Your"</strong> refers to any individual or entity using our services.</li>
          <li><strong>"Service"</strong> refers to the features and functionalities provided by Slasa.</li>
        </ul>
      </section>

      {/* Use of Services */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Use of Services</h2>
        <ul className="list-disc ml-5">
          <li>You agree to provide accurate and complete information when registering an account.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
          <li>Unauthorized use of our website may result in legal action.</li>
        </ul>
      </section>

      {/* Purchases and Payments */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Purchases and Payments</h2>
        <ul className="list-disc ml-5">
          <li>All transactions made through Slasa are subject to our payment policies.</li>
          <li>We accept various payment methods, including credit cards, debit cards, and digital wallets.</li>
          <li>Prices for products and services are subject to change without prior notice.</li>
          <li>Refunds and cancellations will be handled in accordance with our refund policy.</li>
        </ul>
      </section>

      {/* Intellectual Property */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Intellectual Property</h2>
        <ul className="list-disc ml-5">
          <li>All content, logos, graphics, and designs on Slasa are the property of the company and protected by copyright laws.</li>
          <li>Users are prohibited from copying, distributing, or modifying any content without our explicit consent.</li>
        </ul>
      </section>

      {/* User Conduct */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">User Conduct</h2>
        <ul className="list-disc ml-5">
          <li>Users must not engage in unlawful activities while using our services.</li>
          <li>Any form of harassment, abuse, or hate speech will result in account termination.</li>
          <li>Users must not upload malicious software, spam, or unauthorized advertisements.</li>
        </ul>
      </section>

      {/* Privacy Policy */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
        <ul className="list-disc ml-5">
          <li>We collect and store user data as described in our Privacy Policy.</li>
          <li>Personal information will not be shared with third parties without consent, except as required by law.</li>
          <li>Users have the right to access and request deletion of their personal data.</li>
        </ul>
      </section>

      {/* Third-Party Links */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Third-Party Links</h2>
        <ul className="list-disc ml-5">
          <li>Our website may contain links to third-party websites.</li>
          <li>We are not responsible for the content, policies, or practices of these external sites.</li>
        </ul>
      </section>

      {/* Limitation of Liability */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
        <ul className="list-disc ml-5">
          <li>Slasa is not responsible for any indirect, incidental, or consequential damages resulting from the use of our services.</li>
          <li>We do not guarantee uninterrupted or error-free access to our website.</li>
        </ul>
      </section>

      {/* Termination of Service */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Termination of Service</h2>
        <ul className="list-disc ml-5">
          <li>We reserve the right to suspend or terminate user accounts at our discretion.</li>
          <li>Users may terminate their account at any time by contacting customer support.</li>
        </ul>
      </section>

      {/* Amendments */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Amendments</h2>
        <ul className="list-disc ml-5">
          <li>We may update these terms at any time. Changes will be posted on our website.</li>
          <li>Continued use of our services constitutes acceptance of the revised terms.</li>
        </ul>
      </section>

      {/* Governing Law */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Governing Law</h2>
        <ul className="list-disc ml-5">
          <li>These terms shall be governed by and construed in accordance with the laws of [Your Country/State].</li>
          <li>Any disputes shall be resolved in the appropriate courts of [Your Jurisdiction].</li>
        </ul>
      </section>

      {/* Contact Information */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p>If you have any questions about these terms, please contact us at <a href="mailto:support@slasa.com" className="text-blue-600">support@slasa.com</a>.</p>
      </section>
      
    </div>
  );
};

export default TermsConditions;
