/**
 * Checks if an email already exists for a given model
 * @param {Mongoose Model} Model
 * @param {string} email
 * @returns {boolean}
 */
module.exports = async function checkDuplicateEmail(Model, email) {
  if (!email) return false;

  const exists = await Model.findOne({
    email: email.toLowerCase().trim(),
  });

  return !!exists;
};
