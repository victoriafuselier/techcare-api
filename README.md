# techcare-api

This project was built to showcase my front end web development skills to a prospective employer. Featured skills include matching my project's design to the AdobeXD template provided to me and fetching data from an API provided to me to populate the site with mock patient data.

 
SETUP INSTRUCTIONS

1. Before you begin, please make sure you have the following installed:
    Node.js (https://nodejs.org/en) *version ____
    npm (https://www.npmjs.com/) *comes with Node.js*
2. Open a terminal or command prompt and change to the project directory: 
    "cd path/to/project-directory"
3. Install the required Node.js packages:
    "npm install"
4. Copy the .env.example file to a new file named .env. Update the .env file with your actual environment variables.
5. Start the server using:
    "node src/index.js"
6. Navigate to http://localhost:3000 to view the site.


TROUBLESHOOTING

If having problems when setting up, please try the following:

-Check that you are using compatible versions of Node.js and npm.
-Verify that your environment variables are properly set up in a .env file matching the format of .env.example.
-Verify that all dependencies are installed.
-Check the terminal output for error messages and follow provided suggestions.


ADDITIONAL NOTES

- My goal was to complete this project in a timely manner while still taking the time to do extra coding deemed unnecessary in instructions when it piqued my interest, helped code appear more applicable to a real-life workplace setting, and generally helped build my skills as a developer. 

- With that goal in mind, I did not program functionality for the search bar in 'Patients' section, as suggested in the project instructions. 

- I did, however, program the site to display data for whichever patient is selected from left pane in 'Patients' section. I encourage reviewers to check out that feature. 

- I wasn't sure if reviewers expected me to program the button labeled 'Last 6 months' on the chart in the 'Blood Pressure' section of the 'Diagnosis History' section, but I had experience with dynamic charts using charts.js with similar buttons on a similar project, so I went ahead and programmed that button. Please hit that button and navigate to 'Last 6 months' to see that particular data set. I felt it made sense to make 'All available data' the default to display since I incorporated the ability to view data for all patients in the 'Patients' list, since the amount of data varies for each person.

- Since I was only provided a mockup for desktop view, I strictly coded this web page for desktop view. I did not use media queries to make this responsive since I didn't have mockups and wasn't really sure what the intended layout would be for mobile/tablet breakpoints. I didn't want to take extra time to create those designs and code that if it wasn't relative to the assessment and would prolong this project, but I'd love to if reviewers are interested in seeing my skills on responsive layout!

- This project was a one-page set up, so the assignment was to code the 'Patients' page. The navigation buttons/links are set up correctly to incorporate other pages when they are built, but they are not functional.

- I'm not sure if reviewers will take into account the length of time I took to turn in, but I would like to note that coming into this project, I really had minimal experience with Node.js and zero experience on how to safely store my credentials in a .env file. I ended up learning a ton from various resources on how to make a .env file, fetch the data from the provided API, serve that data via an API I created, and accessing that api via front end code to use it in the project while protecting senstive information! While this part was challenging for me and delayed my project submission by a couple days, I felt that it was really gratifying since the majority of my techdegree coursework focused strictly on front end development. I am proud that I did not resign to turning in project with hard-coded credentials and I took the extra time to learn and implement the .env file strategy.