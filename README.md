# Dance-Everyday

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)
# Project #3: React App & Express API Group Project
![gif](https://media.giphy.com/media/CvizJerMeqRTa/giphy.gif)
#### Table of Contents

- [Necessary Deliverables](#necessary-deliverables)
- [Technical Requirements](#technical-requirements)
- [Suggested Ways to Start](#getting-started)

## Overview

You’ve already worked in small groups to accomplish various labs and exercises, but, this time, **we’re going to challenge you to work on a whole project with a small team.**

You will partner with a group of your peers to collaboratively design and build a full stack express/react application.

**This is meant to push you both technically and collaboratively.** Working in a team can be more challenging than working by yourself, but you're most likely going to find yourself working in a development team in your first job after SEI, and **it's important to learn how to work together.**

Make it work, and make it awesome.


## Necessary Deliverables

This project, like the others, will be a portfolio piece.
That means the project must be:

### Functional with sufficient complexity

- For a portfolio project to be complete, it must demonstrate understanding of and an ability to use the tools and techniques introduced in this unit. See [technical requirements](#technical-requirements) below.
- Because this project is a group project, it is important that every team member has a solid understanding of the entire project, even the features implemented by other team members. Review your code with each other and be prepared to explain sections of code that were written by teammates.
- Every team member is responsible for contributing a significant portion of the project.
    - GitHub repos have summaries of code contributions. There doesn't need to be exactly even contributions from every team member but every members contributions need to be significant.
- A functional project is error, bug, and evidence-of-debugging free (i.e. remove all console.logs, commented-out code, etc.)
- It is expected that team members will conduct themselves professionally throughout the project. If a group member's behavior undermines the effort of the group or otherwise violates the General Assembly code of conduct they may be removed from the group by the instructor working with the group. It is not possible to qualify for graduation if removed from the group.
  - Strive for communication that is **A**ctionable, **S**pecific, and **K**ind.
  - Watch the video linked in [Group bonding](https://www.youtube.com/watch?v=J9OpTNk0hYc)

### Documented

- A **team git repository hosted on Github**, with a link to your hosted project, and frequent commits from _every_ team member dating back to the _very beginning_ of the project. A suggestion is to have one person in charge of the repository and have another person approve pull requests as mentioned below. 

#### For the proposal:
- In your team's github repository, post the following:
	1. **Project Description**
        - A brief explanation of the project you'll be building with the objective described in non-technical language.
        - An explanation of the major challenges you expect to face while building this app and how you foresee your team solving them. 
        - A section clearly defining MVP and POST MVP.  
    1. **Feature List** List of pieces of functionality of the app.
    1. **Entity Relationship Diagram (ERD)** diagram of the database tables, schemas, and relations. You can draw them by hand or try on of these useful links for ERDs:
        - [lucidchart](https://www.lucidchart.com/) This is a great tool for building ERDs.
        - [draw.io](https://www.draw.io/) Another great tool for ERDs.
        - [ERDPlus](https://erdplus.com/) Yet another great tool for ERDS.
     1. **API Endpoint Documentations** list of all of your servers routes, the structure of requests that you expect and the structure of responses they send.
     1. **Wireframes** sketches of the user interface with notes of how the user will interact with the UI. 
     1. **Component Heirarchy** Wireframes should be broken into components which then should be described in a component heirarchy.
     1. **List Dependencies** link to any project dependencies (e.g. 3rd party APIs, libraries, linter, etc).


### Deployed

- Must be deployed and fully functional
- The deployed app should link to the GitHub repo someplace and the README in the repo should link to the deployed app.


## Technical Requirements

You must build:

- A **RESTful JSON API**
    - Must have an Express server exposing RESTful JSON endpoints.
    - Must have a PostgreSQL database with at least two tables. There must be at least 1 pair of associated tables (one to many, many to many, etc.)
    - Must use sequelize to define models for interacting with the database.
    - Must have each of the generic controller actions (Index, Show, Create, Update, Delete) between the two models.
    - Must use Express Router to organize your route endpoints.
- A front-end **that consumes your own API**
    - The application must perform full CRUD operations.
    - Layout and style your front-end with **clean & well-formatted CSS**. Remember to use Grid or Flexbox!
    - Use React Router for client side routing.

## Getting Started

Once your team's proposal has been approved, get started with the following: 

- Pick one person on the team to be the "Git Tsar." This person will be responsible for managing your team's GitHub pushes and deployment. Although one person is taking responsibility, you should all work together to support them and any merge conflicts you run into.
- Confirm everyone on your team is running the same version of `node` and `npm` (`npm -v`, `node -v`).
- Pick a name for your team, write it down in fun letters, and draw/design a palm tree doing anything next to your team name. This is your team's logo. Upload this to your project file before you pitch. 
- Each group member should choose or be assigned tasks. 
- As work is done on a particular task, inform team members when the feature branch can be merged into master.  
- When the Git Tsar merges a feature into master and confirms it is functional. 
- ***Optional:*** Create either a Trello board or a project board in GitHub to prioritize and assign tasks. 
	- Create categories like `to do`, `in progress`, `done`, and/or `MVP to do` + `post-MVP to do`.
 	- Break features into small, focused tasks. For example, if a feature is "a user can comment on articles," that feature can be broken into several relevant tasks (1) associating models, (2) exposing a `POST /article/:id/comments` route in express, 
    (3) creating the `ArticleCommentForm` component in React, (4) making the Axios request from the client to the server, etc.
 	- Once a feature is ready, either continue working on other assigned tickets or talk to your team on assigning yourself a new one.
	 - If a task can be made more granular, create new tickets in the project board describing the sub-tasks.