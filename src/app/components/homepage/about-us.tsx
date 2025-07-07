export const AboutUs = () => {
  return (
    <>
      <section className="md:lg:min-h-[460px] md:lg:px-20 place-content-center bg-[#FFF9EE] p-4">
        <small className="text-sm gabarito text-[#FFA69E]">ABOUT US</small>

        <p className="text-3xl md:lg:text-[40px] gabarito text-[#2D3032]">
          Who Are We
        </p>

        <p className="my-6 md:lg:my-10 text-lg md:lg:text-2xl md:lg:text-[28px] gabarito text-[#2D3032]">
          At Connecta, we specialize in providing cutting-edge solutions{' '}
          <span className="hidden md:inline">
            <br />
          </span>{' '}
          for seamless connectivity and communication.
        </p>

        <p className="text-base md:lg:text-lg inter text-[#6D7579]">
          Our services are designed to optimize network performance, enhance
          digital experiences, and foster collaboration in the digital age.
        </p>
      </section>
    </>
  );
};
