function Services() {

    return(
        <div>
<h1 className="text-center text-4xl font-bold">Our Services</h1>

<div className="flex justify-center my-12 space-x-4 p-2 flex-wrap gap-4">

<div className="bg-white px-2 py-2 text-center border rounded-lg aspect-square w-64 flex flex-col justify-center items-center">
    <img 
    src="/web-development.svg"
    alt="web developement"
    className="w-1/2"
    />
<h2 className="font-bold ">Web Development</h2>
<p>Custom build websites with raw code.</p>
</div>

<div className=" bg-white px-2 py-2 text-center border rounded-lg aspect-square w-64 flex flex-col justify-center items-center">
<img 
src="seo.svg"
alt="Seo optimisation"
className="w-1/2"/>
<h2 className="font-bold my-2">SEO Optimisation</h2>
<p>Enhancing your site's visibility to rank higher on search engines.</p>
</div>


<div className="bg-white px-2 py-2 text-center border rounded-lg aspect-square w-64 flex flex-col justify-center items-center">
<img 
src="/responsive.svg"
alt="responsive design"
className="w-1/2"/>
<h2 className="font-bold my-2">Responsive Design</h2>
<p>Mobile-friendly websites that look and work great on all devices.</p>
</div>

<div className="bg-white px-2 py-2 text-center border rounded-lg aspect-square w-64 flex flex-col justify-center items-center">
<img 
src="/writing.svg"
alt="Content writing"
className="w-1/2"/>
<h2 className="font-bold my-2">Content Writing </h2>
<p>We write high-quality, on-brand content for your site.</p>
</div>

<div className="bg-white px-2 py-2 text-center border rounded-lg aspect-square w-64 flex flex-col justify-center items-center">
<img 
src="/maintenance.svg"
alt="Maintenance"
className="w-1/2"/>
<h2 className="font-bold my-2">Monthly Maintenance</h2>
<p>Peace of mind as the developers wirte the contect for your website </p>
</div>
        </div>
        </div>
    )
}

export default Services