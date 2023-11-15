import React from "react";

const DeiFile = () => {
  return (
    <div className="dei__file ">
      <h2 id="dei-file">DEI.md File</h2>
      <p>
        The DEI.md file is an essential component of the All In CHAOSS DEI
        badging initiative. It serves as a benchmark for open source projects to
        openly acknowledge and showcase their dedication to diversity, equity,
        and inclusion (DEI).
      </p>

      <p>
        The DEI.md file can be used by maintainers to explicitly express and
        self-reflect on their project&#39;s approach to DEI. Maintainers are
        encouraged to include relevant content that reflects their project&#39;s
        specific approaches and initiatives regarding diversity, equity, and
        inclusion within the DEI.md file. This may include outlining strategies,
        policies, and practices to foster a welcoming environment for all
        contributors.
      </p>

      <ul>
        <li>
          If using a development platform, place the DEI.md file in an
          organizationally available repository, similar to your{" "}
          <strong>CODE_OF_CONDUCT.md file</strong>
        </li>
        <li>
          If an organizational-level folder is not available, place the DEI.md
          file in a community repository
        </li>
        <li>
          Use the following <a href="##">DEI.md template</a> to develop your
          project DEI.md file.
        </li>
      </ul>
    </div>
  );
};

export default DeiFile;
