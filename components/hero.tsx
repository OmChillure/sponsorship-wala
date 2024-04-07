import { Announcement } from "./announcements";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container relative pt-16 flex items-center sm:flex-col lg:flex-row ">
      <div className="mx-auto flex flex-col items-start gap-4 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <Announcement />
        <h1 className="max-w-[750px] text-3xl font-bold md:text-6xl lg:leading-[1.1]">
          Struggling to get Sponsorships?
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero, consectetur facere aperiam illo nesciunt doloribus quod debitis
          consequatur minima quaerat corporis quis voluptatem rem quam veniam
          quia? Cupiditate, totam.
        </p>
        <div className="flex gap-4">
          <Button size="lg">
            <Link href="/event">Get Started</Link>
          </Button>
          <Button size="lg" variant="ghost">
            Learn More
          </Button>
        </div>
      </div>
      <Image src="/hero.svg" width={700} height={500} alt="Mail" className="" />
    </div>
  );
};

export default Hero;
