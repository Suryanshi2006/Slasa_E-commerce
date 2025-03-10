import React from "react";

const Cancellation = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#3087d1] mb-4">Cancellation & Returns Policy</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Order Cancellation</h2>
        <p className="mb-2">We process orders quickly, but we allow cancellations under the following conditions:</p>
        
        <h3 className="text-xl font-semibold mt-3">1.1 Before Shipping</h3>
        <ul className="list-disc pl-5 mb-3">
          <li>Orders can be canceled within <strong>12 hours</strong> of placing them.</li>
          <li>To cancel, email us at <strong>support@slasa.com</strong> with your order details.</li>
          <li>If the order is unprocessed, we will issue a <strong>full refund</strong>.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-3">1.2 After Shipping</h3>
        <ul className="list-disc pl-5">
          <li>Once shipped, orders <strong>cannot</strong> be canceled.</li>
          <li>You may return the product after delivery (see Returns section).</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Returns & Refunds</h2>
        <p className="mb-2">We accept returns under the following conditions:</p>
        
        <h3 className="text-xl font-semibold mt-3">2.1 Eligibility</h3>
        <ul className="list-disc pl-5 mb-3">
          <li>Items must be returned within <strong>7 days</strong> of delivery.</li>
          <li>Products must be <strong>unused, in original packaging, and with all tags attached</strong>.</li>
          <li>Items such as <strong>perishables, personal care, and customized products</strong> are non-returnable.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-3">2.2 Return Process</h3>
        <ul className="list-disc pl-5 mb-3">
          <li>Email us at <strong>returns@slasa.com</strong> with order details and reason.</li>
          <li>We will review your request and provide shipping instructions.</li>
          <li>Upon receipt and inspection, we will issue a <strong>refund or replacement</strong> within <strong>5-7 business days</strong>.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-3">2.3 Refund Policy</h3>
        <ul className="list-disc pl-5">
          <li>Refunds will be credited to the original payment method.</li>
          <li><strong>Shipping fees are non-refundable</strong> unless due to a defect or wrong item received.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Defective or Wrong Items</h2>
        <ul className="list-disc pl-5">
          <li>Report issues within <strong>48 hours</strong> of delivery with photos.</li>
          <li>We will arrange a <strong>free replacement</strong> or issue a full refund.</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-2">4. Contact Us</h2>
        <p>For any inquiries, reach out to us:</p>
        <ul className="list-disc pl-5">
          <li><strong>Email:</strong> support@slasa.com</li>
          <li><strong>Phone:</strong> +971 55 886 63 26</li>
        </ul>
      </section>
    </div>
  );
};

export default Cancellation;