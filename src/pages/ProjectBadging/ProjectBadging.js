import '../../assets/styles/global.scss';
import './ProjectBadging.scss';
import {
  Footer,
  Header,
  // Faq,
  CardComponent,
  CardCarousel,
} from '../../components';

// import { faqData } from '../../components/Faq/data';
import { howItWorksData } from './data';
import {
  howItWorksBgMobile,
  howItWorksBgWeb,
  // faqBgWeb,
  // faqBgMobile,
  heroSectionBgWeb,
  heroSectionBgMobile,
} from '../../assets/images';
// import zIndex from '@mui/material/styles/zIndex';
import { useMediaQuery } from 'react-responsive';

const ProjectBadging = () => {
  const isMobile = useMediaQuery({ maxWidth: 650 });
  const myBackground = {
    backgroundImage: `url(${
      isMobile ? heroSectionBgMobile : heroSectionBgWeb
    })`,
    height: '100%',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div>
      <Header />

      <div className="sub-nav" style={myBackground}>
        <div className="hero-section">
          <div className="title">DEI Project Badging</div>
          <div className="parra">
            <div className="description">
              <div className="shape"></div>
              Take a step towards prioritizing and advancing DEI within your
              project and the broader open-source community.
            </div>
          </div>
        </div>
        <CardCarousel />
      </div>

      <div className="how-it-works">
        <div
          className="content-wrap wrap"
          style={{
            background: `url(${
              isMobile ? howItWorksBgMobile : howItWorksBgWeb
            }) center top no-repeat`,
          }}
        >
          <div className="content">
            <div>
              <h2>How it Works</h2>
              <p className="text-lg">
                Through the use of a DEI.md markdown document, open-source
                maintainers can actively demonstrate their ongoing commitment to
                promoting diversity, equity and inclusion.
              </p>
            </div>
            <div className="cards">
              {howItWorksData.map(({ id, title, text, link, icon }) => {
                return (
                  <CardComponent
                    key={id}
                    title={title}
                    text={text}
                    link={link}
                    icon={icon}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="main" style={{
        backgroundImage:`url(${heroImage})`,
        height:"500px",
        width:'100%',
        backgroundRepeat:'no-repeat',
        }}>
        hello
      </div> */}

      {/* FAQ SECTION */}
      {/* <section
        className="container"
        style={{
          background: `url(${!isMobile && faqBgWeb}) center top no-repeat`,
        }}
      >
        <div
          className="faq"
          style={{
            background: `url(${isMobile && faqBgMobile}) center top no-repeat`,
          }}
        >
          <h2>Still Have Questions?</h2>
          {faqData.map(({ question, answer }, id) => {
            return <Faq key={id} question={question} answer={answer} />;
          })}
        </div>
      </section> */}
      {/* <hr className="reed" /> */}
      <Footer />
    </div>
  );
};

export default ProjectBadging;
