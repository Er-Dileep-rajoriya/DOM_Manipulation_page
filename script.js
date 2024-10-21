let counterPara = document.getElementById("count");

let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");
let clearBtn = document.getElementById("clear");
let flag = false;
incrementBtn.addEventListener("click", () => {
  let count = parseInt(counterPara.innerText);

  if (count == 0 && flag) {
    decrementBtn.disabled = false;
    let element = document.getElementById("error");
    element.remove();
    flag = false;
    console.log("reached");
    clearBtn.style.visibility = "visible";
  }

  if (count >= 0) {
    count++;

    counterPara.innerText = count;
    return;
  }
});

decrementBtn.addEventListener("click", () => {
  let count = parseInt(counterPara.innerText);

  if (count <= 0) {
    let element = document.createElement("small");
    element.innerText = "Error : Cannot go below 0";
    element.id = "error";

    let container = document.getElementById("container");
    let lastElement = document.getElementById("last");

    container.insertBefore(element, lastElement);
    flag = true;
    decrementBtn.disabled = true;
    clearBtn.style.visibility = "hidden";
  } else {
    decrementBtn.disabled = false;
    count--;
    counterPara.innerText = count;
  }
});

clearBtn.addEventListener("click", () => {
  counterPara.innerText = 0;
  let count = parseInt(counterPara.innerText);

  if (count == 0) {
    let element = document.createElement("small");
    element.innerText = "Error : Cannot go below 0";
    element.id = "error";

    let container = document.getElementById("container");
    let lastElement = document.getElementById("last");

    container.insertBefore(element, lastElement);
    flag = true;
    decrementBtn.disabled = true;
  }
  clearBtn.style.visibility = "hidden";
});
