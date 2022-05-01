const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = options.separator ? options.separator : '+';
  let addition;
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let res = '';
  let strSeparator = '';
  let newSubstr = '';

  if (typeof options.addition === 'boolean') {
    addition = options.addition ? 'true' : 'false';
  } else if (options.addition === null) {
    addition = 'null';
  } else if (!options.addition) {
    addition = '';
  } else addition = String(options.addition);


  for (let i = 0; i < additionRepeatTimes; i++) {
    if (i < additionRepeatTimes - 1) {
      strSeparator += `${addition}${additionSeparator}`;
    } else strSeparator += addition;
  }
  console.log(strSeparator)
  newSubstr += String(str) + strSeparator;

  for (let i = 0; i < repeatTimes; i++) {
    if (i < repeatTimes - 1) {
      res += newSubstr + separator;
    } else res += newSubstr;
  }
  return res;
}

module.exports = {
  repeater
};
