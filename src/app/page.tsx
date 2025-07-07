import { AboutUs } from './components/homepage/about-us';
import { FAQ } from './components/homepage/faq';
import { GetStarted } from './components/homepage/get-started';
import { Intro } from './components/homepage/intro';
import { Price } from './components/homepage/price';
import { Service } from './components/homepage/service';
import { TopFeatures } from './components/homepage/top-features';
import { TotalCustomer } from './components/homepage/total-customer';
import { Footer } from './layout/footer';

export default function Home() {
  return (
    <>
      <Intro />
      <Service />
      <TopFeatures />
      <AboutUs />
      <TotalCustomer />
      {/* <Price /> */}
      <FAQ />
      <GetStarted />
      <Footer />
    </>
  );
}
