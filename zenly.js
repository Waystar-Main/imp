// Hide everything on the existing page
document.documentElement.innerHTML = ''; // Clears the entire page

// Create <style> for shutdown notice
const style = document.createElement('style');
style.textContent = `
  body {
    margin: 0;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
  }

  .container {
    background-color: white;
    border: 2px solid #b30000;
    border-left: 10px solid #b30000;
    max-width: 600px;
    padding: 30px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  }

  h1 {
    color: #b30000;
    font-size: 28px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
  }

  .contact {
    margin-top: 20px;
    font-weight: bold;
  }

  .studio {
    margin-top: 10px;
    font-size: 14px;
    color: #777;
  }

  @media (max-width: 600px) {
    .container {
      padding: 20px;
    }

    h1 {
      font-size: 24px;
    }
  }
`;

// Create container element
const container = document.createElement('div');
container.className = 'container';
container.innerHTML = `
  <h1>⚠️ This Website Has Been Shut Down</h1>
  <p>
    This website has been permanently shut down by the administrator.
    If you believe this is an error or need further assistance, please get in touch with our support team.
  </p>
  <p class="contact">Support Contact: +1 425-243-7632</p>
  <p class="studio">— Waystar Studio</p>
`;

// Inject new body with message
document.head.appendChild(style);
const body = document.createElement('body');
body.appendChild(container);
document.documentElement.appendChild(body);
