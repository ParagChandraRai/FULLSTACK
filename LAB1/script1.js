function extractColorNumber(str) {
  const regex = /(#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3}|rgb\(\s*(\d{1,3}%?\s*,){2}\s*\d{1,3}%?\s*\))/i;
  const match = str.match(regex);
  if (match) {
    let color = match[0].toUpperCase();
    if (color.startsWith("RGB")) {
      color = color.replace(/(\d{1,3})%?/g, function (match, p1) {
        setData(Math.round(p1 * 2.55).toString(16).padStart(2, "0"))
        return;
      });
      color = "#" + color;
    }
    setData(color);
    return;
  }
  setData("null");
  return;
}

function setData(data){
  var h2=document.getElementById('h2')
  h2.innerText=data
}
