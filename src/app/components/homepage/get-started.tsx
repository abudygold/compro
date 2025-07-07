import { Button } from '@mui/material';

export const GetStarted = () => {
  return (
    <>
      <section className="p-6 m-4 md:lg:px-20 rounded-4xl md:lg:mx-28 md:lg:my-14 place-content-center md:lg:py-28 bg-get-started">
        <p className="mb-0 text-3xl font-semibold text-white capitalize gabarito md:lg:text-6xl md:lg:leading-16">
          This is the time for you to
          <span className="hidden md:inline">
            <br />
          </span>{' '}
          get more customer
        </p>

        <p className="text-base md:lg:text-lg text-[#ECF1F4] my-6 md:lg:my-10">
          You can see frequently asked questions by other
          <span className="hidden md:inline">
            <br />
          </span>{' '}
          customers. If you find an answer, you can call us or
          <span className="hidden md:inline">
            <br />
          </span>{' '}
          contact us below.
        </p>

        <div className="w-full">
          <Button
            variant="contained"
            className="text-base md:lg:min-h-10 md:lg:text-sm"
            sx={{
              color: '#2D3032',
              backgroundColor: 'white',
              borderRadius: '100px',
              textTransform: 'none',
              fontWeight: 600,
            }}
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </>
  );
};
