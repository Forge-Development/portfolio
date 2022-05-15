new gridjs.Grid({
    columns: ["Service", "Pricing", "Extra Info"],
    data: [
      ["Website Page", "$7 For The First Page", "$5 For Each additional page, if you need more than 10 pages, discounts are available for large orders (NOTE: If wanting JS framework, add $2 for each additional page)"],
      ["Portfolio (Project or Personal)", "$12 Per Page", "$3 for each additional page, developer discount available"],
      ["Bootstrap", "$0", "Bootstrap is included in the package as it is a popular and simple framework"],
      ["Bulma", "$3 Fee", "We recommend Bulma for smaller projects"],
      ["Materialize / MUI", "$5 Fee", "We recommend Materialize for medium sized and growing projects"],
      ["PrimerCSS", "$5 Fee", "We don't recommend PrimerCSS for most projects as it is more complex then the average user will need"],
      ["TailwindCSS", "$7 Fee", "We highly recommend TailwindCSS for large and scalable projects, it is the new kid on the block that will elevate your website to a new level"],
      ["PHP Contact Form With reCaptcha", "$13", "For bigger projects, we recommend opting in for our hCaptcha upgrade (+$3), this will make your form more secure and more user friendly compared to the older reCaptcha method"],
      ["Custom Adblocker Using JS & SweetAlert2", "$18", "Tired of seeing ads being blocked on your website? We have a custom adblocker that will block adblockers on your website using JS it is very effective compared to other methods"],
      ["Upload to Pastebin API using PHP & AceEditor", "$12", "Want an easier way to upload code to Pastebin? You can now upload paste directly from your website using the PasteBin API"],
      ["Setup myBB Forum", "$35", "Does not include themes"],
      ["Setup Shopify Store", "$45", "Sales not are guaranteed"],
      ["Simple Linkvertise Checkpoint System", "$35", "Tired of people bypassing your shortened ad-links? Look no further, our simple but effective solution will recover your lost revenue"],
      ["Custom eCommerce Website Using Stripe", "$55", "Stripe is a popular payment gateway for eCommerce websites, we have a custom solution for you that will make your eCommerce website look and feel like a real store"],
      ["Documentation For Project", "Price Needs To Be Negotiated", "We have multiple options for documentation setup, we can setup documentation for your project based on your needs"],
      ["Backend Related Work", "Price Needs To Be Negotiated", "We can do it all from PHP to Python, contact us for a personalized estimate"],
      ["Fix Invalid Code", "$5 Per Sheet/Page", "We provide code checks for HTML, CSS, JS, PHP, Python, and more"],
      ["Domain Setup/Purchase", "$15", "We can either guide you step by step or you can hand the work to us and we will do the rest"],
      ["Domain Transfers", "$15", "We can either guide you step by step or you can hand the work to us and we will do the rest"],
      ["Migrate + Setup Cloudflare", "$35", "Cloudflare is a great way to protect your site from DDOS attacks and keep your website nice and speedy, we can either guide you step by step or you can hand the work to us and we will do the rest"],
      ["Setup Webpanel", "$25", "We provide help for services including cPanel, Plesk, aaPanel, and more! We can either guide you step by step or you can hand the work to us and we will do the rest"],
      ["Migrate Webserver", "$10", "We make it easy to migrate your website from one server to another, We can either guide you step by step or you can hand the work to us and we will do the rest"],
      ["Setup SSL Certificate", "$15", "We use LetsEncrypt as our choice of SSL certificate, we can either guide you step by step or you can hand the work to us and we will do the rest"],
      ["Setup Linux VPS", "$15", "We are able to setup Linux VPS's with a ride range of operating systems such as Apache, Ubuntu, CentOs, Fedora, Debian, etc. we can either guide you step by step or you can hand the work to us and we will do the rest"],
      ["Setup SQL Database", "$15", "Prices can range depending on multiple factors"],
      ["Setup PostGres Database", "$25", "Prices can range depending on multiple factors"],
      ["Setup Mongoose Database", "$25", "Prices can range depending on multiple factors"],
      ["Miscellaneous Information", "Payment Methods", "We accept Credit Cards, Debit Cards, Buy now pay later services, Bank debits, Apple Pay, Google Pay, CashApp, Over 5 Crypto-Currencies, and we are always look to expand on this list to make it accessible to everyone."],
    ],
    container: document.getElementById("gridjs-container"),
     search: {
        enabled: true
    },
    pagination: {
        enabled: true,
        limit: 5,
        summary: true
    },


  }).render(document.getElementById("pricingsheet"));
