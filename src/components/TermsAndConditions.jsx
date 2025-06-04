//clean up styling and spacing


function TermsAndConditions() {

    
    return (
        <div className="max-w-4xl mx-auto pt-2 px-8 space-y-8">
          <h1 className="font-semibold text-4xl text-center mb-8">Terms & Conditions</h1>
    
          <h2 className="text-2xl font-semibold mb-3">1. Services</h2>
          <p className="text-gray-700">
            We offer the following services:
            <ul className="list-disc ml-6">
              <li>Custom-coded websites built with HTML, CSS, JavaScript, and React</li>
              <li>SEO optimization</li>
              <li>Hosting setup using Firebase</li>
              <li>Domain setup and transfer</li>
              <li>Monthly maintenance (including updates, bug fixes, and security patches)</li>
              <li>Content writing (if needed)</li>
              <li>Responsive design for all devices</li>
            </ul>
          </p>
    
          <h2 className="text-2xl font-semibold mb-3">2. Pricing and Payment</h2>
          <p className="text-gray-700">
            The pricing for our services is based on the scope of work required. A non-refundable deposit of 50% is required to initiate the project. The remaining 50% is due upon the website's launch.
          </p>
          <p className="text-gray-700">
            Payment for monthly maintenance will be invoiced monthly and must be paid on or before the 1st day of each month.
          </p>
          <p className="text-gray-700">
            Payments can be made via Stripe using a bank card. Other methods may be available upon request.
          </p>
          <p className="text-gray-700">
            <strong>Late Payments:</strong> If the final 50% of the payment is not received on time, the website will be taken down, and a late fee of 5% of the final amount per week will be added to the outstanding balance. If payment is not received after 14 days, the agreement may be terminated.
          </p>
    
          <h2 className="text-2xl font-semibold mb-3">3. Ownership</h2>
          <p className="text-gray-700">
            Upon full payment, the client will have full ownership of the website, including the code, design, domain, and hosting setup. If third-party assets (e.g., stock images or third-party libraries) are used, the ownership will remain with us unless otherwise agreed. If the client wishes to obtain the rights to those assets, additional licensing fees may apply.
          </p>
    
          <h2 className="text-2xl font-semibold mb-3">4. Termination</h2>
          <p className="text-gray-700">
            Either party can terminate the agreement with 30 days written notice.
          </p>
          <p className="text-gray-700">
            If the client terminates the agreement before the completion of the project, the client will be liable for payment for the work completed up to that point, including any expenses incurred.
          </p>
          <p className="text-gray-700">
            If we terminate the agreement, we will provide the client with any deliverables completed up until the termination date, and the client will not be liable for further payments beyond that point.
          </p>
    
          <h2 className="text-2xl font-semibold mb-3">5. Monthly Maintenance</h2>
          <p className="text-gray-700">
            Monthly maintenance is available for £[amount] per month. It includes regular updates to the website (content updates, security patches, minor bug fixes), but major redesigns or additions of new features are excluded.
          </p>
          <p className="text-gray-700">
            The maintenance agreement will automatically renew each month unless canceled by either party with 30 days written notice.
          </p>
          <p className="text-gray-700">
            Payments for maintenance must be made by the 1st of each month. Failure to pay for monthly maintenance may result in suspension of maintenance services.
          </p>
    
          <h2 className="text-2xl font-semibold mb-3">6. SEO and Website Performance</h2>
          <p className="text-gray-700">
            We do not guarantee specific SEO results or website performance, such as improvements in search engine rankings or load times. Any SEO optimization provided is done to industry standards, but results may vary depending on numerous factors.
          </p>
    
          <h2 className="text-2xl font-semibold mb-3">7. Liability</h2>
          <p className="text-gray-700">
            We are not liable for any damages or losses resulting from the use or inability to use the website, including but not limited to lost profits or any form of indirect, special, or consequential damages.
          </p>
          <p className="text-gray-700">
            We do not provide a performance guarantee for search engine rankings, site traffic, or server uptime.
          </p>
    
          <h2 className="text-2xl font-semibold mb-3">8. Support and Maintenance</h2>
          <p className="text-gray-700">
            After the website is live, the client may request support and maintenance as part of the ongoing monthly maintenance agreement. This includes bug fixes, updates, and minor tweaks. For any major issues outside the scope of maintenance, we will provide a separate estimate and agreement.
          </p>
    
          <h2 className="text-2xl font-semibold mb-3">9. Subcontracting</h2>
          <p className="text-gray-700">
            We may engage subcontractors or third-party service providers to assist with certain aspects of the project, such as specialized development tasks. Any such involvement will not affect the quality or integrity of the work delivered to the client.
          </p>
    
          <h2 className="text-2xl font-semibold mb-3">10. Governing Law</h2>
          <p className="mb-12 text-gray-700">
            This agreement shall be governed by and construed in accordance with the laws of the United Kingdom.
          </p>
        </div>
      );
    };   

export default TermsAndConditions