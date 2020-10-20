export enum Path {
  // Public
  Home = '',
  InternalServerError = 'internal-server-error',
  NotFound = '404',

  // Auth
  Auth = '',
  Login = 'login',
  SignUp = 'sign-up',
  ForgotPassword = 'forgot-password',
  ForgotPasswordEmailSent = 'forgot-password-email-sent',
  PasswordReset = 'password-reset',
  PasswordResetSucceeded = 'password-reset-succeeded',
  PasswordResetFailed = 'password-reset-failed',

  // App base url
  App = 'app',

  // Features
  Dashboard = 'dashboard',
}
