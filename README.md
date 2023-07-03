# README - Workday Scheduler

## Description
Calendar application that allows a user to save events for each hour of a typical work day(9am–5pm). Browser app dynamically updated.  HTML/CSS powered by jQuery.

## Technologies Used
- HTML, CSS, Bootstrap, JQuery
- googlefonts, fontawesome APIs
- moments.js

## Repository
<https://github.com/betheng/workdayscheduler>

## Deployment

- Go to gitHub > Site repo > Settings > Pages
- Then deploy to GitHub Pages

Live site link: <https://betheng.github.io/workdayscheduler/>
_____________________________

## User Story
```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```
## Acceptance Criteria
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours of 9am to 5pm
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Last Update
7/3/2023

## Screenshot/Demo
![Demo video](./assets/uiDemo.gif)

## Sources

- https://meetanshi.com/blog/reload-current-page-without-losing-any-form-data-in-javascript/#:~:text=To%20store%20the%20form%20data,a%20new%20session%20is%20initiated.
- Previous class repos and video
- Starter code from module assignment
- https://momentjs.com/
- https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript
- https://www.shecodes.io/athena/13276-how-to-get-current-day-and-time-in-javascript
- https://stackoverflow.com/questions/68468032/how-to-make-a-condition-using-time-of-day
- https://www.w3schools.com/jsref/jsref_split.asp