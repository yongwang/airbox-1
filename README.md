# AirBox demo

Sadly I have not been able to devote as much time to this as it deserves. I injured my shoulder last week and have been in a lot of pain for the last few days. I even typed some of this one handed, believe it or not. I have decided to hand in what I have done so far rather than keep you waiting.

Its a really interesting technical test, unlike a lot of the "make a todo list app" challenges out there where all you can do is copy and paste from existing demos as its really hard to improve on what is out there. Of course this is not challenging at all and tells no one anything about the candidate.

## What I have covered with the code here

* react hooks
  * useEffect
  * useState
  * useContext
* making POST requests as data changes on the priority control
* Bootstrap react components - a good starting point for rapid prototyping
* using axios for http requests

## Things I should have done but ran out of time for

* improved the visual appearance
* covered more of the endpoints
* use Jest to write and run unit tests
* implemented sorting and filtering on the task list table - bootstrap doesn't allow this right now.
* improved accessibility - no more `<a href="#">`
* linked in the lat/long to google maps or similar.
* made the text in the task details table editable and save in the same way as the priority control
* CRUD for tasks and collections of tasks
* make design properly responsive

## Things I would do if I had all the time in the world

* local caching using LocalStorage for case of offline use
* add more views for assignedTo, caller and organisation

# Running the demo

Either clone this repository and use the following commands to build and serve the demo or visit [http://airboxdemo.s3-website.eu-west-2.amazonaws.com/](The site on AWS)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

