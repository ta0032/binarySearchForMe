const startBtn = document.querySelector(".start");
const boardmas = document.querySelector(".mas-h");
const reslt = document.querySelector(".res-h");
const magBtn = document.querySelector(".mag");
let bubbleMas;

startBtn.addEventListener("click", (event) => {
  const mas = [];
  for (let i = 1; i <= 6; i++) {
    const nun = parseInt(document.querySelector(`#pole${i}`).value);

    if (!Number.isNaN(nun)) {
      mas.push(parseInt(document.querySelector(`#pole${i}`).value));
    }

    bubbleMas = BubbleSort(mas);

    boardmas.innerHTML = bubbleMas.join(", ");
  }
  return bubbleMas;
});

function BubbleSort(m) {
  const n = m.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (m[j + 1] < m[j]) {
        let t = m[j + 1];
        m[j + 1] = m[j];
        m[j] = t;
      }
    }
  }
  return m;
}

magBtn.addEventListener("click", (event) => {
  const masVal = document.querySelector(".in-re-pole");
  if (typeof bubbleMas === "object") {
    binarySearch(bubbleMas, parseInt(masVal.value));
  } else {
    reslt.innerHTML = "Введите числа в яйчейки и создайте массив";
  }
});

function binarySearch(mas, val) {
  let max = mas.length - 1;
  let min = 0;

  if (!Number.isNaN(val)) {
    while (max >= min) {
      let mid = Math.floor((max + min) / 2);

      if (mas[mid] === val) {
        reslt.innerHTML = mid + 1;
        return;
      } else if (mas[mid] < val) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }
    reslt.innerHTML = `${val} - такого числа в масcиве нет`;
  } else {
    reslt.innerHTML = "Введите число";
  }

  return;
}
