# Canny Debugging Test

Howdy Candidate, we've created this pared down version of Canny to get a better idea of your experience debugging web applications. Best of luck!

## Getting Started

1. **Initialize your environment**

We recommend using nvm for managing node versions.

Install nvm from [here](https://github.com/creationix/nvm)

Then install the node version for this assessment:

```sh
nvm i
```

1. **Install dependencies**

Next you'll need to install this app

```sh
npm install
```

1. **Run the backend**

The backend is a node server. Everything to do with the server lives in `/server`.

Terminal tab #1:

```sh
npm run backend
```

1. **Run the frontend**

Webpack is used to bundle and serve our app. Everything to do with the frontend lives in `/app`.

Terminal tab #2:

```sh
npm run frontend
```

Once everything is running, you should see the app running http://127.0.0.1:8080.

## Customer Issues

For each of the following issues:

1. Identify the issue
1. Apply the fix
1. Provide a response to each technical customer in 1-2 sentences

**Customer 1:** When I open the application, my posts do not load and all I see is a 'server error'.
    Response: Good afternoon Clare,
    During user authentication, we expect to receive the fields: 'id', 'email' and 'name' for each user.
    However, in the returned data, we received the field labeled as 'nayme' instead of 'name'.
    To ensure proper functionality, we updated the condition in 'authenticateUser.js' (line 17) to 'else if (!userData.nayme)'.
    Please feel free to reach out with any additional questions,
    Kyle

**Customer 2:** When I click on "Top" or "Old", the selector does not update with my new selection.
    Response: Good afternoon Clare,
    It looks like the selector was hardcoded to a single option, preventing it from changing dynamically.
    When 'Top' or 'Old' were clicked, the state of the selected option should have been updated, but it was not.
    We have initialized a state variable using useState in 'PostSort.js' that we can set when the selector option is changed.
    Please feel free to reach out with any additional questions,
    Kyle

**Customer 3:** When I sort by "Top", there are posts with only 28 votes ranking higher than posts with 180 votes!
    Response: Good afternoon Clare,
    I reviewed our sorting logic and found that, while it was working well for dates, it was not sorting correctly by votes.
    We refactored the logic in 'sortBy.js' to be more consice and account for vote count as well as dates.
    Please feel free to reach out with any additional questions,
    Kyle
    *Note to self, when navigating by page the list sorts to 'old'*

**Customer 4:** When I page through posts, although the posts are changing, the vote count in the top left corner does not match the total count of votes of the displayed posts.
    Response: Good afternoon Clare,
    In 'app\actions\posts.js' we call 'fetchPosts' which dispatches 'postsLoaded' and returns the posts to display for each page. We noticed that we
    were not dispatching 'recountVotes' which is the method responsible for getting the current vote count per page. After updating the 'fetchPosts' function
    to include 'dispatch(recountVotes(posts, pages));', the correct count is now being displayed correctly.
    Please feel free to reach out with any additional questions,
    Kyle

**Other Stuff**
    1. I noticed that on page change, the default sort ('Old') was being used. Ex.
    - A user loads the page (the default sort 'Old' is selected), posts are sorted correctly.
    - The user clicks 'Top', posts are sorted correctly (highest number of votes to lowest).
    - The user navigates to another page -> the sort still shows 'Top' but the list is sorted by 'Old'.
    I updated fetchPosts to keep track of the sort on page change.

    2. The sort dropdown was only closing when an option was selected. To improve user experience, I
    added setMenuOpen(false) to the onClick method so that if the dropdown is clicked again, it closes (if a user
    does not want to change the sort, for example). I also added an event listener that closes the dropdown if 
    the user clicks outside of the dropdown.

## 🎉 You're Done 🎉

Congrats on completing our assessment. All that is left for you to do is submit your assessment. We made a command that will zip your submission and send it to us.

```sh
npm run submit
```
