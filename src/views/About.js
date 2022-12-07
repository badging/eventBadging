import { BadgeLevels } from "../components";
import Frame68 from "../../assets/logos/Frame68.png";
import ChaossWhite from "../../assets/logos/chaoss-white.png";
import LinuxFoundation from "../../assets/logos/linuxfoundation-logo.png";
import OsSustainAfrica from "../../assets/logos/os+sustainAfrica.png";
import SheCodeAfrica from "../../assets/logos/shecodeafrica-logo.png";

const About = () => {
  return (
    <>
      <section>
        <article>
          <h1>About</h1>
          <img src={Frame68} alt="logo" />
          <h1>Badging</h1>
        </article>
        <article>
          <p>
            The program is affiliated with the CHAOSS project and a proud
            initiative of CHAOSS. The work of the Badging Program is closely
            associated with the CHAOSS D&I working group.{" "}
          </p>
        </article>
      </section>
      <section>
        <article>
          <h1>What is DEI Badging?</h1>
          <p>
            The goal of the Diversity & Inclusion Badging Program is to
            encourage projects and events to obtain D&I badges for reasons of
            leadership, self-reflection, and self-improvement on issues critical
            to building the Internet as a social good.
          </p>
        </article>
        <article>
          <h1>Problem Statement</h1>
          <p>
            Diversity in open source is opaque to participants, newcomers, and
            stakeholders because contributors are distributed, and in many cases
            are an agglomeration of individuals in different locations.
            Inclusivity for open source projects is impeded by long standing
            practices that have side effects that act to reproduce the current
            state of limited diversity.
          </p>
        </article>
        <article>
          <h1>Opportunity</h1>
          <p>
            Diversity in open source is opaque to participants, newcomers, and
            stakeholders because contributors are distributed, and in many cases
            are an agglomeration of individuals in different locations.
            Inclusivity for open source projects is impeded by long standing
            practices that have side effects that act to reproduce the current
            state of limited diversity.
          </p>
        </article>
      </section>
      <section>
        <section>
          <article>
            <h1>Building the Internet as a social good.</h1>
            <p>
              The goal of the Diversity & Inclusion Badging Program is to
              encourage projects and events to obtain D&I badges for reasons of
              leadership, self-reflection, and self-improvement on issues
              critical to building the Internet as a social good. Here are the
              primary deliverables of the Diversity & Inclusion Badging Program:
            </p>
          </article>
        </section>
        <section>
          <article>
            <h2>Image</h2>
            <h3>Establish</h3>
            <p>
              Establish an environment where projects and events can engage in
              the badging program
            </p>
          </article>
          <article>
            <h2>Image</h2>
            <h3>Align</h3>
            <p>
              Aligning best practices, guidelines, and recommendations from
              Diversity & Inclusion efforts on the CHAOSS project
            </p>
          </article>
          <article>
            <h2>Image</h2>
            <h3>Connect</h3>
            <p>
              Connecting with existing badging standards of IMS Global including
            </p>
          </article>
          <article>
            <h2>Image</h2>
            <h3>Open</h3>
            <p>
              Building an open, peer-review system for the D&I Badging Program
            </p>
          </article>
        </section>
      </section>
      <BadgeLevels />
      <section>
        <article>
          <h1>Submit your Event for a DEI Badge</h1>
          <p>
            The primary motivation to apply for a CHAOSS D&I Badge is the badge
            itself! The awarded event can show the open source community that
            they foster healthy D&I practices with a CHAOSS badge.{" "}
          </p>
          <section>
            <input type="text" placeholder="Apply for a badge" />
            <input type="text" placeholder="Badged Events" />
          </section>
          <p>
            Applying for a badge supports D&I efforts within an open source
            community by expressing that your event is willing to improve the
            ways the work. These efforts can have affects to D&I practices in
            your event and even outside of your project space. Like these events
          </p>
        </article>
        <article>
          <img src={ChaossWhite} alt="CHAOSS White Logo" />
          <img src={LinuxFoundation} alt="Linux Foundation Logo" />
          <img src={OsSustainAfrica} alt="Open Source Sustain Africa Logo" />
          <img src={SheCodeAfrica} alt="She Code Africa Logo" />
        </article>
      </section>
    </>
  );
};

export default About;
