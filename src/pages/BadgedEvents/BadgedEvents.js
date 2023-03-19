import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './BadgedEvents.scss';
import { Header, Footer } from "../../layouts";

const BadgedEvents = () => {
  const [tableData, setTableData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.github.com/repos/badging/event-diversity-and-inclusion/issues?state=closed');
      const issues = response.data.filter(issue => /\[[^\]]*event[^\]]*\]/i.test(issue.title) && issue.state === 'closed');
      const data = await Promise.all(issues.map(async issue => {
        const commentsResponse = await axios.get(issue.comments_url);
        const botComments = commentsResponse.data.filter(comment => comment.user.login === 'badging-bot[bot]' && comment.body.includes('img.shields.io'));
        let badge = '';
        if (botComments.length > 0) {
          const regex = /https:\/\/img\.shields\.io\/badge\/(.*)/;
          const matches = botComments[0].body.match(regex);
          if (matches && matches.length > 1) {
            badge = matches[0];
          }
        }
        return {
          id: issue.number,
          eventName: issue.title.replace(/\[[^\]]*\]/g, '').trim(),
          date: new Date(issue.closed_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          badge,
          reviewers: issue.assignees,
          issueLink: issue.html_url,
        };
      }));
      setTableData(data);
    };

    fetchData();
  }, []);

  const rowsPerPageOptions = [5, 10, 15, 20];

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleRowsPerPageChange = e => {
    setRowsPerPage(parseInt(e.target.value));
    setPageNumber(0);
  };

  const handleSearchTermChange = e => {
    setSearchTerm(e.target.value);
    setPageNumber(0);
  };

  const filteredTableData = tableData.filter(event => event.eventName.toLowerCase().includes(searchTerm.toLowerCase()));

  const pageCount = Math.ceil(filteredTableData.length / rowsPerPage);

  return (
    <>
      <Header/>
      <h1>DEI Badged Events</h1>

      <div className="search-container">
        <input type="text" placeholder="Search events" value={searchTerm} onChange={handleSearchTermChange} />
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Event Name</th>
            <th>Badge</th>
            <th>Reviewers</th>
            <th>Application Link</th>
          </tr>
        </thead>
        <tbody>
          {filteredTableData.slice(pageNumber * rowsPerPage, (pageNumber + 1) * rowsPerPage).map(event => (
            <tr key={event.id}>
              <td>{event.date}</td>
              <td>{event.eventName}</td>
              <td><img src={event.badge} alt="badge" /></td>
              <td>
                {event.reviewers.map((reviewer, index) => (
                  <React.Fragment key={reviewer.id}>
                    {reviewer.login}
                    {index !== event.reviewers.length - 1 && ', '}
                  </React.Fragment>
                ))}
              </td>
              <td><a href={event.issueLink}>#{event.id}</a></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-container">
        <div className="rows-per-page-container">
          Rows per page:
          <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
            {rowsPerPageOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
      <Footer/>
    </>
  );
};

export default BadgedEvents;