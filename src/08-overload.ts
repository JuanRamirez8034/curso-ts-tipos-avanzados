// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => string


function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const parseStr2 = (input: string | string[]): string | string[] =>{
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Juan');
// rtaArray.reverse();
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', 'Juan =>' ,rtaArray);

const rtaStr = parseStr(['J','u','a','n']);
// rtaStr.toLowerCase();
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['J','u','a','n'] =>",rtaStr);
