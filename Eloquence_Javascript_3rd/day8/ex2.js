let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(^| )'|'(% | )/g, '$1"$2')); //g wil be the global and take all the ' symbol
// → "I'm the cook," he said, "it's my job."