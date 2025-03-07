import React from "react";
import Footer from "../components/Footer"

const Shipping = () => {
  const deliveryCharges = [
    {
      type: "Same Day Delivery (Available on select products to chosen locations in Dubai, Sharjah, and Ajman when you order before 12:00 PM)",
      details: [
        { orderValue: "Any", shippingCharge: "AED 18", codCharge: "AED 10" },
      ],
    },
    {
      type: "Standard Delivery",
      details: [
        { orderValue: "Less than AED 250", shippingCharge: "AED 18", codCharge: "AED 10" },
        { orderValue: "More than AED 250", shippingCharge: "Free", codCharge: "AED 10" },
      ],
    },
    {
      type: "Scheduled Delivery (Applicable for all areas except areas mentioned below)",
      details: [
        { orderValue: "Less than AED 999", shippingCharge: "AED 100", codCharge: "AED 10" },
        { orderValue: "More than AED 999", shippingCharge: "Free", codCharge: "AED 10" },
      ],
    },
    {
      type: "Western Region",
      details: [
        { orderValue: "Less than AED 5,000", shippingCharge: "AED 300", codCharge: "AED 10" },
        { orderValue: "More than AED 5,000", shippingCharge: "Free", codCharge: "AED 10" },
      ],
    },
    {
      type: "Hatta",
      details: [
        { orderValue: "Less than AED 5,000", shippingCharge: "AED 300", codCharge: "AED 10" },
        { orderValue: "More than AED 5,000", shippingCharge: "Free", codCharge: "AED 10" },
      ],
    },
    {
      type: "Dalma Island",
      details: [
        { orderValue: "Less than AED 20,000", shippingCharge: "AED 2000", codCharge: "AED 10" },
        { orderValue: "More than AED 20,000", shippingCharge: "Free", codCharge: "AED 10" },
      ],
    },
    {
      type: "Express Delivery (Furniture)",
      details: [
        { orderValue: "Any", shippingCharge: "AED 250", codCharge: "AED 10" },
      ],
    },
  ];

  return (
    <>

    <div className="container mx-auto p-6">
     <div className="mb-8 p-4">
     <h1 className="text-[#3087d1] py-2">Shipping</h1>
     <p className="text-gray-500">Get information on delivery schedules and shipping charges.</p>
     </div>
<div className="mb-4">
<h2 className="text-2xl font-semibold text-[#3087d1] ">Shipping & Delivery Charges</h2>
<p className="text-gray-500 pb-2">Your delivery charges will depend on the products you order. These charges will be displayed during the checkout process.</p>
</div>
      <h4>Here’s how your shipping charges will work:</h4>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Shipping Type</th>
              <th className="border p-2">Order Value</th>
              <th className="border p-2">Shipping Charge</th>
              <th className="border p-2">Cash on Delivery Charge</th>
            </tr>
          </thead>
          <tbody>
            {deliveryCharges.map((item, index) => (
              <React.Fragment key={index}>
                {item.details.map((detail, idx) => (
                  <tr key={idx} className="border">
                    {idx === 0 && (
                      <td className="border p-2" rowSpan={item.details.length}>
                        {item.type}
                      </td>
                    )}
                    <td className="border p-2">{detail.orderValue}</td>
                    <td className="border p-2">{detail.shippingCharge}</td>
                    <td className="border p-2">{detail.codCharge}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-gray-500 mt-8 " >
      <p  className="pb-4">If you’ve ordered furniture from Home Centre, you’ll be able to schedule a delivery date and time. While we try our best to deliver your furniture in the time slot chosen by you, please note that under exceptional circumstances your delivery slot time may vary due to factors beyond our control.</p>
      <p className="pb-4">Your other orders will be delivered in 2-3 business days.</p>
      <p className="pb-4">Delivery will take a little longer if it is to one of these areas. Unfortunately, we do not deliver to free zones.</p>
      <p className="pb-4">Home Centre has the right to cancel an order if a customer doesn’t schedule their delivery within 50 days of placing their order.</p>
    </div>
    <div className="mb-8">
      <h2 className="text-2xl">Popular Questions</h2>
      <p className="text-gray-500">Get answers to our most frequently asked questions.</p>
    </div>
   <div className="ml-10">
   <div className="mb-4">
      <h2>I placed an order today. When can I expect my shipment?</h2>
      <p className="text-gray-500">Your delivery schedule will depend on the product and the time that you placed your order. Go to the Orders section under My Account or click on the order number in your Order Confirmation email to check on the status of your delivery.</p>
    </div>
    <div  className="mb-4">
      <h2>What if I miss a delivery?</h2>
      <p className="text-gray-500">If you are not at home, our delivery partner will call you and request you to reschedule your delivery. Simply call our Customer Support team on 800-MYHOME (800-694693), and we’ll schedule another delivery date and time that suits you better.</p>
    </div>
    <div  className="mb-4"> 
      <h2>WI’ve already paid AED 18, so why am I being charged an additional AED 10?</h2>
      <p className="text-gray-500">These two amounts are for two separate charges. Our standard shipping charge is AED 18, while our Cash on Delivery charge is AED 10. If you’re paying by cash, you’ll have to pay an extra AED 10 over and above our shipping charge. Of course, you can always avoid the Cash on Delivery charge by paying with your Credit or Debit Card.</p>
    </div>
    <div  className="mb-4">
      <h2>How do I schedule my delivery?</h2>
      <p className="text-gray-500">If you order Home Centre furniture, you’ll be able to schedule your delivery date and time in 4 simple steps:</p>
      <ul>
        <li>Add the product to your basket and proceed to checkout.</li>
        <li>Enter your shipping address. You have the option to pin your location on Google Maps to help us find your address faster.</li>
        <li>Select your delivery date. Available dates will be highlighted in green. Alternatively, click on the default Express delivery date, highlighted in red on the calendar.</li>
        <li>Select a convenient time to receive your order.</li>
      </ul>
    </div>
    <div  className="mb-4">
      <h2>Can I pick up my order from your warehouse?</h2>
      <p className="text-gray-500">No, but you can pick up your order from our delivery partner’s office if you wish. Simply ask them to hold your order at their office when they contact you before delivery.

      </p>
    </div>
    <div>
      <h2>Do you deliver to free zones?</h2>
      <p className="text-gray-500">
      We’re sorry, we do not deliver to free zones at the moment.
      </p>
    </div>
   </div>
    </div>
    <Footer/>

    </>
  );
};

export default Shipping;
