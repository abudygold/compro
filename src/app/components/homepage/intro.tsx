import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Header } from '../../layout/header';

export const Intro = () => {
  return (
    <div className="w-full h-screen bg-header">
      <div className="flex flex-col items-center justify-center p-5">
        <Header />

        <div className="flex flex-col items-center justify-center h-screen gap-10">
          <p className="text-sm text-[#C9CDD3] inter">
            <span className="p-3 mr-3 text-black bg-white rounded-full">
              New
            </span>
            Engage Your Customer Now! ✨
          </p>

          <p className="text-4xl text-center text-white md:lg:text-6xl gabarito">
            Seamless Communication <br />{' '}
            <span className="text-4xl md:lg:text-6xl font-bold bg-gradient-to-r from-[#a2e1e4] to-[#c0f0f2] bg-clip-text text-transparent">
              Infinite
            </span>{' '}
            Possibilities
          </p>

          <p className="text-center text-[#C5C5C5] inter capitalize">
            Connecta Empowers Businesses With A Cutting-Edge CPaaS Platform,
            enabling seamless communication{' '}
            <span className="hidden md:inline">
              <br />
            </span>{' '}
            across multiple channels. From AI-driven chatbots to bulk messaging,
            campaigns, and contact centers,{' '}
            <span className="hidden md:inline">
              <br />
            </span>{' '}
            we deliver tailored solutions to connect you with your audience
            effortlessly.
          </p>

          {/* <div className="flex justify-start gap-2 md:lg:gap-6 discover-app">
            <Button
              variant="contained"
              className="md:lg:min-h-14 !text-[12px] md:lg:text-sm primary-button"
            >
              Discover Our App
              <ArrowForwardIcon className="ml-2" />
            </Button>
            <Button
              variant="contained"
              className="md:lg:min-h-14 !text-[12px] md:lg:text-sm secondary-button"
            >
              See Our Pricing
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
