const regExpVal = {
  username: /^[a-zA-Z1-9]+$/,
  password: /^[0-9a-zA-Z]{4,}$/
};

/**
 * @param {HTMLInputElement} el
 * @returns {Boolean} - Return true if input valid or dosen't has data-required attr
 */

export function validate(el) {
  const regExpName = el.dataset.required;
  if(!regExpVal[regExpName]) return true;
  return regExpVal[regExpName].test(el.value);
}
