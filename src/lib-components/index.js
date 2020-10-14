/* eslint-disable import/prefer-default-export */

/**
 * Get error messages from response.
 *
 * @param {Object} response
 * @return {Object}
 */
const getErrors = (response) => {
  /** get errors from response. */
  if (response?.response?.data?.errors !== undefined) {
    return response.response.data.errors;
  }

  /** get errors from custom object / array. */
  if (response?.errors !== undefined) {
    return response.errors;
  }

  return {};
}

export { default as Error } from './error-component.vue';
export { getErrors };