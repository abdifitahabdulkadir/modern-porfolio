import CopyText from "./CopyText";
import HeaderGenerator from "./HeaderGenerator";
import SocailMedia from "./SocailMedia";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 lg:px-[80px] ">
      <HeaderGenerator
        buttonText="Get in touch"
        desc="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
      />
      <div className="flex w-full flex-col items-center justify-center ">
        <CopyText
          imageOneUrl="/icons/email.svg"
          imageTwoUrl="/icons/copy.svg"
          text="reachsagarshah@gmail.com"
          isEmail={true}
        />
        <CopyText
          imageOneUrl="/icons/call.svg"
          imageTwoUrl="/icons/copy.svg"
          text="+91 8980500565"
          isEmail={false}
        />

        <p className="body-2 mt-8 text-gray-600">
          You may also find me on these platforms!
        </p>
        <SocailMedia otherClasses="mt-8" />
      </div>
    </section>
  );
}
