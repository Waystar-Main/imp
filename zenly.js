(function () {
  function showShutdownPage() {
    // Hide entire body content without removing the DOM
    const pageContent = document.body;
    if (pageContent) {
      pageContent.style.display = 'none';
    }

    // Create full screen overlay
    const overlay = document.createElement('div');
    overlay.id = 'waystar-shutdown-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = '#f4f4f4';
    overlay.style.zIndex = '999999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.padding = '20px';
    overlay.style.boxSizing = 'border-box';

    // Create styled container
    overlay.innerHTML = `
      <div style="
        background: white;
        border: 2px solid #b30000;
        border-left: 10px solid #b30000;
        padding: 30px;
        max-width: 600px;
        box-shadow: 0 0 15px rgba(0,0,0,0.15);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #333;
        text-align: left;
      ">
        <h1 style="color: #b30000; font-size: 28px; margin-top: 0;">⚠️ This Website Has Been Shut Down</h1>
        <p>This website has been permanently shut down by the administrator.</p>
        <p>If you believe this is an error or need further assistance, please contact our support team.</p>
        <p style="margin-top: 20px; font-weight: bold;">Support Contact: +1 425-243-7632</p>
        <p style="margin-top: 10px; font-size: 14px; color: #777;">— Waystar Studio</p>
      </div>
    `;

    // Append overlay
    document.body.appendChild(overlay);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showShutdownPage);
  } else {
    showShutdownPage();
  }
})();


console.log("Website has been taken Down!!")
