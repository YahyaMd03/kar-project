'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const images = [
  "/landing.png",
  "/landing-image-1.jpg",
  "/OIP.jpeg",
  "/landing-image-2.jpg",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center h-screen w-screen overflow-x-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={images[currentImage]}
          alt="KAR Consultants"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="absolute left-0 top-20 ml-4 sm:ml-10 text-black font-bold p-4 max-w-full sm:max-w-full">
        <h1 className={`text-2xl sm:text-4xl ${styles.typing} animation-delay-500`}>Welcome to KAR Consultancy</h1>
        <div className="w-full sm:w-1/3 mt-20">
          <p className="text-xl sm:text-2xl animate-slideInFromBottom">Providing top-tier structural engineering and consultancy services, specializing in innovative solutions for commercial, residential, and industrial projects.</p>
        </div>
      </div>
      <div className="flex-grow mt-40 p-4">
        {/* Add content that will animate in as the user scrolls */}
        fjhdfgjlk
        <div className={`section ${styles.animateSlideInFromBottom}`}>
          <Image src="/small-image-1.jpeg" alt="Expertise" width={200} height={200}/>
          <div className="section-content">
            <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
            <p>We specialize in structural engineering, offering solutions that are innovative, reliable, and sustainable.</p>
          </div>
        </div>
        <div className={`section ${styles.animateSlideInFromBottom}`}>
          <Image src="/small-image-2.jpg" alt="Why Choose Us" width={200} height={200}/>
          <div className="section-content">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
            <p>With years of experience and a commitment to excellence, we deliver top-tier consultancy services tailored to your needs.</p>
          </div>
        </div>
        <div className={`section ${styles.animateSlideInFromBottom}`}>
          <Image src="/small-image-3.jpg" alt="Our Vision" width={200} height={200}/>
          <div className="section-content">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p>We aim to build strength and engineer excellence in every project we undertake.</p>
          </div>
        </div>
      </div>
     
    </div>
  );
}
