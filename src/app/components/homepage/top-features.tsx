import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';

export const TopFeatures = () => {
  return (
    <>
      <section className="p-4 py-6 md:lg:px-28 place-content-center md:lg:pt-28 md:lg:pb-16">
        <div className="w-full">
          <small className="px-4 py-2 bg-[#F4F4F4] text-[#898989] inter rounded-full">
            Top Features
          </small>
        </div>

        <p className="py-3 gabarito text-3xl md:lg:text-[40px] font-semibold text-[#2D3032]">
          Best Feature We Have
        </p>

        <p className="text-base md:lg:text-lg text-[#6D7579] md:lg:mb-8 mb-8">
          Our best features are expected to help you design a good business
          flow.
        </p>

        <div className="grid gap-4 md:lg:grid-flow-col md:lg:grid-cols-4 md:lg:grid-rows-2">
          <div className="col-span-2 row-span-3 border-[#EAEAEA] bg-[#F9F9F9] rounded-3xl p-6 bg-omni-channel-vector">
            <p className="py-3 gabarito text-xl md:lg:text-2xl font-semibold text-[#2D3032]">
              Omni Channel Communication
            </p>

            <p className="py-3 text-base inter text-[#6D7579]">
              Support multi channel communication platform such as SMS,
              <span className="hidden md:inline">
                <br />
              </span>{' '}
              WhatsApp and Email
            </p>

            <Image
              src="/images/illustration.svg"
              alt="Omni Channel Communication"
              width={450}
              height={72}
              className="m-auto"
            />
          </div>

          <div className="col-span-2 row-span-1 border-[#EAEAEA] bg-[#F9F9F9] rounded-3xl p-6 bg-powered-capabilities">
            <p className="py-3 gabarito text-xl md:lg:text-2xl font-semibold text-[#2D3032]">
              AI - Powered Capabilities
            </p>

            <p className="py-3 text-base inter text-[#6D7579]">
              Advanced AI capabilities to deliver natural, context-aware
              <span className="hidden md:inline">
                <br />
              </span>{' '}
              conversations, including real-time translation, multi-language
              <span className="hidden md:inline">
                <br />
              </span>{' '}
              support.
            </p>
          </div>

          <div className="col-span-2 md:lg:col-span-1 row-span-2 border-[#EAEAEA] bg-[#F9F9F9] rounded-3xl p-6">
            <Image
              src="/icons/smart-automation.svg"
              alt="Smart Automation"
              width={40}
              height={40}
            />

            <p className="py-4 gabarito text-xl md:lg:text-2xl font-semibold text-[#2D3032]">
              Smart
              <span className="hidden md:inline">
                <br />
              </span>{' '}
              Automation
            </p>

            <p className="py-3 text-base inter text-[#6D7579]">
              Automate routine flow, reduce manual effort while increasing
              accuracy and efficiency. Conversation workflow, chatbot, campaign
              scheduler.
            </p>
          </div>

          <div className="col-span-2 md:lg:col-span-1 row-span-2 border-[#EAEAEA] bg-[#F9F9F9] rounded-3xl p-6">
            <Image
              src="/icons/ticketing-mechanism.svg"
              alt="Advanced Ticketing Mechanism"
              width={40}
              height={40}
            />

            <p className="py-4 gabarito text-xl md:lg:text-2xl font-semibold text-[#2D3032]">
              Advanced Ticketing Mechanism
            </p>

            <p className="py-3 text-base inter text-[#6D7579]">
              Prioritize and route tickets based on urgency, intent, and agent
              skills while maintaining a seamless history of interactions.
            </p>
          </div>
        </div>

        <div className="w-full mt-4 text-center md:lg:mt-10">
          <Button
            variant="contained"
            className="md:lg:min-h-10 !text-[12px] md:lg:text-sm tertiary-button"
            sx={{
              textTransform: 'none',
            }}
          >
            Try Our App
            <ArrowForwardIcon className="ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
};
