import Image from 'next/image';

export const TotalCustomer = () => {
  return (
    <>
      <section className="md:lg:min-h-[440px] md:lg:px-20 p-4 place-content-center bg-total">
        <div className="grid gap-4 md:lg:grid-cols-4">
          <div>
            <small className="flex text-lg text-[#818181] inter">
              <Image
                src="/icons/message-send.svg"
                alt="Message Send Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              Message Sent
            </small>
            <p className="text-lg text-[#8E9497] inter pt-5">
              <span className="text-5xl md:lg:text-6xl text-[#383838] gabarito">
                900K+
              </span>{' '}
              Per Day
            </p>
          </div>
          <div>
            <small className="flex text-lg text-[#818181] inter">
              <Image
                src="/icons/conversation.svg"
                alt="Message Send Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              Conversation
            </small>
            <p className="text-lg text-[#8E9497] inter pt-5">
              <span className="text-5xl md:lg:text-6xl text-[#383838] gabarito">
                1.1M+
              </span>{' '}
              Per Day
            </p>
          </div>
          <div>
            <small className="flex text-lg text-[#818181] inter">
              <Image
                src="/icons/people-outline.svg"
                alt="Message Send Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              Happy Customer
            </small>
            <p className="text-lg text-[#8E9497] inter pt-5">
              <span className="text-5xl md:lg:text-6xl text-[#383838] gabarito">
                12M+
              </span>{' '}
              In Total
            </p>
          </div>
          <div>
            <small className="flex text-lg text-[#818181] inter">
              <Image
                src="/icons/client.svg"
                alt="Message Send Icon"
                width={16}
                height={16}
                className="mr-2"
              />
              Client
            </small>
            <p className="text-lg text-[#8E9497] inter pt-5">
              <span className="text-5xl md:lg:text-6xl text-[#383838] gabarito">
                30+
              </span>{' '}
              Around The World
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
