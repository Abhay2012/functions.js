export default function RegexPatterns(str) {
    const obj = {
      email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      
      md5: /^[a-f0-9]{32}$/,
      hexcolor: /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,
      mac: /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/,
      ascii: /^[\x00-\x7F]+$/
  };

  let temp;
  Object.keys(obj).forEach(function(i) {
    if(i === str) {
      temp = obj[i];
    }
  });
  
  return temp;
}