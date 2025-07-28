"use client";
import webDesign from "../../../../public/lottieFiles/webdesign.json";
import webDevelop from "../../../../public/lottieFiles/webdevelop.json";
import android from "../../../../public/lottieFiles/android.json";
import ios from "../../../../public/lottieFiles/ios.json";
import maintain from "../../../../public/lottieFiles/maintain.json";
import seo from "../../../../public/lottieFiles/seo.json";
import Lottie from "lottie-react";
import { ServiceFrame } from "../Framer/ServiceFrame";
const Services = () => {
  const data = [
    {
      title: "Website Design",
      content: (
        <div>
          <p className="text-neutral-300 text-xl md:text-2xl font-normal mb-8">
            Crafting visually appealing and user-centric websites that enhance
            user experience. I focus on responsive, modern designs that align
            with your brand identity.
          </p>
          <div className="h-[50vh]">
            <Lottie className="w-full h-full" animationData={webDesign} />
          </div>
        </div>
      ),
    },
    {
      title: "Website Development",
      content: (
        <div>
          <p className="text-neutral-300 text-xl md:text-2xl font-normal mb-8">
            Building high-performance, scalable websites using the latest
            technologies. From single-page applications to complex platforms, I
            ensure functionality, security, and speed.
          </p>
          <div className="h-[50vh]">
            <Lottie className="w-full h-full" animationData={webDevelop} />
          </div>
        </div>
      ),
    },
    {
      title: "App Development",
      content: (
        <div>
          <p className="text-neutral-300 text-xl md:text-2xl font-normal mb-4">
            Offering custom mobile app development for both Android and iOS
            platforms. My apps are built to provide seamless performance,
            excellent UI/UX, and robust functionality.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 text-xl md:text-2xl">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 text-xl md:text-2xl">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 text-xl md:text-2xl">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 text-xl md:text-2xl">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 text-xl md:text-2xl">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="h-[50vh]">
            <Lottie className="w-full h-full" animationData={ios} />
          </div>
        </div>
      ),
    },
    {
      title: "UI/UX Design",
      content: (
        <div>
          <p className="text-neutral-300 text-xl md:text-2xl font-normal mb-4">
            Designing seamless, intuitive user interfaces and crafting user
            experiences that are not only visually compelling but also
            functional. I focus on creating user-centered designs that improve
            usability, accessibility, and overall satisfaction, ensuring your
            product provides a delightful experience at every touchpoint.
          </p>
          <div className="h-[50vh]">
            <Lottie className="w-full h-full" animationData={android} />
          </div>
        </div>
      ),
    },
    {
      title: "Website Maintenance",
      content: (
        <div>
          <p className="text-neutral-300 text-xl md:text-2xl font-normal mb-4">
            I offer ongoing support to keep your website up-to-date, secure, and
            optimized. Whether it’s bug fixing, content updates, or performance
            monitoring, I ensure smooth functioning.
          </p>
          <div className="h-[50vh]">
            <Lottie className="w-full h-full" animationData={maintain} />
          </div>
        </div>
      ),
    },
    {
      title: "SEO Optimization",
      content: (
        <div>
          <p className="text-neutral-300 text-xl md:text-2xl font-normal mb-4">
            Helping your website rank higher in search engines. I implement the
            best SEO practices to improve visibility, drive organic traffic, and
            ensure long-term success.
          </p>
          <div className="h-[50vh]">
            <Lottie className="w-full h-full" animationData={seo} />
          </div>
        </div>
      ),
    },
  ];
  return (
    <section id="services" className="md:py-40 bg-heroBg">
      <div className="container">
        <div className="w-full">
          <ServiceFrame data={data} />
        </div>
      </div>
    </section>
  );
};

export default Services;
