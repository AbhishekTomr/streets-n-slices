import HomeMenu from "@/components/layout/HomeMenu";
import LandingPageHero from "@/components/layout/LandingPageHero";
import SectionHeader from "@/components/layout/SectionHeader";

export default function Home() {
  return (
    <>
      <LandingPageHero />
      <HomeMenu />
      <section>
        <SectionHeader subHeader="Our Story" mainHeader="About Us" />
        <div className="max-w-2xl mx-auto text-center my-4 text-gray-600 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quasi inventore consequuntur doloribus. Vel esse quam
            laudantium odio. Nisi ex quaerat earum consequuntur consectetur!
            Pariatur cupiditate modi ea sint tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quasi inventore consequuntur doloribus. Vel esse quam
            laudantium odio. Nisi ex quaerat earum consequuntur consectetur!
            Pariatur cupiditate modi ea sint tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed earum
            distinctio odit veniam aliquam eligendi enim ipsam ab eaque beatae!
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeader subHeader="Dont\'t hesitate" mainHeader="Contact Us" />
        <div className="">
          <a
            href="tel:+46 738 123 123"
            className="text-4xl underline text-gray-600"
          >
            +46 738 123 123
          </a>
        </div>
      </section>
    </>
  );
}
