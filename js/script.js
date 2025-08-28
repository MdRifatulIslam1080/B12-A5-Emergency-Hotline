const heartIcons = document.querySelectorAll(".heart-icon");
const heartCountElement = document.getElementById("heartCount");

for (const icon of heartIcons) {
  icon.addEventListener("click", function () {
    let currentCount = parseInt(heartCountElement.textContent);
    currentCount++;
    heartCountElement.textContent = currentCount;
  });
}

// call history

const callHistory = [];

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
});
document.getElementById("call-btn-1").addEventListener("click", function () {
  const callHistoryData = document.getElementById("call-history-data");
  callHistoryData.innerText = "";
  for (const history of callHistory) {
    const div = document.createElement("div");
    div.innerHTML = ` <div class="mt-10">
          <div class="bg-white rounded-xl shadow-xl hover:shadow-2xl p-2">
            <h1 class="font-bold">${data.name}</h1>
            <h2 class="font-semibold">${data.num}</h2>
            <p>${data.date}</p>
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
});

// copy and count

// 1. Select all elements with the class 'copy-btn'
const copyButtons = document.querySelectorAll(".copy-btn");

// 2. Loop through each button and add a click event listener
copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // 3. Get the ID of the text element from the button's data attribute
    const targetId = button.getAttribute("data-target");
    const textElement = document.getElementById(targetId);

    // 4. Check if the element exists
    if (textElement) {
      // 5. Get the text content
      const text = textElement.textContent;

      // 6. Use the modern Clipboard API to copy the text
      navigator.clipboard
        .writeText(text)
        .then(() => {
          // 7. Optional: Provide user feedback
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
