import { useLocation } from "react-router-dom";


function Services() {
let location = useLocation()

const isFullPage = location.pathname === "/Services"

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold mb-8">Our Services</h1>
 {isFullPage? (
 <div>
  <div className="pt-2 px-8 space-y-8 max-w-4xl mx-auto text-gray-800">
  <section className="space-y-6">
    <h2 className="text-2xl font-semibold mb-3">Web Development</h2>
    <p className="text-gray-700">
      We specialize in creating fully custom websites using clean, efficient, and performant code. 
      Whether you're looking for a single landing page or a complex multi-page site, we deliver 
      responsive and high-performance websites tailored to your business goals. We work closely with 
      you to ensure the website represents your brand perfectly and is built to last with scalable 
      solutions for future growth.
    </p>
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li>Custom-built websites tailored to your needs</li>
      <li>Fast, responsive, and mobile-friendly designs</li>
      <li>SEO-optimized code for better search engine ranking</li>
      <li>Scalable architecture for future enhancements</li>
    </ul>
  </section>

  <section className="space-y-6">
    <h2 className="text-2xl font-semibold mb-3">SEO Optimisation</h2>
    <p className="text-gray-700">
      Boost your website’s visibility with our one-time SEO setup included in your website build. 
      We focus on essential on-page SEO to help your site rank higher on search engines like Google
       by implementing best practices during development. Our goal is to give your website a strong 
       SEO foundation so you can attract more visitors right from launch.
    </p>
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li> Google Analytics setup</li>
      <li>Google Search Console setup</li>
      <li>Optimization of on-page elements (titles, meta descriptions, headers, etc.)</li>
      <li> Mobile optimization for better performance</li>
      <li>Fast-loading images and lazy loading for speed</li>
    </ul>
    <p>Please note: Ongoing SEO monitoring and performance adjustments are not included. We’ll set everything up and hand over access so you’re ready to grow or bring in a specialist whenever you want.

</p>
  </section>

  <section className="space-y-6">
    <h2 className="text-2xl font-semibold mb-3">Responsive Design</h2>
    <p className="text-gray-700">
      In today’s mobile-first world, having a responsive website is essential. We ensure that your 
      website adapts seamlessly across all devices—from desktops to tablets and smartphones. Our mobile-first 
      approach guarantees a flawless user experience, with fast loading times and touch-friendly navigation, 
      so your customers have the best experience no matter the device.
    </p>
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li>Mobile-first design ensuring a perfect fit for all screen sizes</li>
      <li>Optimized performance for faster load times</li>
      <li>Easy-to-use, touch-friendly interfaces</li>
      <li>Tested on all major devices and browsers</li>
    </ul>
  </section>

  <section className="space-y-6">
    <h2 className="text-2xl font-semibold mb-3">Content Writing</h2>
    <p className="text-gray-700">
      Content is the heart of any website. We offer professional content writing services to ensure that 
      your site communicates your brand message clearly and effectively. Whether it's web copy or product 
      descriptions, we create engaging content that speaks directly to your target audience, enhances your brand 
      image, and improves user engagement.
    </p>
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li>High-quality, SEO-optimized content</li>
      <li>Engaging copywriting for clear communication</li>
      <li>Tailored to your brand's voice and message</li>
      <li>Content that enhances user engagement and conversion</li>
    </ul>
  </section>

  <section className="space-y-6">
    <h2 className="text-2xl font-semibold mb-3">Monthly Maintenance</h2>
    <p className="text-gray-700">
      Keep your website running smoothly with our monthly maintenance packages. We offer ongoing support to 
      ensure that your site stays up-to-date, secure, and error-free. From software updates to content revisions 
      and troubleshooting, we handle the technical side so you can focus on your business. Regular maintenance 
      also helps improve site performance and security, reducing downtime and ensuring a positive user experience.
    </p>
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li>Regular software updates and security patches</li>
      <li>Content updates to keep your site fresh and relevant</li>
      <li>Performance optimization and troubleshooting</li>
      <li>Backup and security monitoring</li>
    </ul>
  </section>

  <section className="space-y-6">
    <h2 className="text-2xl font-semibold mb-3">Hosting & Domain Setup</h2>
    <p className="text-gray-700">
      Setting up a domain and hosting can be confusing, but we make it easy for you. From selecting 
      and registering your domain name to setting up secure and reliable hosting, we take care of 
      all the technical details. Whether you're launching a new website or transferring an existing one, 
      we ensure that your site is ready to go live with minimal effort on your part.
    </p>
    <ul className="list-disc pl-5 space-y-2 mb-12 text-gray-700">
      <li>Domain registration and configuration</li>
      <li>Secure and reliable hosting setup</li>
      <li>DNS management and email configuration</li>
      <li>Ongoing monitoring and support for uptime</li>
    </ul>
  </section>
</div>

  </div>

 ):(
      <div className="flex justify-center my-12 space-x-4 p-2 flex-wrap gap-4">
        <div className="bg-white px-2 py-2 text-center border rounded-lg aspect-square w-64 flex flex-col justify-center items-center">
          <img
            src="/web-development.svg"
            alt="web developement"
            className="w-1/2"
          />
          <h2 className="font-bold ">Web Development</h2>
          <p className="h-20">Custom build websites with raw code.</p>
        </div>

        <div className=" bg-white px-2 py-2 text-center border rounded-lg aspect-square w-64 flex flex-col justify-center items-center">
          <img src="seo.svg" alt="Seo optimisation" className="w-1/2" />
          <h2 className="font-bold my-2">SEO Optimisation</h2>
          <p className="h-20">
            Enhancing your site's visibility to rank higher on search engines.
          </p>
        </div>

        <div className="bg-white px-2 py-2 text-center border rounded-lg aspect-square w-64 flex flex-col justify-center items-center">
          <img
            src="/responsive.svg"
            alt="responsive design"
            className="w-1/2"
          />
          <h2 className="font-bold my-2">Responsive Design</h2>
          <p className="h-20">
            Mobile-friendly websites that look and work great on all devices.
          </p>
        </div>

        <div className="bg-white px-2 py-2 text-center border rounded-lg aspect-square w-64 flex flex-col justify-center items-center">
          <img src="/writing.svg" alt="Content writing" className="w-1/2" />
          <h2 className="font-bold my-2">Content Writing </h2>
          <p className="h-20">We write high-quality, on-brand content for your site.</p>
        </div>

        <div className="bg-white px-2 py-2 text-center border rounded-lg aspect-square w-64 flex flex-col justify-center items-center">
          <img src="/maintenance.svg" alt="Maintenance" className="w-1/2" />
          <h2 className="font-bold my-2">Monthly Maintenance</h2>
          <p className="h-20">
            Peace of mind as the developers wirte the contect for your website{" "}
          </p>
        </div>
        <div className=" bg-white px-2 py-2 text-center border rounded-lg aspect-square w-64 flex flex-col justify-center items-center">
          <img src="domain.svg" alt="hosting and domain" className="w-1/2" />
          <h2 className="font-bold my-2">Hosting Domain Setup</h2>
          <p>
            Everything you need to claim your space on the internet—set up and
            ready to go.
          </p>
        </div>
      </div>
 )}
    </div>
  );
}

export default Services;
