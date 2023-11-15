import "./about-dei-mobile.scss";
import "../../assets/styles/global.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  goldBadge,
  silverBadge,
  bronzeBadge,
  platinumBadge,
} from "../../assets/images";

const AboutDeiMobile = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component={"div"}>
            What is All in CHAOSS
            <br /> DEI Badging
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"div"}>
            <div>
              <p>
                The All In CHAOSS DEI Project Badging is an initiative developed
                in partnership between All In and the CHAOSS project to
                recognize open source projects that exemplify best practices for
                diversity, equity, and inclusion (DEI) work within their
                respective communities.
              </p>
              <p>
                The initiative uses CHAOSS DEI metrics as a benchmark to reflect
                on DEI efforts in an open source project. All CHAOSS DEI metrics
                are developed in an open and collaborative setting. More
                information about the CHAOSS DEI metrics development process can
                be found <a href="##">here</a>.
              </p>
            </div>
            <div className="objectives">
              <h3>DEI Project Badging Objective</h3>
              <p>
                The primary objective of the All In CHAOSS DEI Badging
                Initiative is to enable open source maintainers to signal their
                ongoing efforts in improving and prioritizing DEI within their
                communities.
              </p>
              <ul>
                <li>
                  To assess and address DEI standards in open source projects
                </li>
                <li>
                  Recognize projects and communities for their DEI efforts
                </li>
                <li>
                  Enable organizations to make informed decisions and take
                  targeted actions to create a more inclusive and equitable
                  environment
                </li>
              </ul>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How It Works</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"div"}>
            <div>
              <h3>Self-Assessment and Documentation:</h3>
              <p>
                Before applying for a DEI badge, maintainers or project admins
                are encouraged to conduct a self-assessment of their
                project&#39;s DEI efforts based on the following{" "}
                <strong>CHAOSS DEI metrics:</strong> Project Access, Inclusive
                Leadership, Communication Transparency, and Newcomer Experience.
                After the reflective process, maintainers can document how the
                project attends to and prioritizes DEI around these areas in a
                markdown file called the <a href="##">DEI.md file</a>. This
                DEI.md file should exist within the project&#39;s repository for
                easy feedback from the community.
              </p>
            </div>
            <div>
              <h3>All in CHAOSS DEI Badge Application:</h3>
              <p>
                Once the DEI.md file is published and publicly available,
                project maintainers can proceed to apply here. The applicant
                must be an admin or maintainer of the project, and the
                repository that holds the DEI.md file must be specified.
              </p>
            </div>
            <div>
              <h3>Badging Evaluation:</h3>
              <p>
                The review follows an automated process in which a CHAOSS bot
                scans the project repository for the presence of a DEI.md file.
                The bot will review the DEI.md file for relevant information
                provided by the maintainer and its alignment with the CHAOSS DEI
                metrics stated in the <a href="##">DEI.md template</a> to
                determine eligibility for the badge. Upon successful review of
                the DEI.md file, a project badge will be issued. The four CHAOSS
                metrics used in the DEI.md file include:
              </p>
            </div>
            <div>
              <h3>Recognition and Badging:</h3>
              <p>
                Projects that meet the established criteria will receive the All
                In CHAOSS DEI badge, which can be prominently displayed on the
                project&#39;s website, documentation, or other relevant
                platforms. The badge signifies the project&#39;s commitment to
                DEI and highlights its adherence to DEI best practices.
              </p>
            </div>
            <div>
              <h3>Continued Engagement:</h3>
              <p>
                Once the badging process is completed, we provide, as an
                additional service, a report for maintainers to enable them to
                further reflect on their DEI efforts. This supplemental report
                will enable maintainers to identify areas of improvement and
                opportunity. The report may prove helpful as the project badging
                program evolves to include support for subsequent badges.
                Maintainers who receive the DEI badge are encouraged to continue
                their DEI efforts, share experiences, and learn from others in
                the community.
              </p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>DEI.md File</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"div"}>
            <p>
              The DEI.md file is an essential component of the All In CHAOSS DEI
              badging initiative. It serves as a benchmark for open source
              projects to openly acknowledge and showcase their dedication to
              diversity, equity, and inclusion (DEI).
            </p>

            <p>
              The DEI.md file can be used by maintainers to explicitly express
              and self-reflect on their project&#39;s approach to DEI.
              Maintainers are encouraged to include relevant content that
              reflects their project&#39;s specific approaches and initiatives
              regarding diversity, equity, and inclusion within the DEI.md file.
              This may include outlining strategies, policies, and practices to
              foster a welcoming environment for all contributors.
            </p>

            <ul>
              <li>
                If using a development platform, place the DEI.md file in an
                organizationally available repository, similar to your{" "}
                <strong>CODE_OF_CONDUCT.md file</strong>
              </li>
              <li>
                If an organizational-level folder is not available, place the
                DEI.md file in a community repository
              </li>
              <li>
                Use the following <a href="##">DEI.md template</a> to develop
                your project DEI.md file.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>DEI Badge</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"div"}>
            <div className="badges">
              <img src={bronzeBadge} alt="Bronze badge" />
              <img src={silverBadge} alt="Silver badge" />
              <img src={goldBadge} alt="Gold badge" />
              <img src={platinumBadge} alt="Platinum badge" />
            </div>

            <div>
              <p>
                The All In CHAOSS DEI badging initiative currently offers one
                badge level: bronze. As the project evolves, it is our intention
                to include additional CHAOSS metrics in the DEI.md file as
                indicators of silver, gold, and platinum level badges. The All
                In CHAOSS DEI Project Badging process is intended to follow an
                incremental approach that requires the presence of one badge to
                apply for the next and an understanding of the criteria
                associated with each badge level. This will enable applicants to
                showcase their commitment, dedication, and consistent efforts in
                meeting the evolving DEI standards for each badge.
              </p>
              <div>
                <h3>Bronze Badge</h3>
                <p>
                  The bronze badge is the first-level badge. The badge primarily
                  focuses on how the project metrics provided in the DEI.md file
                  meet the basic requirements according to the CHAOSS DEI
                  metrics.
                </p>
                <h4>Criteria:</h4>
                <ul>
                  <li>Having a DEI.md file</li>
                  <li>
                    The presence of required metrics headers in the DEI.md file
                  </li>
                  <li>
                    The presence of details on how the project attends to the
                    four metrics: Project Access, Inclusive Leadership,
                    Communication Transparency, and Newcomer Experience metrics.
                  </li>
                </ul>
                <p>
                  Silver, Gold and Platinum Badges will be coming soon. Please
                  join us in our open and collaborative conversations when
                  considering what CHAOSS metrics would be best suited as
                  indicators of these badges. You can join the CHAOSS project
                  through their{" "}
                  <a href="https://join.slack.com/t/chaoss-workspace/shared_invite/zt-1fah5gu35-5oUQEPT32O2Zt~3MFVNMlw">
                    Slack workspace
                  </a>
                  .
                </p>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AboutDeiMobile;
