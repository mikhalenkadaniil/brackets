module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const pares = {};
  for (let i = 0; i < bracketsConfig.length; i += 1) {
    const [open, close] = bracketsConfig[i];
    pares[open] = close;
  }
  for (let i = 0; i < str.length; i += 1) {
    if (stack.length === 0) {
      stack.push(str[i]);
    } else if (pares[stack[stack.length - 1]] === str[i]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  if (stack.length > 0) return false;
  return true;
};
