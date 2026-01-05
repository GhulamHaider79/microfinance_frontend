# Saylani Microfinance — Frontend

A minimal React + Vite frontend for the Saylani Microfinance application. This README gives a quick developer-focused reference, usage instructions, architecture overview and troubleshooting tips.

---

## Quick start

1. Install dependencies
```sh
npm install
```

2. Start dev server
```sh
npm run dev
```

3. Build for production
```sh
npm run build
```

4. Lint
```sh
npm run lint
```

Files:
- Project root: [package.json](package.json)  
- Vite config: [vite.config.js](vite.config.js)  
- App entry: [index.html](index.html) → [src/main.jsx](src/main.jsx)

---

## Important files & main symbols

- App root and router: [`App`](src/App.jsx) ([src/App.jsx](src/App.jsx))  
- App entry: [src/main.jsx](src/main.jsx)
- Auth context & provider: [`AuthProvider`](src/context/AuthContext.jsx) ([src/context/AuthContext.jsx](src/context/AuthContext.jsx))  
- Loan context & provider: [`LoanProvider`](src/context/LoanContext.jsx) ([src/context/LoanContext.jsx](src/context/LoanContext.jsx))

Pages (routes)
- Home — [`Home`](src/pages/Home.jsx) ([src/pages/Home.jsx](src/pages/Home.jsx))  
- Loan flow — [`LoanPage`](src/pages/LoanPage.jsx) ([src/pages/LoanPage.jsx](src/pages/LoanPage.jsx))  
- Update borrower info — [`UpdateBorrowerInfo`](src/pages/UpdateBorrowerInfo.jsx) ([src/pages/UpdateBorrowerInfo.jsx](src/pages/UpdateBorrowerInfo.jsx))  
- Guarantor form — [`GuarantorForm`](src/pages/GuarantorForm.jsx) ([src/pages/GuarantorForm.jsx](src/pages/GuarantorForm.jsx))  
- Download slip — [`DownloadSlip`](src/pages/DownloadSlip.jsx) ([src/pages/DownloadSlip.jsx](src/pages/DownloadSlip.jsx))  
- Auth pages: [`LoginPage`](src/pages/LoginPage.jsx) ([src/pages/LoginPage.jsx](src/pages/LoginPage.jsx)), [`Signup`](src/pages/Signup.jsx) ([src/pages/Signup.jsx](src/pages/Signup.jsx))

Key components
- [`Navbar`](src/components/Navbar.jsx) ([src/components/Navbar.jsx](src/components/Navbar.jsx))  
- [`FooterSection`](src/components/FooterSection.jsx) ([src/components/FooterSection.jsx](src/components/FooterSection.jsx)) — site footer  
- [`Card`](src/components/Card.jsx) ([src/components/Card.jsx](src/components/Card.jsx))  
- [`Button`](src/components/Button.jsx) ([src/components/Button.jsx](src/components/Button.jsx))  
- [`HeroSection`](src/components/HeroSection.jsx) ([src/components/HeroSection.jsx](src/components/HeroSection.jsx))  
- [`Login`](src/components/Login.jsx) ([src/components/Login.jsx](src/components/Login.jsx))  
- [`RegistrationPage`](src/components/RegistrationPage.jsx) ([src/components/RegistrationPage.jsx](src/components/RegistrationPage.jsx))  
- [`Logo`](src/components/Logo.jsx) ([src/components/Logo.jsx](src/components/Logo.jsx))  
- [`Footer`](src/components/Footer.jsx) ([src/components/Footer.jsx](src/components/Footer.jsx))

Styling
- Tailwind entry: [src/index.css](src/index.css)  
- App-specific styles: [src/App.css](src/App.css)

---

## Architecture & data flow (short)

- Authentication uses cookie-based auth with the backend; auth state is loaded on startup by [`AuthProvider`](src/context/AuthContext.jsx) ([src/context/AuthContext.jsx](src/context/AuthContext.jsx)).
- Loan state is loaded via [`LoanProvider`](src/context/LoanContext.jsx) ([src/context/LoanContext.jsx](src/context/LoanContext.jsx)). Routes redirect based on `loan.stepCompleted`.
- File uploads (borrower info) use multipart/form-data; see [`UpdateBorrowerInfo`](src/pages/UpdateBorrowerInfo.jsx) ([src/pages/UpdateBorrowerInfo.jsx](src/pages/UpdateBorrowerInfo.jsx)).
- API base URL (used across pages): https://microfinance-56ai.onrender.com

---

## Common workflows

- User registration: see [`Signup`](src/pages/Signup.jsx) ([src/pages/Signup.jsx](src/pages/Signup.jsx)) — form validation and POST to /api/auth/register
- Login: see [`Login`](src/components/Login.jsx) ([src/components/Login.jsx](src/components/Login.jsx)) — POST to /api/auth/login
- Apply loan: [`LoanPage`](src/pages/LoanPage.jsx) ([src/pages/LoanPage.jsx](src/pages/LoanPage.jsx)) — selects category/subcategory and posts to /api/loan/apply-loan
- Upload borrower documents: [`UpdateBorrowerInfo`](src/pages/UpdateBorrowerInfo.jsx) ([src/pages/UpdateBorrowerInfo.jsx](src/pages/UpdateBorrowerInfo.jsx)) — PUT to /api/loan/borrower-info with files
- Add guarantor: [`GuarantorForm`](src/pages/GuarantorForm.jsx) ([src/pages/GuarantorForm.jsx](src/pages/GuarantorForm.jsx)) — POST to /api/loan/guarantor
- Download slip / delete application: [`DownloadSlip`](src/pages/DownloadSlip.jsx) ([src/pages/DownloadSlip.jsx](src/pages/DownloadSlip.jsx))

---

## Environment & dependencies

- Dev server: Vite ([vite.config.js](vite.config.js))  
- UI: React 18, MUI, Tailwind, Swiper
- Key dependencies are in [package.json](package.json)

Notes:
- Ensure cookies are enabled for cross-site requests if using the hosted backend.
- If Type or runtime versions mismatch, check entries in [package.json](package.json) and update Node/npm accordingly.

---

## Troubleshooting

- Unexpected redirects: open [`LoanProvider`](src/context/LoanContext.jsx) ([src/context/LoanContext.jsx](src/context/LoanContext.jsx)) and confirm `loan.stepCompleted` logic.
- File uploads failing: confirm `Content-Type` is multipart/form-data and backend accepts the file fields (`statement`, `salarySheet`) — see [`UpdateBorrowerInfo`](src/pages/UpdateBorrowerInfo.jsx) ([src/pages/UpdateBorrowerInfo.jsx](src/pages/UpdateBorrowerInfo.jsx)).
- CORS/cookies: backend must set cookies with correct SameSite and secure attributes if running on a different origin.
- Vite issues: clear node_modules, reinstall, check Node version; see [vite.config.js](vite.config.js).

---

## Contributing

- Follow existing code style (Tailwind + MUI).
- Add new routes in [`App`](src/App.jsx) ([src/App.jsx](src/App.jsx)) and protect with contexts if needed.
- Run lint before committing:
```sh
npm run lint
```

---

## License & contact

This repo is a personal/project frontend. For issues or questions open an issue or contact the maintainer.

---

End of file.