# JWT Auth

- Authentication vs. Authorization
- Authenticate via a basic controller action in Rails triggered by a fetch in React
- Store user data in state on login/signup
- Implement localStorage to store identifying information about a user in the browser (just a user ID for now)
- Automatically fetch user information based on contents of localStorage for already logged-in users

## Authentication vs. Authorization

Authentication
  Confirming who you are
  Identity

Authorization
  permission - based on who you are, what are you allowed to do?
  `current_user` - check role, access level


# Recap in Mod 2
Rails mod 2 version - Authentication
- bcrypt - password storage (hashed, salted passwords)
- has_secure_password
- `/login` route - accepts the username and password
- check the username and password
- start a session
- send back a cookie with the session info

Rails mod 2 version - Authorization
- based on the session info
-  before_action - check whether the user was 'Authorized' to access some resource
-  either allow or respond with some error
- Devise
- Knock
- CanCanCan

Access the sessions from React?
when we're using fetch, browser doesn't send the cookie for us (won't set the cookie for us)

```rails
  session[:user_id] = current_user.id # set an encrypted cookie
  # later
  session[:user_id] # read from the cookie
```

when we use fetch, cookies won't get set

We are responsible in javascript for supplying the authentication info

## Where to keep the token?

state - why not?
- destroyed on refresh

cookies
- decent, API is worse

localStorage
- should persist across refreshes
- clear
- getItem
- setItem
- partitioned by host

url - badddddd idea

## Token Auth

send back a token as data

## JWT

advanced format for tokens

## JWT in Rails

Sign a JWT token in Rails

Send it to react app (when the react app sends the username and password)
React app will send it back (store it, send it with the request)
Rails can check it to ensure that it is valid
  can check the data inside, trust that Rails app originally created the data

Rails has a secret key
lock some information with that key
Read it again, trust that no one else can read it
Read it again, trust that no one else can tamper with it

## How to hide your secret key?

## Is React State secure?

in general _yes_
as safe as javascript executing in the browser
scrub your logs
