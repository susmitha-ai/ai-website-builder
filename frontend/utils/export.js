export function downloadHTML(websiteData) {
  if (!websiteData) return;

  const htmlContent = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${websiteData.websiteName}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 40px;
          background: #f8fafc;
          color: #111827;
        }

        .hero {
          background: linear-gradient(to right, #7c3aed, #2563eb);
          color: white;
          padding: 60px;
          border-radius: 20px;
          margin-bottom: 40px;
        }

        .section {
          background: white;
          padding: 30px;
          margin-bottom: 20px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        button {
          background: #7c3aed;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 10px;
          cursor: pointer;
        }
      </style>
    </head>

    <body>
      <div class="hero">
        <h1>${websiteData.websiteName}</h1>
        <h2>${websiteData.theme}</h2>
      </div>

      ${
        websiteData.sections
          ?.map(
            (section) => `
          <div class="section">
            <h2>${section.heading || ""}</h2>
            <p>${section.subheading || ""}</p>
            ${
              section.cta
                ? `<button>${section.cta}</button>`
                : ""
            }
          </div>
        `
          )
          .join("") || ""
      }
    </body>
  </html>
  `;

  const blob = new Blob([htmlContent], {
    type: "text/html",
  });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${websiteData.websiteName || "website"}.html`;
  link.click();
}