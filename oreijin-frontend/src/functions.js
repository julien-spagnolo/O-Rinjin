/**
 * Checks if the email match the regex
 * @param {String} email
 * @return {bool} true if it matches
 */
export const checkEmail = (email) => {
  const regex = /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/;
  // console.log(regex);
  return regex.test(email);
};

/**
 * Checks if the password match the regex
 * The password must contain at least 1 lower case, 1 upper case
 * 1 numeric character, one special character and must be 6 characters to 15
 * @param {String} password
 * @return {bool} true if it matches
 */
export const checkPassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{6,15})/;
  // console.log(regex);
  return regex.test(password);
};

export const verifyPassword = (password, verification) => password === verification;

/**
 * Checks if the name match the regex
 * 
 * @param {String} name
 * @return {bool} true if it matches
 */
export const checkName = (name) => {
  const regex = /^[a-zA-Z]{2,}$/;
  return regex.test(name);
};

/**
 * Get the maximum limit date for input
 * @param {String} date
 * @return {String} return the date computed
 */

export const getMaxDateInput = () => {
  const today = new Date();
  const dd = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const mm = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1; //January is 0!
  const yyyy = today.getFullYear() - 18;

  return `${yyyy}-${mm}-${dd}`;
};

/**
 * Checks if the birth date is within the limit range
 * @param {String} birthdate
 * @return {bool} true if is within the limit range
 */
export const checkBirthDate = (birthdate) => birthdate < getMaxDateInput();

/**
 * Checks if the name match the regex
 * 
 * @param {String} address
 * @return {bool} true if it matches
 */
export const checkAddress = (address) => {
  // TODO : chercher une regex plus strict
  const regex = /^.{7,}$/;
  return regex.test(address);
};

/**
 * Check if the postal code match the regex
 * 
 * @param {} city
 * @return {bool} true if it matches
 */
export const checkCity = (city) => {
  const regex = /^[a-zA-Z- ]{1,}$/;
  return regex.test(city);
};

/**
 * Check if the postal code match the regex
 * 
 * @param {} postalCode
 * @return {bool} true if it matches
 */
export const checkPostalCode = (postalCode) => {
  const regex = /^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/;
  return regex.test(postalCode);
};
