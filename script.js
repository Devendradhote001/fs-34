let input = document.querySelector("input");
let container = document.querySelector(".container");

let addBtn = document.querySelector("#add");

let tasksArr = JSON.parse(localStorage.getItem("items")) || [];
console.log(tasksArr);

const renderUi = () => {
  container.innerHTML = "";
  tasksArr.forEach((val) => {
    container.innerHTML += `
  <div class="list-conatiner">
        <p>
  ${val}
        </p>
        <div class="btns">
          <button>Update</button>
          <button id="del">Delete</button>
        </div>
      </div>`;
  });
};

renderUi();

addBtn.addEventListener("click", (e) => {
  let inpValue = input.value;

  tasksArr.push(inpValue);
  localStorage.setItem("items", JSON.stringify(tasksArr));
  renderUi();

  input.value = "";
});
