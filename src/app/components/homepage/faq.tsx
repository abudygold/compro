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
      content: 'What is an omnichannel platform?',
    },
    {
      label: 'Do I need technical knowledge to start using this platform?',
      content: 'Do I need technical knowledge to start using this platform?',
    },
    {
      label: 'Does this platform support WhatsApp Business API?',
      content: 'Does this platform support WhatsApp Business API?',
    },
    {
      label: 'How much does it cost to use this platform?',
      content: 'How much does it cost to use this platform?',
    },
    {
      label: 'Is the platform secure?',
      content: 'Is the platform secure?',
    },
    {
      label: 'Can I integrate this platform with a CRM or other tools?',
      content: 'Can I integrate this platform with a CRM or other tools?',
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
