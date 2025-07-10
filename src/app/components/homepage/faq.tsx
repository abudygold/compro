import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';

export const FAQ = () => {
  const faqs = [
    {
      label: 'What is an omnichannel platform?',
      content:
        'An omnichannel platform provides a unified and seamless customer experience across multiple communication channels, such as SMS, WhatsApp, voice, email, and social media. Instead of managing each channel separately, an omnichannel platform integrates them all into a single interface. This allows businesses to maintain consistent conversations with customers, regardless of the channel they choose, and provides a holistic view of customer interactions.',
    },
    {
      label: 'Do I need technical knowledge to start using this platform?',
      content:
        'No, generally you do not need extensive technical knowledge to start using our platform. Our CPaaS platform is designed with user-friendliness in mind, often featuring intuitive interfaces and drag-and-drop functionalities. While some advanced integrations might benefit from technical assistance, the core features and common use cases are accessible to users with minimal technical background. We also provide comprehensive documentation and support to guide you through the process.',
    },
    {
      label: 'Does this platform support WhatsApp Business API?',
      content:
        'Yes, our platform fully supports the WhatsApp Business API. This allows businesses to leverage WhatsApp for customer communication, including sending notifications, engaging in customer service chats, and even enabling rich media interactions. We facilitate the onboarding process for the WhatsApp Business API, making it easier for you to connect with your customers on their preferred messaging app.',
    },
    {
      label: 'Is the platform secure?',
      content:
        'Absolutely. Security is a top priority for our platform. We implement robust security measures, including data encryption, access controls, regular security audits, and compliance with industry standards and regulations. Your data and your customers data are protected with advanced security protocols to ensure confidentiality, integrity, and availability.',
    },
    {
      label: 'Can I integrate this platform with a CRM or other tools?',
      content:
        'Yes, our platform offers extensive integration capabilities. You can seamlessly integrate it with your existing Customer Relationship Management (CRM) systems, marketing automation platforms, helpdesk software, and other business tools. These integrations allow for automated workflows, centralized customer data, and enhanced operational efficiency. We typically provide APIs (Application Programming Interfaces) and pre-built connectors to facilitate these integrations.',
    },
  ];
  return (
    <>
      <section className="px-4 py-6 md:lg:px-28 place-content-center md:lg:py-28">
        <div className="grid gap-4 md:lg:grid-flow-col md:lg:grid-cols-4 md:lg:grid-rows-2">
          <div className="col-span-2 row-span-3">
            <div className="w-full">
              <small className="px-4 py-2 bg-[#F4F4F4] text-[#898989] inter rounded-full">
                FIND YOUR QUESTION HERE
              </small>
            </div>

            <p className="py-3 gabarito text-3xl md:lg:text-[40px] font-semibold text-[#2D3032]">
              Frequently Asked Question
            </p>

            <p className="text-base md:lg:text-lg text-[#6D7579] mb-6">
              You can see frequently asked questions by other customers. If you
              <span className="hidden md:inline">
                <br />
              </span>{' '}
              find an answer, you can call us or contact us below.
            </p>

            {/* <Button
              variant="contained"
              className="tertiary-button"
              sx={{
                width: '181px',
                height: '56px',
                textTransform: 'none',
                fontSize: 16,
                color: '#3D434C !important',
              }}
            >
              Contact Us
            </Button> */}

            <Image
              src="/images/bg-faq.svg"
              alt="FAQ"
              width={550}
              height={363}
              className="mt-6 md:lg:mt-12"
            />
          </div>

          <div className="col-span-2 row-span-3">
            {faqs.map((faq, index) => (
              <Accordion className="faq" key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography component="span">{faq.label}</Typography>
                </AccordionSummary>
                <AccordionDetails>{faq.content}</AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
