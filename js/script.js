const heartIcons = document.querySelectorAll(".heart-icon");
const heartCountElement = document.getElementById("heartCount");

for (const icon of heartIcons) {
  icon.addEventListener("click", function () {
    let currentCount = parseInt(heartCountElement.textContent);
    currentCount++;
    heartCountElement.textContent = currentCount;
  });
}

// // toggling features
// document.getElementById("call-btn-1").addEventListener("click", function () {
//   handleToggle("call-history-parent");
//   handleButtonToggle("call-btn-1");
// });

// call history

let callHistory = [];

// call-btn-1

document.getElementById("call-btn-1").addEventListener("click", function () {
  const saveCoins = parseInt(document.getElementById("coins").innerText);
  const reduceCoins = 20;

  const availableCoins = saveCoins - reduceCoins;
  if (availableCoins < 0) {
    alert("You have not enough coins, you need minimum 20 coins to call.");
    return;
  }

  document.getElementById("coins").innerText = availableCoins;
  alert(" You are calling National Emergency Number 999");

  const data = {
    name: "National Emergency Number",
    num: 999,
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);
  const callHistoryData = document.getElementById("call-history-data");
  callHistoryData.innerText = "";
  for (const history of callHistory) {
    const div = document.createElement("div");
    div.innerHTML = ` <div class="mt-10">
          <div class="bg-white rounded-xl shadow-xl hover:shadow-2xl p-2">
            <h1 class="font-bold">${history.name}</h1>
            <h2 class="font-semibold">${history.num}</h2>
            <p>${history.date}</p>
          </div>
        </div>
  
    `;
    callHistoryData.appendChild(div);
  }
});

// call - btn - 2;

