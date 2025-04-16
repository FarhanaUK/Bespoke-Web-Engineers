function Services() {

    return(
        <div>
<h1 className="text-center text-4xl font-bold">Our Services</h1>

<div className="flex justify-center my-12 space-x-4 p-2 ">

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
src="/ecom.svg"
alt="web developement"
className="w-1/2"/>
<h2 className="font-bold my-2">E-Commerce</h2>
<p>Developing secure, user-friendly online stores to boost your sales.</p>
</div>
        </div>
        </div>
    )
}

export default Services