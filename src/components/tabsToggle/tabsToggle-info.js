export const tabsToggleInfo = [
	{
		title: 	"Applicants Role",
		sections: [
			{
				title: "Working with checklists",
				body: `A CHAOSS Badging application starts when an Applicant opens an issue on the event 
						  badging repository. They fill out a form to create a GitHub issue, which contains 
							the information a reviewer looks at. Upon being assigned an issue, a checklist is 
							generated in the form of a comment. This will contain the name of the reviewer.
							During a review, a Reviewer would analyse the information given by an Applicant using the Review Checklist. `
			}, 
			{
				title: "Guidelines",
				body: [
					{ 
						ul: "For All Submissions:",
						li: [
							`Make sure the Initial checks are met. These are the basic requirements 
							which help to ensure that the application is at a bare minimum standard.`,

							`Mark your observations according to the Review Checklist, and give feedback 
							on how an application can be improved if certain checks are not met.`,

							`If you have feedback outside of the scope of what the review checklist asks for,
							 create a new comment informing the applicant about that.`
						],
					}, {
						ul:  "For Events:",
						li: [
							'Currently, there are five metrics which can be applied for by an Event Badging applicant.',

							'Event badges are assigned according to four Badge levels.',

							`Event reviews go on until all the metrics the Applicant gave their statement for qualify all the given checks. 
							For example, if an applicant gave their statement for adhering to Code of Conduct and Speaker. 
							Demographic metrics (which form the first metric set), their Badge status would be pending 
							until the qualitative checks related to both these metrics are passed.`
						]
					}
				]
			}
		]
	}, 
	{
		title: 	"Submission Requirements",
	},
	{
		title: 	"Submission Guidelines",
	}
]