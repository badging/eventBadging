import React, { useState } from "react";
import "./ApplyForBadge.scss";

function ApplyForBadge() {
  const [values, setValues] = useState({
    // event type
    event: "",

    // Page 1
    eventDemographicsCommitment: false,
    eventDemographicsDetails: "",
    demographicsOptoutOptionExample: "",
    demographicsTextInputExample: "",

    // Page 2
    DICommitment: false,
    eventFeedbackPage: "",
    eventFeedbackUse: "",
    eventFeedbackFutureUse: "",
    eventAccesibilityInfo: "",
    futureAccomondationSuggestions: "",
    eventPlatformFutureAccessibility: "",

    // Page 3
    // In-Persion
    inPersonCommitment: false,
    childcareFacilities: "",
    otherFamilyFriendlinessPlans: "",
    familyFriendlinessLinks: "",

    // Virtual
    timeInclusionCommitment: false,
    preRecordingAbility: "",
    changeVideoQuality: "",

    // Page 4
    DATicketsAccessCommitment: false,
    DATicketTypes: "",
    DATicketQualificationCriteria: "",
    DATicketsLink: "",

    // Page 5 -> Code of Conduct
    CoCCommitment: false,
    CoCPostedAtVenue: "",
    CoCLink: "",
  });
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
              This event commits to Speaker Diversity & Inclusion.
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
              Provide an example of an opt-out option on the Event registration
              page if available. &#40;For example, the option of Prefer not to
              answer&#41;
              <input
                type="text"
                name="demographicsOptoutOptionExample"
                id="demographicsOptoutOptionExample"
                value={values.demographicsOptoutOptionExample}
                onChange={handleEventChange}
              />
            </label>
            <label>
              Provide an example of a demographics text input box on the Event
              registration page if available. &#40;For example, an alternative
              identity input for gender&#41;
              <input
                type="text"
                name="demographicsTextInputExample"
                id="demographicsTextInputExample"
                value={values.demographicsTextInputExample}
                onChange={handleEventChange}
              />
            </label>
            <p>
              Criteria:
              <br />
              Measuring Demographics - The Event has a process for measuring
              speaker demographics.
              <br />
              Opt-Out - The Event provides an opportunity to opt-out of
              providing demographic data.
              <br />
              Text Input - The Event provides a text box to input certain data
              such as Gender, Race, or Ethnicity
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
                name="DICommitment"
                id="DICommitment"
                value={values.DICommitment}
                onChange={handleEventChange}
              />
              This event commits to Attendee Diversity & Inclusion.
            </label>
            <label>
              Provide an example of the Event Feedback page if available.
              <input
                type="text"
                name="eventFeedbackPage"
                id="eventFeedbackPage"
                value={values.eventFeedbackPage}
                onChange={handleEventChange}
              />
            </label>
            <label>
              Is the event team using feedback from previous event&apos;s
              attendees, speakers, and volunteers to improve DEI at this event?
              (If so, provide an example)how
              <input
                type="text"
                name="eventFeedbackUse"
                id="eventFeedbackUse"
                value={values.eventFeedbackUse}
                onChange={handleEventChange}
              />
            </label>
            <label>
              Does the event team plan to use feedback from this event&apos;s
              attendees, speakers, and volunteers to improve DEI at future
              events? (If so, provide a summary of the strategy involved)
              <input
                type="text"
                name="eventFeedbackFutureUse"
                id="eventFeedbackFutureUse"
                value={values.eventFeedbackFutureUse}
                onChange={handleEventChange}
              />
            </label>
            <label>
              How can attendees learn more about accessibility at the event?
              <input
                type="text"
                name="eventAccesibilityInfo"
                id="eventAccesibilityInfo"
                value={values.eventAccesibilityInfo}
                onChange={handleEventChange}
              />
            </label>
            <label>
              Does the event platform allow attendees to suggest future
              accomodations for the event? (If yes, provide the process)
              <input
                type="text"
                name="futureAccomondationSuggestions"
                id="futureAccomodationSuggestions"
                value={values.futureAccomodationSuggestions}
                onChange={handleEventChange}
              />
            </label>
            <label>
              Will the event platform be accessible to attendees and speakers
              after the event? (If yes, provide the name of the platform)
              <input
                type="text"
                name="eventPlatformFutureAccessibility"
                id="eventPlatformFutureAccessibility"
                value={values.eventPlatformFutureAccessibility}
                onChange={handleEventChange}
              />
            </label>
            <p>
              Criteria: <br />
              Speaker Inclusivity - The Event requests feedback from speakers
              regarding Diversity & Inclusion.
              <br />
              Attendee Inclusivity - The Event requests feedback from attendees
              regarding Diversity & Inclusion.
              <br />
              Retention - The Event incorporates feedback from past events, or
              has a strategy to incorporate feedback into future iterations of
              the event.
              <br />
              Accessibility Requests - Attendees are able to inquire if
              accomodations are available and make suggestions for future
              accomodations at events.
              <br />
              Session Accessibility - Event attendees are able to access the
              event platform after the event.
            </p>
          </div>
        );
      case 3:
        if (values.event === "in-person") {
          return (
            <div>
              <h3>Family Friendliness</h3>
              <label>
                <input
                  type="checkbox"
                  name="familyFriendlinessCommitment"
                  id="familyFriendlinessCommitment"
                  value={values.familtyFriendlinessCommitment}
                  onChange={handleEventChange}
                />
                This event commits to Family Friendliness
              </label>
              <label>
                Does the Event provide childcare facilities for its attendees
                and speakers?
                <input
                  type="text"
                  name="childcareFacilities"
                  id="childcareFacilities"
                  value={values.childcareFacilities}
                  onChange={handleEventChange}
                />
              </label>
              <label>
                Provide an example of an opt-out option on the Event
                registration page if available. &#40;For example, the option of
                Prefer not to answer&#41;
                <input
                  type="text"
                  name="otherFamilyFriendlinessPlans"
                  id="otherFamilyFriendlinessPlans"
                  value={values.otherFamilyFriendlinessPlans}
                  onChange={handleEventChange}
                />
              </label>
              <label>
                Provide relevant links related to family friendliness at the
                Event.
                <input
                  type="text"
                  name="familyFriendlinessLinks"
                  id="familyFriendlinessLinks"
                  value={values.familyFriendlinessLinks}
                  onChange={handleEventChange}
                />
              </label>
              <p>
                Criteria: <br />
                Availability - The Event provides one or more
                services/facilities for families.
                <br />
                Findability - The information about the family friendly services
                provided at the Event is easy to find on the website.
              </p>
            </div>
          );
        } else if (values.event === "virtual") {
          return (
            <div>
              <h3>Time Inclusion for Virtual Events</h3>
              <label>
                <input
                  type="checkbox"
                  name="timeInclusionCommitment"
                  id="timeInclusionCommitment"
                  value={values.timeInclusionCommitment}
                  onChange={handleEventChange}
                />
                This event commits to Time Inclusion for Virtual Events.
              </label>
              <label>
                Are speakers able to pre-record their presentations, as opposed
                to presenting them live?
                <input
                  type="text"
                  name="preRecordingAbility"
                  id="preRecordingAbility"
                  value={values.preRecordingAbility}
                  onChange={handleEventChange}
                />
              </label>
              <label>
                Can attendees change video quality on the Event platform while
                viewing a presentation?
                <input
                  type="text"
                  name="changeVideoQuality"
                  id="changeVideoQuality"
                  value={values.changeVideoQuality}
                  onChange={handleEventChange}
                />
              </label>
              <p>
                Criteria: <br />
                Pre-Recording - Speakers have the ability to pre-record
                presentations. <br />
                Network Bandwidth Options - Attendees are provided with more
                than one option for video playback quality.
              </p>
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
                name="DATicketsAccessCommitment"
                id="DATicketsAccessCommitment"
                value={values.DATicketsAccessCommitment}
                onChange={handleEventChange}
              />
              This event commits to the Diversity Access Tickets.
            </label>
            <label>
              How many different types of diversity access tickets are available
              for the event?
              <input
                type="text"
                name="DATicketTypes"
                id="DATicketTypes"
                value={values.DATicketTypes}
                onChange={handleEventChange}
              />
            </label>
            <label>
              What are the criteria for qualifying for a diversity access
              ticket?
              <input
                type="text"
                name="DATicketQualificationCriteria"
                id="DATicketQualificationCriteria"
                value={values.DATicketQualificationCriteria}
                onChange={handleEventChange}
              />
            </label>
            <label>
              Provide a link to the page containing information about Diversity
              Access Tickets.
              <input
                type="text"
                name="DATicketsLink"
                id="DATicketsLink"
                value={values.DATicketsLink}
                onChange={handleEventChange}
              />
            </label>
            <p>
              Criteria: <br />
              Availability - The event provides one or more Diversity Access
              Tickets. <br />
              Ticket allocation - The Event has a process for allocating
              diversity access tickets. <br />
              Findability - The information about Diversity Access Tickets is
              public. <br />
            </p>
          </div>
        );
      case 5:
        return (
          <div>
            <h3>Code of Conduct at Event</h3>
            <label>
              <input
                type="checkbox"
                name="CoCCommitment"
                id="CoCCommitment"
                value={values.CoCCommitment}
                onChange={handleEventChange}
              />
              This event commits to the Code of Conduct at Event.
            </label>
            <label>
              Is the Code of Conduct posted at Event venue?
              <input
                type="text"
                name="CoCPostedAtVenue"
                id="CoCPostedAtVenue"
                value={values.CoCPostedAtVenue}
                onChange={handleEventChange}
              />
            </label>
            <label>
              Provide the link for the Event Code of Conduct
              <input
                type="text"
                name="CoCLink"
                id="CocLink"
                value={values.CoCLink}
                onChange={handleEventChange}
              />
            </label>
            <p>
              Criteria: <br />
              Pre-Recording - Speakers have the ability to pre-record
              presentations. <br />
              Network Bandwidth Options - Attendees are provided with more than
              one option for video playback quality.
            </p>
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
            checked={values.event === "in-person"}
            onChange={handleEventChange}
          />
          In-Person Event
        </label>
        <label>
          <input
            type="radio"
            name="event"
            value="virtual"
            checked={values.event === "virtual"}
            onChange={handleEventChange}
          />
          Virtual Event
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        <div>{renderPageContent()}</div>
        <div>
          {Boolean(values.event.trim()) && (
            <>
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
              {page === 5 && <button type="submit">Submit</button>}
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default ApplyForBadge;
