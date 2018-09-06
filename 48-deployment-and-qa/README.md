# QA for Deployed Applications

- Deployment Review
- Visibility
- Firefighting
- QA
  - QA for our projects
- Benchmarking and Performance

## Questions

- what is nginx? (vs. puma vs. other options)
common load balancer
handles routes

- workers?
another 'box' that is doing some task

- puma?
  - manages threads on a single machine
  - scaling: vertical, horizontal
  - run more 'threads' on a machine

- secrets
- pipeline for deploys
- migrations in prod
  - sometimes manual
  - part of the CI pipeline

- modifying production database without losing the data
  - backups
  - production data debugging

- storage for user-uploaded files
  - S3 Simple Storage Service
  - Microsoft, Google

- asset storage
  - CDN

- what does a devops role look like?





- how do admin roles work?
  users on the machines
  ssh keys

## Deployments

### System Diagramming

## Deployments: What's different between local and prod?
- Environment variables
  `ENV['SECRET_KEY_BASE']`
- secrets
- which database
- where blobs get saved
- logging / debug info
- asset storage (CDN vs local)
- throttling usage / performance differences
- differences within your application

- running on different hardware (different OS)


## Visibility and Error Reporting
- How do I see errors in my production app?
 Set up Rollbar or Sentry
 Go look at the dashboard

- How do we know when something is wrong?

- Who finds out when?
Set up some kind of trigger
new 500 error > 100 in a minute, pages the oncall engineer
Call the engineer -> PagerDuty


## Debugging in Prod: Firefighting
How do I debug errors in my production app?
calm down

- where in the system diagram is our error happening?
- visibility into the system is how we debug
- fixing the bug

### Data issues
remove the bad data
code changes
- prevent bad data from getting in
- handle bad data in the application

### Code issues
- deploy new code

## Quality Assurance
- Testing!
- Manual QA - as feature developer
  - staging

### CI Deploy pipeline
running the tests
fails -> let the developer know
passes -> continue to deploy

Triggered by a push to the master branch on Github

### QA for your deployed projects
- employers will look
- use bad inputs!!

## Benchmarking and Performance
How do we know when our app is slow?
How do we debug the slowness?

- where in the system diagram is our slowness?
- visibility into the system - APM
- benchmarking - run code lots of times, see what changes
