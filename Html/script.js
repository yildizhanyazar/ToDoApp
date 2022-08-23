let items = ["item1", "item2", "item3", "item4"];
let list = document.querySelector("#myList");

items.forEach(function (item) {
   createItem(item);
});

list.addEventListener("click", function (item) {
   if (item.target.tagName == "LI") {
      item.target.classList.toggle("checked");
      toggleDeleteButton();
   }
});

document.querySelector("#deleteAll").onclick = function () {
   let elements = document.querySelectorAll(".checked");
   elements.forEach(function (item) {
      item.style.display = "none";
   });
   document.querySelector("#deleteAll").classList.add("d-none");
};

function toggleDeleteButton() {
   let checklist = document.querySelectorAll(".list-group-item.checked");

   if (checklist.length > 0) {
      document.querySelector("#deleteAll").classList.remove("d-none");
   } else {
      document.querySelector("#deleteAll").classList.add("d-none");
   }
}

document.querySelector("#btnCreate").onclick = function () {
   let item = document.querySelector("#txtItem").value;
   console.log(item);
   if (item === "") {
      alert("lütfen bir değer girin");
      return;
   }
   createItem(item);
};

function createItem(item) {
   let li = document.createElement("li");
   let t = document.createTextNode(item);

   li.className = "list-group-item";
   li.append(t);
   list.append(li);

   let span = document.createElement("span");
   let text = document.createTextNode("\u00D7");

   span.className = "close";
   span.append(text);
   li.append(span);

   span.onclick = function () {
      let parLi = this.parentElement;
      parLi.style.display = "none";
      parLi.classList.remove("checked");
   };
}
