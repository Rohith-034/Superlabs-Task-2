const startSellingButtons = [
  document.getElementById('btnStartSelling'),
  document.getElementById('fixedStartSelling'),
  document.getElementById('footerStartSelling'),
];
const chatConsultantBtn = document.getElementById('btnChatConsultant');
const fixedCustomerServiceBtn = document.getElementById('fixedCustomerService');

startSellingButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Thank you for your interest! The selling process will begin shortly.');
  });
});

chatConsultantBtn.addEventListener('click', () => {
  alert('Connecting you to a consultant now...');
});

fixedCustomerServiceBtn.addEventListener('click', () => {
  alert('Customer service will be with you shortly.');
});