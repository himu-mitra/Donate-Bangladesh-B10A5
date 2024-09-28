// Common Function

// Show Active Section
function showSection(selector) {
  document
    .querySelectorAll("#donationSection, #historySection")
    .forEach((section) => {
      section.classList.add("hidden");
    });
  document.querySelector(selector).classList.remove("hidden");
}

// Make Active Button Green
function toggleButtonStyles(activeButton, inactiveButton, section) {
  activeButton.classList.remove("bg-white");
  activeButton.classList.add("bg-[#B4F461]");
  inactiveButton.classList.remove("bg-[#B4F461]");
  inactiveButton.classList.add("bg-white");
  showSection(section);
}

// Get InnerText By QuerySelector
function getInnerText(selector) {
  return document.querySelector(selector).innerText;
}

// Make Donation History Card
function makeDonationHistCard(inputValue, donationFildNameId) {
  const div = document.createElement("div");
  div.className =
    "card bg-base-100 w-full shadow-lg my-5 border border-green-400";
  const div2 = document.createElement("div");
  div2.className = "card-body";
  const h2 = document.createElement("h2");
  h2.className = "card-title text-lg";
  h2.innerText = `${inputValue} Taka is Donated for ${getInnerText(donationFildNameId)}`;
  const p = document.createElement("p");
  const timeOfDonation = new Date().toString();
  p.innerText = `Date: ${timeOfDonation}`;
  div2.appendChild(h2);
  div2.appendChild(p);
  div.appendChild(div2);
  document.querySelector("#historySection").appendChild(div);
}
