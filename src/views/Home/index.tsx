// -------------- import external dependencies ---------------
import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";

// -------------- import internal dependencies ---------------
import Seo from "../../components/Seo";
import { profileImg, companyImg, accordionData } from "../../utils/data";
import { Accordion } from "../../components/Accordion";

const Home = () => {
  return (
    <Seo section="main" content="Skip to Content" page="HOME" allowSkip>
      <Header>
        <Navbar>
          <img
            src="./assets/img/logo-beta.png"
            className="h-[35px] md:block hidden"
            alt="Global man Beta logo"
          />
          <img
            src="./assets/img/brand.png"
            className="h-[35px] md:hidden sm:block"
            alt="Global man Beta logo"
          />
          <button className="btn bg-green-primary btn-sm flex items-center justify-between">
            <span className="text-sm text-green-text font-semibold px-2">
              Request A Call Back
            </span>
            <FiArrowUpRight className="text-green-text font-semibold" />
          </button>
        </Navbar>

        {/* ------ hero section ------ */}
        <HeroWrapper>
          <article>
            <h1>
              Your Immigration <br /> experience, Simplified
            </h1>
            <p>
              Globarman helps ambitious tech talent navigate the <br />
              complexities of immigration with ease
            </p>
          </article>
          <button className="btn bg-green-primary btn-md flex items-center justify-between mx-auto mt-8">
            <span className="text-sm text-green-text font-semibold px-2">
              Learn More
            </span>
            <FiArrowUpRight className="text-green-text font-semibold" />
          </button>

          {/* ------- trusted talents ------ */}
          <TrustedWrapper>
            <span className="trusted-heading">
              TRUSTED BY 200+ TALENTS FROM
            </span>
            <ProfileWrapper>
              {profileImg.map((img: any, ind: number) => (
                <img src={img} key={ind} alt={`Profile ${ind}`} />
              ))}
            </ProfileWrapper>
          </TrustedWrapper>

          {/* ------- trusted companies ------- */}
          <TrustedCompanies>
            {companyImg.map((img: any, ind: number) => (
              <img src={img} key={ind} alt={`Company ${ind}`} />
            ))}
          </TrustedCompanies>
        </HeroWrapper>
      </Header>
      <Main id="main">
        <section>
          <FAQHeader>Frequently Asked Questions</FAQHeader>
          <Accordion.Group>
            {accordionData.map((data, ind) => (
              <Accordion title={data.title} key={ind}>
                <AccordionContent>{data.content}</AccordionContent>
              </Accordion>
            ))}
          </Accordion.Group>
        </section>
      </Main>
      <Footer>
        <img
          src="./assets/img/logo.png"
          className="h-[25px]"
          alt="Global man Beta logo"
        />
        <span className="font-inter text-sm block font-bold">
          Copyright © 2024
        </span>
      </Footer>
    </Seo>
  );
};

export default Home;

// ------ component styles ------
const Header = styled.header`
  background-color: var(--bg-color);
`;

const Navbar = styled.nav`
  background-color: var(--bg-color);
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

const HeroWrapper = styled.div`
  background-color: var(--bg-color);
  min-height: 650px;
  padding: 3rem 14px;

  & > article {
    h1 {
      font-family: Space Grotesk;
      text-align: center;
      color: var(--green-2);
      font-weight: 700;
      font-size: 3rem;
      line-height: 1.35;
    }

    p {
      font-family: Inter;
      text-align: center;
      font-weight: 400;
      font-size: 1.125rem;
      color: var(--grey);
      margin-top: 1.5rem;
    }
  }
`;

const TrustedWrapper = styled.div`
  margin-top: 3rem;
  & > .trusted-heading {
    font-size: 0.875rem;
    font-family: Inter;
    font-weight: 600;
    color: var(--green-2);
    text-align: center;
    display: block;
  }
`;

const ProfileWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;

  & img {
    height: 30px;
    width: 30px;

    &:not(:first-child) {
      margin-left: -0.4rem;
    }
  }
`;

const TrustedCompanies = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  & img {
    width: 130px;
    height: 50px;
    object-fit: scale-down;
  }
`;

const Main = styled.main`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

const FAQHeader = styled.h2`
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  font-size: 2rem;
  font-family: Space Grotesk;
`;

const AccordionContent = styled.span`
  color: var(--grey-2);
  font-size: 1rem;
  padding: 1rem 0;
  display: block;
  font-family: Inter;
`;

const Footer = styled.footer`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 4rem;
  margin-bottom: 3rem;
`;
