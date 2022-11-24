import PassingBadge from "../../assets/badges/passing.svg";
import PendingBadge from "../../assets/badges/pending.svg";
import GoldBadge from "../../assets/badges/gold.svg";
import SilverBadge from "../../assets/badges/silver.svg";

const BadgeLevels = () => {
  return (
    <section>
      <article>
        <h1>Motivation to apply</h1>
        <section>
          <p>
            The primary motivation to apply for a CHAOSS D&I Badge is the badge
            itself! The awarded event can show the open source community that
            they foster healthy D&I practices with a CHAOSS badge.
          </p>
          <img src={PassingBadge} alt="Passing Badge" />
          <p>
            Applying for a badge supports D&I efforts within an open source
            community by expressing that your event is willing to improve the
            ways the work. These efforts can have affects to D&I practices in
            your event and even outside of your project space.
          </p>
        </section>
      </article>
      <article>
        <h1>Badge Levels</h1>
        <p>
          Badges are assigned according to how the Reviewers mark out the review
          checklist according to the the information initially filled in by the
          Applicant. The percentages are calculated excluding the initial
          checks, based of the average of checklists of at least two reviewers.
        </p>
      </article>
      <article>
        <section>
          <p>Level</p>
          <p>Badge</p>
          <p>Percentage of Requirements Met</p>
        </section>
        <section>
          <p>Pending</p>
          <img src={PendingBadge} alt="Pending Badge" />
          <p>Less than 40%</p>
        </section>
        <hr />
        <section>
          <p>Passing</p>
          <img src={PassingBadge} alt="Passing Badge" />
          <p>Greater than or equal to 40% and less than 60%</p>
        </section>
        <hr />
        <section>
          <p>Silver</p>
          <img src={SilverBadge} alt="Silver Badge" />
          <p>Greater than 60% or less than 80%</p>
        </section>
        <hr />
        <section>
          <p>Gold</p>
          <img src={GoldBadge} alt="Gold Badge" />
          <p>Greater than 80%</p>
        </section>
      </article>
    </section>
  );
};

export default BadgeLevels;
