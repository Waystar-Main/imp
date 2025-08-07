(function () {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showShutdownPage);
  } else {
    showShutdownPage();
  }

  function showShutdownPage() {
    // Clear existing page content
    document.body.innerHTML = '';
    document.head.innerHTML = ''; // Also clear styles/scripts

    // Add new styles
    const style = document.createElement('style');
    style.textContent = `
      html, body {
        margin: 0;
        padding: 0;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f4f4f4;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
      }

      .shutdown-container {
        background-color: white;
        border: 2px solid #b30000;
        border-left: 10px solid #b30000;
        max-width: 600px;
        padding: 30px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
        box-sizing: border-box;
        margin: 20px;
      }

      .shutdown-container h1 {
        color: #b30000;
        font-size: 28px;
        margin-bottom: 10px;
      }

      .shutdown-container p {
        font-size: 16px;
        line-height: 1.6;
      }

      .shutdown-container .contact {
        margin-top: 20px;
        font-weight: bold;
      }

      .shutdown-container .studio {
        margin-top: 10px;
        font-size: 14px;
        color: #777;
      }

      @media (max-width: 600px) {
        .shutdown-container {
          padding: 20px;
        }

        .shutdown-container h1 {
          font-size: 24px;
        }
      }
    `;
    document.head.appendChild(style);

    // Add shutdown message
    const container = document.createElement('div');
    container.className = 'shutdown-container';
    container.innerHTML = `
      <h1>⚠️ This Website Has Been Shut Down</h1>
      <p>This website has been permanently shut down by the administrator.</p>
      <p>If you believe this is an error or need further assistance, please contact our support team.</p>
      <p class="contact">Support Contact: +1 425-243-7632</p>
      <p class="studio">— Waystar Studio</p>
    `;
    document.body.appendChild(container);
  }
})();
