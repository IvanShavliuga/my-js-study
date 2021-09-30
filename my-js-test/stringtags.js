let msg = "hello coder";
let link = "ivanshavliuga.github.io/";
let author = "iv2";
function myTag(strings, msgExp, linkExp, authorExp) {
  console.log("start");
  console.log(strings.length);
  console.log(msgExp);
  console.log(linkExp);
  console.log(authorExp);
  if (!strings[0].length && !strings[1].length) {
    const msglenkey = "message".length;
    const linklenkey = "link".length;
    const httplenkey = "https://".length;
    const authorlenkey = "author".length;
    const dta = msgExp;
    let stkeymsg = dta.indexOf("message");
    let stmsg = dta.indexOf('"', stkeymsg + msglenkey);
    let endmsg = dta.indexOf('"', stmsg + 1);
    msgExp = dta.substring(stmsg + 1, endmsg);
    stkeymsg = dta.indexOf("author");
    stmsg = dta.indexOf('"', stkeymsg + authorlenkey);
    endmsg = dta.indexOf('"', stmsg + 1);
    authorExp = dta.substring(stmsg + 1, endmsg);
    stkeymsg = dta.indexOf("link");
    stmsg = dta.indexOf('"', stkeymsg + linklenkey);
    endmsg = dta.indexOf('"', stmsg + 1);
    let protocol = dta.indexOf("https://");
    if (protocol > -1) stmsg += httplenkey;
    linkExp = dta.substring(stmsg + 1, endmsg);
  }
  return `
  <div class="alert">
    <h3 class="alert-title">${msgExp}</h3>
    <a class="alert-link" href="https://${linkExp}">${authorExp}</a>
  </div>
  `.trim();
}
document.getElementById("app").innerHTML = myTag`
<myTag message="${msg}!"
 link="https://${link}" 
 author="${author}">
</myTag>
`;
let tst = document.getElementById("test").innerHTML;

const transform = myTag`${tst}`;

document.getElementById("test").innerHTML = transform;
let dta = "test";

function nundef(a = "tst") {
  console.log(a);
  console.log("val: " + (a || "val-success"));
}
nundef();
nundef(dta);
nundef(NaN);
nundef(null);
nundef(undefined);
dta = NaN;
nundef(dta);
