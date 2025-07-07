import { Button, Card, CardContent, Divider } from '@mui/material';

import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import Image from 'next/image';

export const Price = () => {
  const features = [
    { text: '2 Channel', included: true },
    { text: '10,000 Message/month', included: true },
    { text: '1 Agent', included: true },
    { text: 'Basic Reporting', included: true },
    { text: 'Chatbot Integration', included: false },
  ];

  return (
    <>
      <section className="p-4 py-6 md:lg:px-28 place-content-center md:lg:py-28">
        <div className="w-full">
          <small className="px-4 py-2 bg-[#F4F4F4] text-[#898989] inter rounded-full">
            Our Price
          </small>
        </div>

        <p className="py-3 gabarito text-3xl md:lg:text-[40px] font-semibold text-[#2D3032]">
          Let’s See Our Offer
        </p>

        <p className="text-base md:lg:text-lg text-[#6D7579] mb-10">
          Discover How Our Innovative Approach Can Increase Your Engagement And
          Boost Your Business Performance
        </p>

        <div className="flex flex-col gap-6 md:lg:flex-row md:lg:gap-10">
          <Card
            sx={{
              width: '100%',
              padding: '16px 10px',
              border: '1px solid #E4E4E7',
              borderRadius: '35px',
              boxShadow: 'unset',
            }}
          >
            <CardContent>
              <Image
                src="/icons/basic-price.svg"
                alt="Basic"
                width={24}
                height={24}
                className="mb-3"
              />

              <p className="inter text-xl text-[#09090B]">Basic</p>

              <p className="inter text-base text-[#71717A] mb-4">
                You can start your business here
              </p>

              <p className="inter text-6xl text-[#09090B] font-bold mb-4 mt-8">
                $29
                <span className="inter text-lg text-[#71717A]">/month</span>
              </p>

              <p className="inter text-sm text-[#71717A] mb-5">
                Billed monthly. Cancel anytime.
              </p>

              <Divider />

              <div className="mt-5 space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center mb-6">
                    <div
                      className={`w-5 h-5 rounded-full mr-2 ${
                        feature.included ? 'bg-[#B8F2E6]' : 'bg-[#E4E4E7]'
                      }`}
                    >
                      {feature.included ? (
                        <Check className="w-.5! h-3.5! -left-0.5 bottom-1 relative text-black" />
                      ) : (
                        <Close className="w-3.5! h-3.5! left-[3px] bottom-1 relative text-gray-500" />
                      )}
                    </div>

                    <span className="text-[#18181B] inter">{feature.text}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="contained"
                className="primary-button w-full mt-5!"
                sx={{
                  textTransform: 'none',
                }}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>

          <Card
            sx={{
              width: '100%',
              padding: '16px 10px',
              border: '1px solid #E4E4E7',
              borderRadius: '35px',
              boxShadow: 'unset',
            }}
          >
            <CardContent>
              <Image
                src="/icons/most-popular.svg"
                alt="Profesional"
                width={117}
                height={24}
                className="mb-3"
              />

              <p className="inter text-xl text-[#09090B]">Profesionnal</p>

              <p className="inter text-base text-[#71717A]">
                Grow Your Business With This
              </p>

              <p className="inter text-6xl text-[#09090B] font-bold mb-4 mt-8">
                $99
                <span className="inter text-lg text-[#71717A]">/month</span>
              </p>

              <p className="inter text-sm text-[#71717A] mb-5">
                Billed monthly. Cancel anytime.
              </p>

              <Divider />

              <div className="mt-5 space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center mb-6">
                    <div
                      className={`w-5 h-5 rounded-full mr-2 ${
                        feature.included ? 'bg-[#B8F2E6]' : 'bg-[#E4E4E7]'
                      }`}
                    >
                      {feature.included ? (
                        <Check className="w-.5! h-3.5! -left-0.5 bottom-1 relative text-black" />
                      ) : (
                        <Close className="w-3.5! h-3.5! left-[3px] bottom-1 relative text-gray-500" />
                      )}
                    </div>

                    <span className="text-[#18181B] inter">{feature.text}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="contained"
                className="primary-button w-full mt-5!"
                sx={{
                  textTransform: 'none',
                }}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>

          <Card
            sx={{
              width: '100%',
              padding: '16px 10px',
              border: '1px solid #E4E4E7',
              borderRadius: '35px',
              boxShadow: 'unset',
            }}
          >
            <CardContent>
              <Image
                src="/icons/enterprise-price.svg"
                alt="Enterprise"
                width={24}
                height={24}
                className="mb-3"
              />

              <p className="inter text-xl text-[#09090B]">Enterprise</p>

              <p className="inter text-base text-[#71717A]">
                Discuss with Our Sales
              </p>

              <p className="inter text-6xl text-[#09090B] font-bold mb-4 mt-8">
                $299
                <span className="inter text-lg text-[#71717A]">/month</span>
              </p>

              <p className="inter text-sm text-[#71717A] mb-5">
                Billed monthly. Cancel anytime.
              </p>

              <Divider />

              <div className="mt-5 space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center mb-6">
                    <div
                      className={`w-5 h-5 rounded-full mr-2 ${
                        feature.included ? 'bg-[#B8F2E6]' : 'bg-[#E4E4E7]'
                      }`}
                    >
                      {feature.included ? (
                        <Check className="w-.5! h-3.5! -left-0.5 bottom-1 relative text-black" />
                      ) : (
                        <Close className="w-3.5! h-3.5! left-[3px] bottom-1 relative text-gray-500" />
                      )}
                    </div>

                    <span className="text-[#18181B] inter">{feature.text}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="contained"
                className="primary-button w-full mt-5!"
                sx={{
                  textTransform: 'none',
                }}
              >
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};
