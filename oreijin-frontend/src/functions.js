/**
 * Check if the email match the regex
 * @param {String} email
 * @return {bool}
 */
export const checkEmail = (email) => {
  const regex = /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/;
  // console.log(regex);
  return regex.test(email);
};

/**
 * Check if the password match the regex
 * The password must contain at least 1 lower case, 1 upper case
 * 1 numeric character, one special character and must be 6 characters to 15
 * @param {String} password
 * @return {bool}
 */
export const checkPassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{6,15})/;
  // console.log(regex);
  return regex.test(password);
};
