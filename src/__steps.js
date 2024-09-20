/**
 1. visit console.firebase.google.com
 2. creast project (skip google analytics)
 3. register app (creat config)
 4. install firebase
 5. add config file to project
 6. DANGER: Do not publish to make firebase config to public by
            by pushing those github
 7. Visit:  Go docs  > build > Authentication > web >get Started
 8. export app from the firebase.config.js file:export default app
 9. Login.jsx: import getAuth from fireBase/auth
 10. create const auth = getAuth(app)
 11. import googleAuthProviderand creat a new provider
 12. use signInWithPopup and pass auth and provider
 13. activate sign-in method (google, facebook, etc)

  * */ 