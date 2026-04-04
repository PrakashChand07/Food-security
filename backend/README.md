# New-theme Backend

Express + MongoDB backend to store form submissions from the New-theme React frontend.

Quick start

1. Copy `.env.example` to `.env` and set `MONGO_URI` and optional `PORT`.
2. Install dependencies:

```powershell
cd backend; npm install
```

3. Start in development:

```powershell
npm run dev
```

Available endpoints (all POST):

- POST /api/forms/subscribe
- POST /api/forms/contact
- POST /api/forms/speak
- POST /api/forms/nominate
- POST /api/forms/partner
- POST /api/forms/exhibit-sponsor
- POST /api/forms/past-edition
- POST /api/forms/booking

Each endpoint expects JSON body; the server will respond with the saved record.
