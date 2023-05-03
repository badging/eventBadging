import "./badgelevels.css";
import {
  goldBadge,
  silverBadge,
  passingBadge,
  pendingBadge,
  badgingLogo,
} from "../assets/images";

const BadgeLevels = () => {
  return (
    <section className="badgelevels-container">
      <article>
        <h1 className="motivation-heading">Motivation to apply</h1>
        <section>
          <p>
            The primary motivation to apply for a CHAOSS D&I Badge is the badge
            itself! The awarded event can show the open source community that
            they foster healthy D&I practices with a CHAOSS badge.
          </p>
          <img src={badgingLogo} alt="Badging" className="badging-logo" />
          <p>
            Applying for a badge supports D&I efforts within an open source
            community by expressing that your event is willing to improve the
            ways the work. These efforts can have affects to D&I practices in
            your event and even outside of your project space.
          </p>
        </section>
      </article>
      <article className="badging-levels-container">
        <h2 className="badging-levels">Badge Levels</h2>
        <p>
          Badges are assigned according to how the Reviewers mark out the review
          checklist according to the the information initially filled in by the
          Applicant. The percentages are calculated excluding the initial
          checks, based of the average of checklists of at least two reviewers.
        </p>
      </article>

      <table className="badgelevels-table">
        <thead>
          <th>Level</th>
          <th>Badge</th>
          <th>Percentage of Requirements Met</th>
        </thead>
        <tbody>
          <tr>
            <td>Pending</td>
            <td>
              <img
                src={pendingBadge}
                alt="Pending Badge"
                className="badge-image"
              />
            </td>
            <td>Less than 40%</td>
          </tr>
          <tr>
            <td>Passing</td>
            <td>
              <img
                src={passingBadge}
                alt="Passing Badge"
                className="badge-image"
              />
            </td>
            <td>Greater than or equal to 40% and less than 60%</td>
          </tr>
          <tr>
            <td>Silver</td>
            <td>
              <img
                src={silverBadge}
                alt="Silver Badge"
                className="badge-image"
              />
            </td>
            <td>Greater than 60% or less than 80%</td>
          </tr>
          <tr>
            <td>Gold</td>
            <td>
              <img src={goldBadge} alt="Gold Badge" className="badge-image" />
            </td>
            <td>Greater than 80%</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default BadgeLevels;
