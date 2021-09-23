const addForm = document.querySelector(".add");

const list = document.querySelector(".todos");

const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>`;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const todo = addForm.add.value.trim(); // removes spaces before and after

  if (todo.length) {
    generateTemplate(todo); //If it's a positive integer it will evaluate to true
    addForm.reset(); //Resets all form fields
  }
});

//Delete Implementation
list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});

//Filter
//We're converting HTMLCollection to Array
const filterTodos = (term) =>
  Array.from(list.children).filter(
    (todo) =>
      !todo
        .textContenttoLowerCase()
        .includes(term)
        .forEach((todo) => todo.classList.add("filtered"))
  );
Array.from(list.children).filter((todo) =>
  todo.textContent
    .toLowerCase()
    .includes(term)
    .forEach((todo) => todo.classList.remove("filtered"))
);

//Key Up Event
search.addEventListener("click", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
