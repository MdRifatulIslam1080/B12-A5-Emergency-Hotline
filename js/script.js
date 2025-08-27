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
  alert(" You are calling National Emergency Number 999");
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
    alert("You have not enough coins, you need minimum 20 coins to call.");
    return;
  }

  document.getElementById("coins").innerText = availableCoins;
  alert(" You are calling Bangladesh Railway Helpline 163");
});
