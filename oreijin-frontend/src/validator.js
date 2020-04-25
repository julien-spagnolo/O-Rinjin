const validator = {
  /**
   * Checks if the email match the regex
   * @param {String} email
   * @return {bool} true if it matches
   */
  checkEmail: (email) => {
    const regex = /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/;
    // console.log(regex);
    return regex.test(email);
  },

  /**
   * Checks if the password match the regex
   * The password must contain at least 1 lower case, 1 upper case
   * 1 numeric character, one special character and must be 6 characters to 15
   * @param {String} password
   * @return {bool} true if it matches
   */
  checkPassword: (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{6,15})/;
    // console.log(regex);
    return regex.test(password);
  },

  verifyPassword: (password, verification) => {
    if (validator.checkPassword(password)) return password === verification;
    return false;
  },

  /**
   * Checks if the name match the regex
   *
   * @param {String} name
   * @return {bool} true if it matches
   */
  checkName: (name) => {
    const regex = /^[a-zA-Z]{2,}$/;
    return regex.test(name);
  },

  /**
   * Get the maximum limit date for input
   * @param {String} date
   * @return {String} return the date computed
   */

  getMaxDateInput: () => {
    const today = new Date();
    const dd = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
    const mm = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
    const yyyy = today.getFullYear() - 18;

    return `${yyyy}-${mm}-${dd}`;
  },

  /**
   * Checks if the birth date is within the limit range
   * @param {String} birthdate
   * @return {bool} true if is within the limit range
   */
  checkBirthDate: (birthdate) => birthdate < validator.getMaxDateInput(),

  /**
   * Checks if the name match the regex
   *
   * @param {String} address
   * @return {bool} true if it matches
   */
  checkAddress: (address) => {
    // TODO : chercher une regex plus strict
    const regex = /^.{7,}$/;
    return regex.test(address);
  },

  /**
   * Check if the postal code match the regex
   *
   * @param {} city
   * @return {bool} true if it matches
   */
  checkCity: (city) => {
    const regex = /^[a-zA-Z- ]{1,}$/;
    return regex.test(city);
  },

  /**
   * Check if the postal code match the regex
   *
   * @param {} postalCode
   * @return {bool} true if it matches
   */
  checkPostalCode: (postalCode) => {
    const regex = /^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/;
    return regex.test(postalCode);
  },

  checkRegisterForm: (form) => {
    const {
      firstname, lastname, birthdate, email,
      plainPassword, verificationPassword, address, city, postalcode,
    } = { ...form };

    if (!validator.checkName(firstname)) return false;
    if (!validator.checkName(lastname)) return false;
    if (!validator.checkBirthDate(birthdate)) return false;
    if (!validator.checkEmail(email)) return false;
    if (!validator.checkPassword(plainPassword)) return false;
    if (!validator.verifyPassword(plainPassword, verificationPassword)) return false;
    if (!validator.checkAddress(address) && !validator.checkCity(city) && !(validator.checkPostalCode(postalcode))) return false;

    return true;
  },
};

export default validator;
