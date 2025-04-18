import { Link } from "react-router-dom";



function About() {
  return (
    <div>
      <h1 className="text-4xl font-semibold relative flex justify-center">
        ABOUT US{" "}
      </h1>

      <p className="flex w-1/3 m-6">
        We design clean, modern websites for small businesses that want to stand
        out online—without the hassle. Our goal is to make your business look
        professional, build trust with your audience, and help you attract more
        clients. We keep it simple: no confusing tech talk, no unnecessary
        features—just a smooth process and a site that does what it’s meant to
        do. Whether you’re a coach, builder, or local service provider, we’ll
        build you a site that feels like you and works like it should.
      </p>

      <Link to="/Contact"><button 
      className="border rounded-lg hover:bg-blue-100 p-2 bg-[#26B7FF]">Book Now</button></Link>
    </div>
  );
}

export default About;
