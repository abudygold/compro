import Image from 'next/image';

export const Service = () => {
  return (
    <>
      <section className="m-6 place-content-center md:lg:px-32 md:lg:my-16 bg-service">
        <div className="w-full text-center">
          <small className="px-4 py-2 bg-[#F4F4F4] text-[#898989] inter rounded-full">
            Service
          </small>
        </div>

        <p className="pt-6 pb-3 gabarito text-3xl md:lg:text-[40px] font-semibold text-[#2D3032] text-center">
          What We Offer
        </p>

        <p className="pb-10 md:lg:pb-20 text-base md:lg:text-lg text-[#6D7579] text-center">
          We provides everything you need to message, email, or call your
          customers at scale. From user{' '}
          <span className="hidden md:inline">
            <br />
          </span>{' '}
          verification to omnichannel campaigns, our APIs and applications have
          you covered.
        </p>

        <div className="flex flex-wrap justify-between gap-10 flex-cols">
          <div className="text-center md:lg:basis-1/4">
            <Image
              src="/images/seamless-experience.svg"
              alt="Seamless Experience Icon"
              width={72}
              height={72}
              className="m-auto"
            />

            <p className="mt-5 md:lg:mt-10 mb-3 gabarito text-lg md:lg:text-2xl text-[#2D3032]">
              Seamless Experience
            </p>

            <p className="text-[#6D7579] text-sm md:lg:text-base">
              Connecta offers a seamless omnichannel experience by connecting
              all your communication needs on a single platform.
            </p>
          </div>

          <div className="text-center md:lg:basis-1/4">
            <Image
              src="/images/user-friendly-app.svg"
              alt="User Friendly App Icon"
              width={72}
              height={72}
              className="m-auto"
            />

            <p className="mt-5 md:lg:mt-10 mb-3 gabarito text-lg md:lg:text-2xl text-[#2D3032]">
              User-Friendly App
            </p>

            <p className="text-[#6D7579] text-sm md:lg:text-base">
              With our user-friendly flow builder tools, you can easily
              personalize messages through simple drag-and-drop feature.
            </p>
          </div>

          <div className="text-center md:lg:basis-1/4">
            <Image
              src="/images/streamline-marketing.svg"
              alt="Streamline Marketing Icon"
              width={72}
              height={72}
              className="m-auto"
            />

            <p className="mt-5 md:lg:mt-10 mb-3 gabarito text-lg md:lg:text-2xl text-[#2D3032]">
              Streamline Marketing
            </p>

            <p className="text-[#6D7579] text-sm md:lg:text-base">
              Transform with audience and streamline your marketing with
              Connecta's innovative services, everything in your hand.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
