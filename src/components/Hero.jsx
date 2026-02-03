import { useState, useEffect } from "react";

const heroSlides = [
  {
    title: "Transform Healthcare and Business with Intelligent Technology",
    subtitle:
      "Build modern digital experiences powered by AI, automation, and seamless patient workflows.",
    button1: "Get Started",
    button2: "Learn More",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1600&q=75"
  },
  {
    title: "Build Scalable Web & AI Solutions",
    subtitle:
      "From HMIS to chatbots, create products that solve real problems and drive impact.",
    button1: "Start Building",
    button2: "View Projects",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=75"
  },
  {
    title: "Empower Patients, Doctors , Hospitals and Businesses",
    subtitle:
      "Leverage automation, analytics and data intelligence to transform care delivery.",
    button1: "Join the Mission",
    button2: "Explore Tools",
    image:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=1600&q=75"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload first image
    const img = new Image();
    img.src = heroSlides[0].image;
    img.onload = () => setImagesLoaded(true);

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative mx-auto w-full max-w-7xl px-0">
      <div className="relative h-[80vh] w-full overflow-hidden shadow-2xl">
        {/* Slides Container */}
        <div
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, idx) => (
            <div key={idx} className="relative h-full min-w-full">
              <img
                src={slide.image}
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "low"}
                alt={slide.title}
                className="h-full w-full object-cover"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

              {/* Text + Buttons */}
              <div className="absolute left-8 top-1/2 z-20 flex max-w-xl -translate-y-1/2 flex-col gap-4 text-white md:left-16">
                <h1 className="text-3xl font-bold md:text-5xl">{slide.title}</h1>
                <p className="text-base md:text-lg">{slide.subtitle}</p>

                <div className="mt-4 flex gap-4">
                  <a href="#contact" className="rounded-xl bg-white px-6 py-2 font-semibold text-black shadow-lg transition hover:scale-105">
                    {slide.button1}
                  </a>
                  <a href="#services" className="rounded-xl border border-white px-6 py-2 font-semibold text-white shadow-inner transition hover:bg-white/10 hover:scale-105">
                    {slide.button2}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all ${
                currentSlide === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
