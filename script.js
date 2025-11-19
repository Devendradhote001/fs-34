let input = document.querySelector("input");
let container = document.querySelector(".container");

let addBtn = document.querySelector("#add");

let tasksArr = [];

const renderUi = () => {
  container.innerHTML = "";
  tasksArr.forEach((val) => {
    container.innerHTML += `
  <div class="list-conatiner">
        <p>
        ${val}
        </p>
        <div>
          <button>Update</button>
          <button id="del">Delete</button>
        </div>
      </div>`;
  });
};

addBtn.addEventListener("click", (e) => {
  let inpValue = input.value;

  tasksArr.push(inpValue);
  renderUi();

  input.value = "";
});
