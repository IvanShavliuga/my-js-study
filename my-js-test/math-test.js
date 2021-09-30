const fn = ["cos", "sin"];
document.write(
  "<table class='table' bgcolor='#eed0ee' border='1' width='50%' cellspacing='0' style='margin: 25px auto; border: 1px solid #acacac'>"
);
document.write(
  "<tr bgcolor='#fc94fc' style='color:indigo'><th style='padding: 0 15px;'>alpha</th>"
);
for (let f of fn) document.write(`<th style='padding: 0 15px;'>${f}</th>`);
for (let a = -2; a <= 2; a += 0.1) {
  document.write(
    `<tr><td width="60" style='padding: 0 15px; font-weight: bold;'>${a.toFixed(
      1
    )} x PI</td>`
  );
  for (let f of fn) {
    let r = Math[f](a * Math.PI);
    document.write(`<td style='padding: 5px 15px;'>${r.toFixed(4)}</td>`);
  }
  document.write("</tr>");
}
document.write("</table>");
