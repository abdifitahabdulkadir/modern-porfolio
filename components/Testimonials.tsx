import HeaderGenerator from "./HeaderGenerator";
import { MovingCard } from "./MovingCard";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full bg-gray-50 py-20  lg:px-[80px]"
    >
      <HeaderGenerator
        buttonText="Testimonials"
        desc="Nice things people have said about me:"
      />

      <MovingCard />
    </section>
  );
}
