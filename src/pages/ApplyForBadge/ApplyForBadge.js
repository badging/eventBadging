import React, { useState } from 'react';
import './ApplyForBadge.scss';

function ApplyForBadge() {
  const [values, setValues] = useState({
    event: '',
    eventDemographicsCommitment: false,
    eventDemographicsDetails: '',
    demographicsOptoutOptionExample: '',
    demographicsTextInputExample: '',
  })
  const [page, setPage] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    // do something with the date and event type
  }

  function handleEventChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  function handleNextPage() {
    setPage(page + 1);
  }

  function handlePreviousPage() {
    setPage(page - 1);
  }

  function renderPageContent() {
    if (!values.event) {
      return null;
    }

    switch (page) {
      case 1:
        return (
          <div>
            <h3>Event Demographics</h3>
            <label>
              <input
                type="checkbox"
                name="eventDemographicsCommitment"
                id="eventDemographicsCommitment"
                value={values.eventDemographicsCommitment}
                onChange={handleEventChange}
              />
              Event Demographics
            </label>
            <label>
              Details the process of measuring Event Demographics
              <input
                type="text"
                name="eventDemographicsDetails"
                id="eventDemographicsDetails"
                value={values.eventDemographicsDetails}
                onChange={handleEventChange}
              />
            </label>
            <label>
              Provide an example of an opt-out option on the Event registration page if available.
              &#40;For example, the option of Prefer not to answer&#41;
              <input
                type='text'
                name='demographicsOptoutOptionExample'
                id='demographicsOptoutOptionExample'
                value={values.demographicsOptoutOptionExample}
                onChange={handleEventChange}
              />
            </label>
            <label>
              Provide an example of a demographics text input box on the Event registration page if available.
              &#40;For example, an alternative identity input for gender&#41;
              <input
                type='text'
                name='demographicsTextInputExample'
                id='demographicsTextInputExample'
                value={values.demographicsTextInputExample}
                onChange={handleEventChange}
              />
            </label>
            <p>
              Criteria:<br />
              Measuring Demographics - The Event has a process for measuring speaker demographics.<br />
              Opt-Out - The Event provides an opportunity to opt-out of providing demographic data.<br />
              Text Input - The Event provides a text box to input certain data such as Gender, Race, or Ethnicity
            </p>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Inclusive Experience at the Event</h3>
            <label>
              <input
                type="checkbox"
                name="inclusive-experience"
                value="inclusive-experience"
              />
              Inclusive Experience at the Event
            </label>
          </div>
        );
      case 3:
        if (values.event === 'in-person') {
          return (
            <div>
              <h3>Code of Conduct</h3>
              <label>
                <input
                  type="checkbox"
                  name="code-of-conduct"
                  value="code-of-conduct"
                />
                Code of Conduct
              </label>
            </div>
          );
        } else if (values.event === 'virtual') {
          return (
            <div>
              <h3>Time Inclusion for Virtual Events</h3>
              <label>
                <input
                  type="checkbox"
                  name="time-inclusion"
                  value="time-inclusion"
                />
                Time Inclusion for Virtual Events
              </label>
            </div>
          );
        }
        break;
      case 4:
        return (
          <div>
            <h3>Diversity Access Tickets</h3>
            <label>
              <input
                type="checkbox"
                name="diversity-access-tickets"
                value="diversity-access-tickets"
              />
              Diversity Access Tickets
            </label>
          </div>
        );
      case 5:
        return (
          <div>
            <h3>Family Friendliness</h3>
            <label>
              <input
                type="checkbox"
                name="family-friendliness"
                value="family-friendliness"
              />
              Family Friendliness
            </label>
            <button type="submit">Submit</button>
          </div>
        );
      default:
        return null;
    }
  }



  return (
    <div>
      <h2>Apply for Badge</h2>
      <div>
        <label>
          <input
            type="radio"
            name="event"
            value="in-person"
            checked={values.event === 'in-person'}
            onChange={handleEventChange}
          />
          In-Person Event
        </label>
        <label>
          <input
            type="radio"
            name="event"
            value="virtual"
            checked={values.event === 'virtual'}
            onChange={handleEventChange}
          />
          Virtual Event
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        <div>{renderPageContent()}</div>
        <div>
          {page > 1 && (
            <button type="button" onClick={handlePreviousPage}>
              Previous
            </button>
          )}
          {page < 5 && (
            <button type="button" onClick={handleNextPage}>
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ApplyForBadge;