document.getElementById("call-btn-2").addEventListener("click", function () {
  const saveCoins = parseInt(document.getElementById("coins").innerText);
  const reduceCoins = 20;

  const availableCoins = saveCoins - reduceCoins;
  if (availableCoins < 0) {
    alert("You have not enough coins, you need minimum 20 coins to call.");
    return;
  }

  document.getElementById("coins").innerText = availableCoins;
  alert(" You are calling Police Helpline Number 999");
  const data = {
    name: "Police Helpline Number",
    num: 999,
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);
  const callHistoryData = document.getElementById("call-history-data");
  callHistoryData.innerText = "";
  for (const history of callHistory) {
    const div = document.createElement("div");
    div.innerHTML = ` <div class="mt-10">
          <div class="bg-white rounded-xl shadow-xl hover:shadow-2xl p-2">
            <h1 class="font-bold">${history.name}</h1>
            <h2 class="font-semibold">${history.num}</h2>
            <p>${history.date}</p>
          </div>
        </div>
  
    `;
    callHistoryData.appendChild(div);
  }
});
// call-btn-3
document.getElementById("call-btn-3").addEventListener("click", function () {
  const saveCoins = parseInt(document.getElementById("coins").innerText);
  const reduceCoins = 20;

  const availableCoins = saveCoins - reduceCoins;
  if (availableCoins < 0) {
    alert("You have not enough coins, you need minimum 20 coins to call.");
    return;
  }

  document.getElementById("coins").innerText = availableCoins;
  alert(" You are calling Fire Service Number 999");
  const data = {
    name: "Fire Service Number",
    num: 999,
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);
  const callHistoryData = document.getElementById("call-history-data");
  callHistoryData.innerText = "";
  for (const history of callHistory) {
    const div = document.createElement("div");
    div.innerHTML = ` <div class="mt-10">
          <div class="bg-white rounded-xl shadow-xl hover:shadow-2xl p-2">
            <h1 class="font-bold">${history.name}</h1>
            <h2 class="font-semibold">${history.num}</h2>
            <p>${history.date}</p>
          </div>
        </div>
  
    `;
    callHistoryData.appendChild(div);
  }
});
// call-btn-4
document.getElementById("call-btn-4").addEventListener("click", function () {
  const saveCoins = parseInt(document.getElementById("coins").innerText);
  const reduceCoins = 20;

  const availableCoins = saveCoins - reduceCoins;
  if (availableCoins < 0) {
    alert("You have not enough coins, you need minimum 20 coins to call.");
    return;
  }

  document.getElementById("coins").innerText = availableCoins;
  alert(" You are calling Ambulance Service 1994-999999");
  const data = {
    name: "Ambulance Service",
    num: 1994999999,
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);
  const callHistoryData = document.getElementById("call-history-data");
  callHistoryData.innerText = "";
  for (const history of callHistory) {
    const div = document.createElement("div");
    div.innerHTML = ` <div class="mt-10">
          <div class="bg-white rounded-xl shadow-xl hover:shadow-2xl p-2">
            <h1 class="font-bold">${history.name}</h1>
            <h2 class="font-semibold">${history.num}</h2>
            <p>${history.date}</p>
          </div>
        </div>
  
    `;
    callHistoryData.appendChild(div);
  }
});
// call-btn-5
document.getElementById("call-btn-5").addEventListener("click", function () {
  const saveCoins = parseInt(document.getElementById("coins").innerText);
  const reduceCoins = 20;

  const availableCoins = saveCoins - reduceCoins;
  if (availableCoins < 0) {
    alert("You have not enough coins, you need minimum 20 coins to call.");
    return;
  }

  document.getElementById("coins").innerText = availableCoins;
  alert(" You are calling Women & Child Helpline 109");
  const data = {
    name: "Women & Child Helpline",
    num: 109,
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);
  const callHistoryData = document.getElementById("call-history-data");
  callHistoryData.innerText = "";
  for (const history of callHistory) {
    const div = document.createElement("div");
    div.innerHTML = ` <div class="mt-10">
          <div class="bg-white rounded-xl shadow-xl hover:shadow-2xl p-2">
            <h1 class="font-bold">${history.name}</h1>
            <h2 class="font-semibold">${history.num}</h2>
            <p>${history.date}</p>
          </div>
        </div>
  
    `;
    callHistoryData.appendChild(div);
  }
});
// call-btn-6
document.getElementById("call-btn-6").addEventListener("click", function () {
  const saveCoins = parseInt(document.getElementById("coins").innerText);
  const reduceCoins = 20;

  const availableCoins = saveCoins - reduceCoins;
  if (availableCoins < 0) {
    alert("You have not enough coins, you need minimum 20 coins to call.");
    return;
  }

  document.getElementById("coins").innerText = availableCoins;
  alert(" You are calling Anti-Corruption Helpline 106");
  const data = {
    name: " Anti-Corruption Helpline",
    num: 106,
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);
  const callHistoryData = document.getElementById("call-history-data");
  callHistoryData.innerText = "";
  for (const history of callHistory) {
    const div = document.createElement("div");
    div.innerHTML = ` <div class="mt-10">
          <div class="bg-white rounded-xl shadow-xl hover:shadow-2xl p-2">
            <h1 class="font-bold">${history.name}</h1>
            <h2 class="font-semibold">${history.num}</h2>
            <p>${history.date}</p>
          </div>
        </div>
  
    `;
    callHistoryData.appendChild(div);
  }
});
// call-btn-7
document.getElementById("call-btn-7").addEventListener("click", function () {
  const saveCoins = parseInt(document.getElementById("coins").innerText);
  const reduceCoins = 20;

  const availableCoins = saveCoins - reduceCoins;
  if (availableCoins < 0) {
    alert("You have not enough coins, you need minimum 20 coins to call.");
    return;
  }

  document.getElementById("coins").innerText = availableCoins;
  alert(" You are calling Electricity Helpline 16216");
  const data = {
    name: "Electricity Helpline",
    num: 16216,
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);
  const callHistoryData = document.getElementById("call-history-data");
  callHistoryData.innerText = "";
  for (const history of callHistory) {
    const div = document.createElement("div");
    div.innerHTML = ` <div class="mt-10">
          <div class="bg-white rounded-xl shadow-xl hover:shadow-2xl p-2">
            <h1 class="font-bold">${history.name}</h1>
            <h2 class="font-semibold">${history.num}</h2>
            <p>${history.date}</p>
          </div>
        </div>
  
    `;
    callHistoryData.appendChild(div);
  }
});
// call-btn-8
document.getElementById("call-btn-8").addEventListener("click", function () {
  const saveCoins = parseInt(document.getElementById("coins").innerText);
  const reduceCoins = 20;

  const availableCoins = saveCoins - reduceCoins;
  if (availableCoins < 0) {
    alert("You have not enough coins, you need minimum 20 coins to call.");
    return;
  }

  document.getElementById("coins").innerText = availableCoins;
  alert(" You are calling Brac Helpline 16445");
  const data = {
    name: "Brac Helpline",
    num: 16445,
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);
  const callHistoryData = document.getElementById("call-history-data");
  callHistoryData.innerText = "";
  for (const history of callHistory) {
    const div = document.createElement("div");
    div.innerHTML = ` <div class="mt-10">
          <div class="bg-white rounded-xl shadow-xl hover:shadow-2xl p-2">
            <h1 class="font-bold">${history.name}</h1>
            <h2 class="font-semibold">${history.num}</h2>
            <p>${history.date}</p>
          </div>
        </div>
  
    `;
    callHistoryData.appendChild(div);
  }
});
// call-btn-9
document.getElementById("call-btn-9").addEventListener("click", function () {
  const saveCoins = parseInt(document.getElementById("coins").innerText);
  const reduceCoins = 20;

  const availableCoins = saveCoins - reduceCoins;

  if (availableCoins < 0) {
    alert(" You don't have enough coins, you need minimum 20 coins to call.");
    return;
  }

  document.getElementById("coins").innerText = availableCoins;
  alert(" You are calling Bangladesh Railway Helpline 163");
  const data = {
    name: "Bangladesh Railway Helpline",
    num: 163,
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);
  const callHistoryData = document.getElementById("call-history-data");
  callHistoryData.innerText = "";
  for (const history of callHistory) {
    const div = document.createElement("div");
    div.innerHTML = ` <div class="mt-10">
          <div class="bg-white rounded-xl shadow-xl hover:shadow-2xl p-2">
            <h1 class="font-bold">${history.name}</h1>
            <h2 class="font-semibold">${history.num}</h2>
            <p>${history.date}</p>
          </div>
        </div>
  
    `;
    callHistoryData.appendChild(div);
  }
});

// copy and count

const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const textElement = document.getElementById(targetId);

    if (textElement) {
      const text = textElement.textContent;

      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert("Hotline number copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
          alert("Failed to copy text.");
        });
    }
  });
});
// copy-counting
const copyCount = document.querySelectorAll(".copy-count");
const copyCountElement = document.getElementById("copyCount");

for (const count of copyCount) {
  count.addEventListener("click", function () {
    let currentCopyCount = parseInt(copyCountElement.textContent);
    currentCopyCount++;
    copyCountElement.textContent = currentCopyCount;
  });
}

// clear history

document.getElementById("clear-btn").addEventListener("click", function () {
  const callHistoryData = document.getElementById("call-history-data");
  callHistoryData.innerText = "";
  callHistory = [];
});
