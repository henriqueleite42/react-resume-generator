const LINKEDIN_PROFILE_REGEX = new RegExp(
  "^https?://((www|ww).)?linkedin.com/((in/[^/]+/?)|(pub/[^/]+/((w|d)+/?){3}))$",
);

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function isValidLinkedinProfile(profile: string) {
  return LINKEDIN_PROFILE_REGEX.test(profile);
}

export function isValidEmail(email: string) {
  return EMAIL_REGEX.test(email);
}
