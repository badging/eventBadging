import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./BadgedEvents.scss";
import { Header, Footer } from "../../layouts";
import {
  goldBadgeSVG,
  silverBadgeSVG,
  passingBadgeSVG,
  pendingBadgeSVG,
  noBadgeSVG,
} from "../../assets/images";
import { useLocation } from "react-router-dom";
import { PathTracker } from "../../components";

const BadgedEvents = () => {
  const [tableData, setTableData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  console.log(location);

  // extracts url for type of badge and returns relevent icon
  const extractTypeReturnIcon = (url) => {
    if (url.includes("Gold")) return goldBadgeSVG;
    if (url.includes("Silver")) return silverBadgeSVG;
    if (url.includes("Passing")) return passingBadgeSVG;
    if (url.includes("Pending")) return pendingBadgeSVG;
    return noBadgeSVG;
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios.get(
        "https://api.github.com/repos/badging/event-diversity-and-inclusion/issues?state=closed"
      );
      const issues = response.data.filter(
        (issue) =>
          /\[[^\]]*event[^\]]*\]/i.test(issue.title) && issue.state === "closed"
      );
      const data = await Promise.all(
        issues.map(async (issue) => {
          const commentsResponse = await axios.get(issue.comments_url);
          const botComments = commentsResponse.data.filter(
            (comment) =>
              comment.user.login === "badging-bot[bot]" &&
              comment.body.includes("img.shields.io")
          );
          let badge = "";
          if (botComments.length > 0) {
            const regex = /https:\/\/img\.shields\.io\/badge\/(.*)/;
            const matches = botComments[0].body.match(regex);
            if (matches && matches.length > 1) {
              badge = matches[0];
            }
          }
          return {
            id: issue.number,
            eventName: issue.title.replace(/\[[^\]]*\]/g, "").trim(),
            date: new Date(issue.closed_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            badge,
            reviewers: issue.assignees,
            issueLink: issue.html_url,
          };
        })
      );
      setTableData(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const rowsPerPageOptions = [5, 10, 15, 20];

  // add your logic for filter BTN
  const handleFilter = () => {};

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setPageNumber(0);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    setPageNumber(0);
  };

  const filteredTableData = tableData.filter((event) =>
    event.eventName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredTableData.length / rowsPerPage);

  //pagination items count
  const pageStartingItemNumber = pageNumber * rowsPerPage;
  const pageEndingItemNumber = pageNumber * rowsPerPage + rowsPerPage;
  const allItemsCount = filteredTableData.length;

  const showingFrom = pageNumber == 0 ? 1 : pageStartingItemNumber;
  const showingTo =
    pageEndingItemNumber >= allItemsCount
      ? allItemsCount
      : pageEndingItemNumber;

  return (
    <>
      <Header />
      <main className="BadgedEvents">
        <div className="BadgedEvents__pathTracker">
          <PathTracker />
        </div>
        <section className="BadgedEvents__content">
          <div className="BadgedEvents__header">
            <h1 className="BadgedEvents__title">DEI Badged Events</h1>
            <div className="BadgedEvents__actions">
              <div
                role="button"
                onKeyDown={(e) => console.log(e.eventPhase)}
                tabIndex={0}
                onClick={handleFilter}
                className="BadgedEvents__actions--filterBtn"
              >
                {/* form Box icons--you can replace this with your own icon */}
                <i className="bx bx-filter"></i>
                <span>Filter</span>
              </div>
              <div className="BadgedEvents__actions--serachBox">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchTermChange}
                />
                <i className="bx bx-search bx-rotate-90"></i>
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="loaderCon">
              <div className="loader"></div>
            </div>
          ) : (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Event Name</th>
                    <th>Badge</th>
                    <th>Reviewers</th>
                    <th>Application Issues Link</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTableData
                    .slice(
                      pageNumber * rowsPerPage,
                      (pageNumber + 1) * rowsPerPage
                    )
                    .map((event) => (
                      <tr key={event.id}>
                        <td>{event.date}</td>
                        <td title={event.eventName}>
                          {event.eventName.slice(0, 27)}
                          {event?.eventName?.length > 27 && " ..."}
                        </td>
                        <td>
                          <img
                            src={extractTypeReturnIcon(event.badge)}
                            alt="badge"
                          />
                        </td>
                        <td className="reviewers">
                          {event.reviewers[0].login}
                          {event.reviewers[1]?.login && " ..."}
                        </td>
                        <td>
                          <a href={event.issueLink}>#{event.id}</a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>

              <div className="pagination-container">
                <div className="rows-per-page-container">
                  <span>View </span>
                  <select
                    className="selectPerPage"
                    value={rowsPerPage}
                    onChange={handleRowsPerPageChange}
                  >
                    {rowsPerPageOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <span>Entries Per Page</span>
                </div>

                <div className="paginationAction">
                  <span>
                    Showing {showingFrom} to {showingTo} of {allItemsCount}
                  </span>
                  <ReactPaginate
                    previousLabel={
                      <i className="bx bx-chevron-left bx-flip-vertical pgActionIcon"></i>
                    }
                    nextLabel={
                      <i className="bx bx-chevron-right bx-flip-vertical pgActionIcon"></i>
                    }
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                  />
                </div>
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BadgedEvents;
