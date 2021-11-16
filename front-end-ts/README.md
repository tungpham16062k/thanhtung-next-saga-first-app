CLICK LOGIN

- Call API to login
- Success -> redirect ADMIN
- Fail -> show ERROR

LOGIN
LOGOUT

authSaga

- if logged in, watch LOGGOUT
- else watch LOGIN

LOGIN

- call login API to get token + user info
- set token to local storage
- redirect to admin page

LOGOUT

- clear token from local storage
- redirect to login page

authSlice
authSaga
