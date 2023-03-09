export const beforeApplyData = [
    {
        tabLabel: "Applicants Role",
        content: [
            { header: "Responsibilities" },
            { paragraph: `Applicants would be the primary stakeholders for any CHAOSS Badging review. They will be responsible for:` },
            { list: [
                "Applying for an Event/Project related badge.",
                "Making improvements according to reviewer feedback.",
                "Possibly be the single point of contact between their own community, other participants and CHAOSS."
            ] },
            { header: "GitHub Permission" },
            { paragraph: "Things applicants will be able to do:"},
            { list: [
                "Submit details required for a Badging review.",
                "Edit details and make improvements in their application.",
            ]},
            { paragraph: "Things applicants will not be able to do:"},
            { list: [   
                "Edit the Review Checklist."
            ]},
        ]
    },
    {
        tabLabel: "Submission Requirements",
        content: [
            { header: " Working with checklists" },
            { paragraph: `A CHAOSS Badging application starts when an Applicant opens an issue on the event badging repository. 
                        They fill out a form to create a GitHub issue, which contains the information a reviewer looks at. Upon 
                        being assigned an issue, a checklist is generated in the form of a comment. This will contain the name of the reviewer.
                        During a review, a Reviewer would analyse the information given by an Applicant using the Review Checklist. ` },

            { header: "Guidelines" },
            { paragraph: "For all submissions" },
            // { list: [
            //     "Make sure the Initial checks are met. These are the basic requirements which help to ensure that the application is at a bare minimum standard.",
            //     "Mark your observations according to the Review Checklist, and give feedback on how an application can be improved if certain checks are not met.",
            //     "If you have feedback outside of the scope of what the review checklist asks for, create a new comment informing the applicant about that."
            //     ],
            // },
            // {   paragraph: "For Events" },
            // {   list: [
            //     "Currently, there are five metrics which can be applied for by an Event Badging applicant.",
            //     "Event badges are assigned according to four Badge levels.",
            //     `Event reviews go on until all the metrics the Applicant gave their statement for qualify all the given checks. 
            //     For example, if an applicant gave their statement for adhering to Code of Conduct and Speaker. Demographic metrics
            //     (which form the first metric set), their Badge status would be pending until the qualitative checks related to both these metrics are passed.`
            // ]},
        ]
        
    }

]
