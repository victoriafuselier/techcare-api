# techcare-api

This project was built to showcase my front end web development skills to a prospective employer. Featured skills include matching my project's design to the AdobeXD template provided and fetching data from the API provided to populate the site with mock patient data.

 
SETUP INSTRUCTIONS

1. Before you begin, please make sure you have the following installed:
        Node.js (https://nodejs.org/en) *version 20.17.0 or later
        npm (https://www.npmjs.com/) *version 10.8.2 or later *comes with Node.js
    Note: You can check which versions of Node.js and npm you currently have installed using these commands:
        node -v
        npm -v
2. Open a terminal or command prompt and change to the project directory using this command: 
    cd path/to/project-directory-named-techcare-skills-test
3. In terminal or command prompt, install the required Node.js packages listed in the package.json file using this command:
    npm install
4. Copy the .env.example file to a new file named .env in the root folder of the project. 
5. Update the .env file with your actual environment variables.
6. Start the server using Node.js with this command:
    node src/index.js
7. Open browser and navigate to http://localhost:3000 to view the webpage.


TROUBLESHOOTING

If encountering issues during setup, please check the following:

- Verify that you are using compatible versions of Node.js and npm.
- Verify that your environment variables are accurately set up in a .env file that matches the format of .env.example.
- Verify that all dependencies listed in package.json are installed.
- Check the terminal output for error messages and follow provided suggestions.


ADDITIONAL NOTES

- My goal was to complete this project in a timely manner while still taking the time to do extra coding deemed unnecessary in instructions if and when it piqued my interest, helped code appear more applicable to a real-life workplace setting, or generally helped build my skills as a developer. 

- I did not program functionality for the search bar in 'Patients' section, as suggested in the project instructions. 

- I did program the webpage to display data for whichever patient is selected from the list in 'Patients' section. I felt this was within my scope of knowledge, achievable within a realistic timeframe, and great practice for me. I encourage reviewers to check out that feature. 

- I wasn't sure if I was expected to program the button labeled 'Last 6 months' on the chart in the 'Blood Pressure' portion of the 'Diagnosis History' section. Having experience with dynamic charts using charts.js on a similar project, I decided to program that button. Please hit the 'All available data' button and navigate to 'Last 6 months' to see that particular data set for the default patient 'Jessica Taylor'. I felt it made sense to make 'All available data' the default amount of data to display since I incorporated the ability to view data for all patients and the amount of data points varies for each person.

- Because I was only provided a mockup for desktop view, I strictly coded this web page for desktop view. I did not use media queries to make this page responsive since I didn't have mockups for mobile and tablet breakpoints and wasn't really sure what the intended layout would be. I didn't want to prolong the project timeframe to create those designs and code that if it wasn't relevant to this assessment, but I'd love to do so if reviewers are interested in seeing my skills on responsive layout!

- This project was a one-page set up, so the assignment was to code the 'Patients' page. The navigation buttons (links) in the header navigation are set up correctly to incorporate other hypothetical pages (i.e. 'Overview', 'Schedule', etc.), but they are not functional.

- Coming into this project, I had minimal experience with Node.js and zero experience on how to safely store my credentials in a .env file. I ended up learning a ton from various resources on how to make a .env file, fetch the data from the provided API, serve that data via an API I created, and access my api via front end code to use the data in my project.. effectively protecting sensitive information! While this part was challenging for me and delayed my project submission by a day or two, I felt that it was really gratifying work since the majority of my techdegree coursework focused strictly on front end development. This was a very valuable skill to learn. I am proud that I did not resign to turning in this project with hard-coded credentials and I took the extra time to learn and implement the .env file. This demonstrates my ability to independently research a topic and incorporate strategies I'm unfamiliar with. I think this is an important trait of an effective developer.