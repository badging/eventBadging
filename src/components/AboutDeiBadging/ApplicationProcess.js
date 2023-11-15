import React from "react";

const ApplicationProcess = () => {
  return (
    <div className="application_process">
      <h2 id="application-process">How It Works</h2>
      <div>
        <h3>Self-Assessment and Documentation:</h3>
        <p>
          Before applying for a DEI badge, maintainers or project admins are
          encouraged to conduct a self-assessment of their project&#39;s DEI
          efforts based on the following <strong>CHAOSS DEI metrics:</strong>{" "}
          Project Access, Inclusive Leadership, Communication Transparency, and
          Newcomer Experience. After the reflective process, maintainers can
          document how the project attends to and prioritizes DEI around these
          areas in a markdown file called the <a href="##">DEI.md file</a>. This
          DEI.md file should exist within the project&#39;s repository for easy
          feedback from the community.
        </p>
      </div>
      <div>
        <h3>All in CHAOSS DEI Badge Application:</h3>
        <p>
          Once the DEI.md file is published and publicly available, project
          maintainers can proceed to apply here. The applicant must be an admin
          or maintainer of the project, and the repository that holds the DEI.md
          file must be specified.
        </p>
      </div>
      <div>
        <h3>Badging Evaluation:</h3>
        <p>
          The review follows an automated process in which a CHAOSS bot scans
          the project repository for the presence of a DEI.md file. The bot will
          review the DEI.md file for relevant information provided by the
          maintainer and its alignment with the CHAOSS DEI metrics stated in the{" "}
          <a href="##">DEI.md template</a> to determine eligibility for the
          badge. Upon successful review of the DEI.md file, a project badge will
          be issued. The four CHAOSS metrics used in the DEI.md file include:
        </p>
      </div>
      <div>
        <h3>Recognition and Badging:</h3>
        <p>
          Projects that meet the established criteria will receive the All In
          CHAOSS DEI badge, which can be prominently displayed on the
          project&#39;s website, documentation, or other relevant platforms. The
          badge signifies the project&#39;s commitment to DEI and highlights its
          adherence to DEI best practices.
        </p>
      </div>
      <div>
        <h3>Continued Engagement:</h3>
        <p>
          Once the badging process is completed, we provide, as an additional
          service, a report for maintainers to enable them to further reflect on
          their DEI efforts. This supplemental report will enable maintainers to
          identify areas of improvement and opportunity. The report may prove
          helpful as the project badging program evolves to include support for
          subsequent badges. Maintainers who receive the DEI badge are
          encouraged to continue their DEI efforts, share experiences, and learn
          from others in the community.
        </p>
      </div>
    </div>
  );
};

export default ApplicationProcess;
