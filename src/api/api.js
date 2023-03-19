const axios = require('axios');
const moment = require('moment');

const getClosedIssuesWithEventTitle = async () => {
  const response = await axios.get(
    'https://api.github.com/repos/badging/event-diversity-and-inclusion/issues?state=closed'
  );
  const issues = response.data;
  const events = issues
    .filter((issue) => issue.title.includes('event'))
    .map((issue) => {
      const date = moment(issue.closed_at).format('MMM-DD-YYYY');
      const name = issue.title;
      const assignees = issue.assignees.map((assignee) => assignee.login).join(', ');
      const link = issue.html_url;
      const badge = ''; // placeholder for badge issued by img.shields.io

      return {
        date,
        name,
        assignees,
        link,
        badge,
      };
    });
  return events;
};

module.exports = { getClosedIssuesWithEventTitle };
