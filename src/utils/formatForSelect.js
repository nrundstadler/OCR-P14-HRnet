/**
 * Transforms generic data into options for react-select
 * @param {Array} items - Array of objects
 * @param {string} valueKey - Name of the property to use as value
 * @param {string} labelKey - Name of the property to use as label
 * @returns {Array} - Array of options in {value, label} format
 */
const formatForSelect = (items, valueKey, labelKey) => {
  return items.map((item) => ({
    value: item[valueKey],
    label: item[labelKey],
  }));
};

export default formatForSelect;
