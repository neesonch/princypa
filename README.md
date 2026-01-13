# Princypa - Systems Dashboard

## Setup

Clone and install repo:

`git clone https://github.com/neesonch/princypa`

`cd princypa && npm install`

## Run locally

Navigate to root folder of project and start app with:

`npm run dev`

(Tested using npm v23.6.1)

If not automatically redirected, navigate to http://localhost:5173/ in browser to view.

## View live version

https://neesonch.github.io/princypa

## Time Spent

I spent approximately 4 hours on the core implementation, in line with the guidance provided.
I then spent additional time exploring alternative approaches, refining the UI, and polishing the solution, bringing the total time to around 6-8 hours.

## Assumptions

- A system should be included in the _System Type_ view if at least one privacy declaration matches the active filters (rather than combining matches across declarations).
- For the _Data Use_ view, only the data use system groups that match the active data use filters are rendered in the view panel (Systems can appear multiple times in this view - once for each active and matching data use)
- I made no special provisions for handling duplicate data, and in the current implementation all instances of duplicated data (e.g., the two instances of `orders_service` in the provided mock data) will simply be rendered. In a real-world scenario, I would discuss with the product and design stakeholders how duplicate data should be handled.

## Implementation Notes & Trade-offs

- Used **Vite** to quickly bootstrap a React / Typescript application
- Used **Material UI** library, ideal for rapidly composing and iterating a prototype like this one with off-the-shelf components. Similarly, I used in-line styling using the `sx` for MUI components in the interest of expediency - for a production project, I would investigate a more structured, scalable, and maintainable approach to styling.
- Used **Zustand** to handle application state management - a good balance between being lightweight enough to quickly get up and running, while being flexible and powerful enough to handle the prototype being scaled into a production application.
- The filtering options displayed in the left-hand control panel (data use and data category) are dynamically generated from parsing the mock data, and will thus automatically update if new data uses or categories are added, changed, or removed
- Both grouping modes (by system type and by data use) share a common data shape, allowing the rendering logic to remain view-agnostic.
- As per one of the suggested additional features, a full system description for each system can be viewed by clicking on the card header to expand it
- My initial solution involved displaying the system groups as columns, with each column containing system cards stacked vertically. This resulted in lots of unused space on the screen, however. I then tried the approach of setting a height limit on each column and making them scrollable to view any cards that overflowed this limit, but I felt the look and feel of this UX was clunky. I settled on reconfiguring the layout to use a 'swimlanes' approach, where each system group contains the system cards stacked horizontally and wrapping to a new line if necessary. I think this solution is more efficient with the available layout space, and easier on the eye.
- Given the time constraints of the exercise, I chose to focus on aspects such as sturdy handling of application state and data flow and a minimalist but intuitive UI. Features and refinements I would have explored next include:

  - Adding the suggested feature of visualizing system dependencies by rendering arrows between systems
  - Moving more of the filtering and grouping logic out of the display component (`<SystemsDetails />`) and closer to the Zustand store
  - Automated testing, including unit tests for modular logic such as the contents of the utils file and UI integration tests using Cypress or Playwright to test UI behaviour
  - Accessibility, particularly appropriate ARIA labels
  - Enhancing the responsiveness of the design to make it suitable for viewing on mobile devices

  ## Feedback

  A very enjoyable excercise, with well-pitched scope and complexity that provided a good level of challenge and an opportunity to demonstrate one's engineering skills, thought process, and approach! As hinted at in the **Time Spent**, I would say that perhaps a little more time could be allocated/estimated for the exercise - while the core requirements are very achievable within the suggested window, I found that allowing myself additional time to explore alternatives, refine the UI, and polish the solution significantly improved the overall outcome — something many engineers will instinctively want to do, especially when submitting an exercise for assessment. Making it explicit that this kind of optional refinement is welcome (but not expected) might help reduce any uncertainty for candidates.
