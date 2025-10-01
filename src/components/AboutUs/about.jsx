const About = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[80px] items-center lg:items-center text-light-foreground dark:text-dark-foreground my-20 px-2 md:px-10">
      <div className="w-[80%] md:w-1/2 flex justify-end">
        <img
          src="/assets/gallery/2.jpeg"
          className="object-contain xl:w-[85%] 2xl:w-[70%]"
        />
      </div>
      <div className="md:w-1/2 flex flex-col gap-4 items-center lg:items-start">
        <div className="flex flex-col gap-[30px] xl:w-[70%] 2xl:w-[50%] text-center lg:text-start">
          <h1 className="text-[52px]">I&apos;m Deepak Jha — Natural Men&apos;s Physique Athlete &amp; Mentor</h1>
          <p className="text-xl">
            I&apos;m a Natural Men&apos;s Physique bodybuilding athlete from India, proudly known as the
            &quot;Bihari Beast.&quot; I&apos;ve earned national recognition and guided 100+ transformations through
            disciplined, drug‑free, evidence‑based coaching.
          </p>
        </div>
        <div className="w-[10%] border-b border-light-foreground dark:border-dark-foreground my-6"></div>
        <div className="lg:w-[90%] 2xl:w-[70%] flex flex-col gap-9 px-4 md:px-0">
          <p className="font-bold text-lg text-light-foreground dark:text-dark-foreground">
            They call me &quot;Bihari Beast&quot; — I call it relentless consistency.
          </p>
          <p className="dark:text-[#f3f6fa95]">
            My career is built on natural, drug‑free performance and a love for the sport.
            I&apos;ve competed in elite natural competitions like ICN and Muscle Mania, while helping
            athletes and enthusiasts achieve sustainable results. My coaching focuses on fundamentals
            that work: hypertrophy‑driven programming, intelligent nutrition, conditioning, posing and
            stage presence, recovery, and practical lifestyle systems that keep you progressing. My mission
            is simple — grow the sport, build disciplined athletes, and help more people step on stage with
            confidence.
          </p>
          <p className="dark:text-[#f3f6fa95]">
            <span className="font-semibold text-light-foreground dark:text-dark-foreground">
              I offer online mentorship, online programming, competition prep, and transformation plans —
              all grounded in natural methods, integrity, and accountability.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
