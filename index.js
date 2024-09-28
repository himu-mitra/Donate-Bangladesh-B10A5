document.querySelector("#donationButton").addEventListener("click", () => {
  toggleButtonStyles(
    document.querySelector("#donationButton"),
    document.querySelector("#historyButton"),
    "#donationSection"
  );
});

document.querySelector("#historyButton").addEventListener("click", () => {
  toggleButtonStyles(
    document.querySelector("#historyButton"),
    document.querySelector("#donationButton"),
    "#historySection"
  );
});

function donationHandler(buttonId, inputFieldId, fildAccountBalId, donationFildNameId) {
  document.querySelector(buttonId).addEventListener("click", function () {
    const inputValue = Number(document.querySelector(inputFieldId).value);
    const myAccountBal = Number(getInnerText("#myAccountBal"));

    if (!isNaN(inputValue) && inputValue > 0) {
      if (inputValue <= myAccountBal) {
        document.querySelector(inputFieldId).value = "";
        const myCurrentBal = myAccountBal - inputValue;
        document.querySelector("#myAccountBal").innerText = myCurrentBal;
        const fildAccountBal = Number(getInnerText(fildAccountBalId));
        document.querySelector(fildAccountBalId).innerText =
          fildAccountBal + inputValue;
        my_modal_1.showModal();
        makeDonationHistCard(inputValue, donationFildNameId);
      } else {
        alert(`Insufficient Balance`);
      }
    } else {
      alert(`Invalid Donation Amount. Please Input Valid Amount.`);
    }
  });
}

donationHandler(
  "#noakhaliDonateButton",
  "#noakhaliInputFild",
  "#noakhaliAccountBal",
  "#noakhaliDonationFildName"
);
donationHandler(
  "#feniDonateButton",
  "#feniInputFild",
  "#feniAccountBal",
  "#feniDonationFildName"
);
donationHandler(
  "#aidDonateButton",
  "#aidInputFild",
  "#aidAccountBal",
  "#aidDonationFildName"
);
donationHandler(
  "#refuDonateButton",
  "#refuInputFild",
  "#refuAccountBal",
  "#refuDonationFildName"
);
