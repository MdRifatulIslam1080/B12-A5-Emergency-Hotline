const heartIcons = document.querySelectorAll(".heart-icon");
const heartCountElement = document.getElementById("heartCount");

for (const icon of heartIcons) {
  icon.addEventListener("click", function () {
    let currentCount = parseInt(heartCountElement.textContent);
    currentCount++;
    heartCountElement.textContent = currentCount;
  });
}

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
});
// call-btn-9
document.getElementById("call-btn-9").addEventListener("click", function () {
  const saveCoins = parseInt(document.getElementById("coins").innerText);
  const reduceCoins = 20;

  const availableCoins = saveCoins - reduceCoins;
  if (availableCoins < 0) {
    alert("You have not enough coins, you need minimum 20 coins to call.");
    return;
  }

  document.getElementById("coins").innerText = availableCoins;
});
