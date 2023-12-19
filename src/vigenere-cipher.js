const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.code_abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(str, key) {
    this.validate(str, key);
    return this.crypt(str, key, true)

  }
  decrypt(str, key) {
    this.validate(str, key);
    return this.crypt(str, key, false)
  }

  crypt(str, key, mode) {
    let shift = key.repeat(Math.ceil(str.length / key.length)).toUpperCase();
    let upper_str = String(str).trim().toUpperCase();
    let r = '';
    for(let i = 0, j = 0; i < upper_str.length; i++) {
      let code = upper_str.charCodeAt(i);
      if(this.code_abc.indexOf(upper_str[i]) > -1) {
        if(mode) code = code + shift[j++].charCodeAt(0);
        else code = (code + this.code_abc.length - shift[j++].charCodeAt(0));
        code = code % this.code_abc.length + 65;
      }
      r += String.fromCharCode(code);
    }
    return  this.isDirect ? r : r.split('').reverse().join('');
  }

  validate(str, key) {
    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
