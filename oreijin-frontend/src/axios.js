/* eslint-disable no-useless-escape */
export const baseURL = 'http://ec2-54-166-216-117.compute-1.amazonaws.com';
export const authorization = `Bearer ${document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1')}`;