document.getElementById("submit").addEventListener("click", function () {
	let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let isbn = document.getElementById("isbn").value;
	
  if (title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields");
        return;
    }
    let table = document.getElementById("book-list");
    let row = table.insertRow();

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Delete</button></td>
    `;

row.querySelector(".delete").addEventListener("click", function () {
        row.remove();
    });

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
});											   