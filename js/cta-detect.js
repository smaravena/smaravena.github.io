// cta-detect.js
window.addEventListener("DOMContentLoaded", (event) => {
  const ctaContainer = document.getElementById("cta-container");

  // Smartphone detection using userAgent
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile =
    /iphone|ipod|android|windows phone|blackberry|nokia|samsung|sony|huawei/i.test(
      userAgent
    );

  // Replace div depending of userAgent
  if (isMobile) {
    ctaContainer.innerHTML = `<a href="https://github.com/MatiasGonzalezPizarro/Upliftly/releases/download/OnPublish/app-release.apk" class="bg-tertiary text-white py-3 px-6 rounded-md text-lg hover:bg-primary transition flex items-center justify-center">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
         </svg>
         Download the App
       </a>`;
  } else {
    ctaContainer.innerHTML =
      '<img src="images/qr-code.svg" alt="QR Code" class="mx-auto max-h-64 object-contain">'; // Ajustar tamaño del QR
  }
});
