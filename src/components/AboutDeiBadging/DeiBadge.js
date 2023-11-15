import {
  bronzeBadge,
  // goldBadge,
  // silverBadge,
  // platinumBadge,
} from '../../assets/images';

const DeiBadge = () => {
  return (
    <div className="dei__badges ">
      <h2 id="dei-badges">DEI Badges</h2>

      <div className="badges">
        <img src={bronzeBadge} alt="Bronze badge" />
        {/* commented out for future use */}
        {/* <img src={silverBadge} alt="Silver badge" />
        <img src={goldBadge} alt="Gold badge" />
        <img src={platinumBadge} alt="Platinum badge" /> */}
      </div>

      <div>
        <p>
          The All In CHAOSS DEI badging initiative currently offers one badge
          level: bronze. As the project evolves, it is our intention to include
          additional CHAOSS metrics in the DEI.md file as indicators of silver,
          gold, and platinum level badges. The All In CHAOSS DEI Project Badging
          process is intended to follow an incremental approach that requires
          the presence of one badge to apply for the next and an understanding
          of the criteria associated with each badge level. This will enable
          applicants to showcase their commitment, dedication, and consistent
          efforts in meeting the evolving DEI standards for each badge.
        </p>
        <div>
          <h3>Bronze Badge</h3>
          <p>
            The bronze badge is the first-level badge. The badge primarily
            focuses on how the project metrics provided in the DEI.md file meet
            the basic requirements according to the CHAOSS DEI metrics.
          </p>
          <h4>Criteria:</h4>
          <ul>
            <li>Having a DEI.md file</li>
            <li>The presence of required metrics headers in the DEI.md file</li>
            <li>
              The presence of details on how the project attends to the four
              metrics: Project Access, Inclusive Leadership, Communication
              Transparency, and Newcomer Experience metrics.
            </li>
          </ul>
          <p>
            Silver, Gold and Platinum Badges will be coming soon. Please join us
            in our open and collaborative conversations when considering what
            CHAOSS metrics would be best suited as indicators of these badges.
            You can join the CHAOSS project through their{' '}
            <a href="https://join.slack.com/t/chaoss-workspace/shared_invite/zt-1fah5gu35-5oUQEPT32O2Zt~3MFVNMlw">
              Slack workspace
            </a>
            .
          </p>
        </div>
        {/* <div>
					<h3>Silver Badge</h3>
					<p>
						Building upon the foundation established with the Bronze badge,
						applicants are required to fulfil additional criteria and
						demonstrate an expanded level of commitment to DEI. The silver badge
						centers on the ethical use of computing automation based on CHAOSS
						metrics models. It focuses more on the collaborative and inclusive
						needs of the project according to CHAOSS metrics. One can only apply
						for a Silver badge after earning the Bronze badge and receiving the
						DEI scan report.
					</p>
					<h4>Criteria:</h4>
					<ul>
						<li>Presence of the DEI.md file</li>
						<li>
							Extensive response to the Bronze badge report implementation
						</li>
						<li>
							Presence of headings on Inclusivity reports and Contributor
							participation metrics.
						</li>
					</ul>
				</div>
				<div>
					<h3>Gold Badge</h3>
					<p>
						As applicants advance to the Gold badge level, they are expected to
						fully understand and implement DEI best practices in their
						community.
					</p>
					<h4>Criteria:</h4>
					<ul>
						<li>Presence of the DEI.md file</li>
						<li>
							Extensive response to the Bronze and Silver badge report
							implementations
						</li>
					</ul>
				</div>
				<div>
					<h3>Platinum Badge</h3>
					<p>
						The highest level in the badging process, the Platinum badge
						represents exceptional mastery, leadership, and sustained excellence
						in the relevant area.
					</p>
					<h4>Criteria:</h4>
					<ul>
						<li>Presence of the DEI.md file</li>
						<li>
							Extensive response to the Bronze, Silver, and Gold badge report
							implementations
						</li>
					</ul>
				</div> */}
      </div>
    </div>
  );
};

export default DeiBadge;
