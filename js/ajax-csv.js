// (A) GET HTML TABLE
let table = document.getElementById("griefer_table");

// (B) AJAX FETCH CSV FILE
fetch("assets/griefer.csv")
.then(res => res.text())
.then(csv => {
  table.innerHTML = "";
  for (let row of CSV.parse(csv)) {
    let tr = table.insertRow();
    for (let col of row) {
      let td = tr.insertCell();
      td.innerHTML = col;
    }
  }
});
