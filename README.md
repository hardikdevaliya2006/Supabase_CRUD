# Supabase Password CRUD

[![Website](https://img.shields.io/badge/website-live-brightgreen)](https://supabasepasscrud.vercel.app) [![License](https://img.shields.io/badge/license-MIT-blue.svg)]()

A clean, minimal, and secure **Supabase + Next.js** example app for creating, reading, updating, and deleting password vault entries (CRUD). This repository demonstrates best practices for working with Supabase as the backend (database + auth) while keeping the frontend simple, responsive, and production-ready.

---

## 🔗 Live Demo

Try the live app: **https://supabasepasscrud.vercel.app**

> If the demo is down, run the app locally (instructions below).

---

## ✨ Key Features

- Email/password authentication using Supabase Auth
- Full CRUD for password vault items (title, username/email, password, notes, tags)
- Client-side form validation and friendly UI states (loading, empty, error)
- Copy-to-clipboard for passwords with visual confirmation
- Secure handling recommendations for API keys and environment variables
- Responsive UI (mobile → desktop)

---

## 🧭 Tech Stack

- Frontend: React.js + Tailwind CSS + Axios + React Router
- Backend: Supabase (Postgres, Auth, Realtime)
- Deployment: Vercel
- State Mangement: Redux for state

---

## 📁 Project Structure (example)

```
├─ components/        # Reusable UI components
├─ lib/               # Supabase client and utilities
├─ pages/ or app/     # Next.js routes and pages
├─ styles/            # Tailwind/Tokens
├─ prisma/ or sql/    # DB schema or migration SQL (optional)
├─ public/            # Static assets, screenshots
└─ README.md
```

---

## ⚙️ Prerequisites

- Node.js >= 18
- npm or yarn
- A Supabase project (free tier is sufficient for demo)
- Vercel account for deployment (optional)

---

## 🔧 Setup & Local Development

1. **Clone repo**

```bash
git clone <repo-url>
cd <repo-folder>
```

2. **Install dependencies**

```bash
npm install
# or
yarn
```

3. **Create a Supabase project**

- Go to [supabase.com](https://supabase.com)
- Create a new project and note the `Project URL` and `Anon Public Key` from the project settings

4. **Database table (example SQL)**

Run this SQL in the Supabase SQL editor to create a `vaults` table:

```sql
create table public.vaults (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade,
  title text not null,
  username text,
  password text not null,
  notes text,
  tags text[],
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

> Tip: Use Postgres row-level security (RLS) so each user can only access their own rows.

5. **Environment variables**

Create a `.env.local` file at the project root with the following keys:

```
NEXT_PUBLIC_SUPABASE_URL=https://xyzcompany.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=public-anon-key
SUPABASE_SERVICE_ROLE_KEY=service-role-key   # ONLY on server (do NOT commit)
```

> Important: never commit `SUPABASE_SERVICE_ROLE_KEY` or any secret to source control.

6. **Run the dev server**

```bash
npm run dev
# or
yarn dev
```

Open `http://localhost:3000`.

---

## ✅ Usage

- Sign up / sign in with email
- Create a vault entry (title + password required)
- Edit or delete entries
- Copy password to clipboard while viewing the entry

---

## 🔐 Security Recommendations

1. **Use RLS (Row Level Security)**

Enable RLS and add policies so records are scoped to `auth.uid()` (Supabase `auth` variable). Example policy:

```sql
-- policy: allow authenticated users to manage their own vaults
create policy "Users can manage their vaults" on public.vaults
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
```

2. **Never expose service role key on client** — keep it server-side only.
3. **Encrypt sensitive data** before storing if you require an extra layer of security (e.g., client-side encryption using a user passphrase). Supabase stores plaintext unless you implement encryption.
4. **Use short-lived sessions** and encourage users to enable MFA if available.

---

## 🛠️ Helpful Tips & Improvements

- Add client-side encryption for stored passwords (e.g., Web Crypto API) so stored values are encrypted before hitting the DB.
- Add audit logs or last-accessed timestamps to help users manage old credentials.
- Improve UX with optimistic updates for faster feeling CRUD operations.
- Add backup/export (encrypted JSON or CSV) so users can export their vaults.
- Integrate a password strength meter and auto-generated passwords.

---

## 🔁 Deployment (Vercel)

1. Push your repository to GitHub.
2. Connect the repo to Vercel.
3. Set the environment variables in Vercel dashboard (same keys as `.env.local`).
4. Deploy — Vercel will build and publish the site.

---

## 📌 Common Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## 🤝 Contributing

Contributions, improvements, and bug reports are welcome. Please open an issue or a PR with a clear description and reproduction steps.

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 📬 Contact / Support

If you need help, please open an issue in this repository or reach out to the maintainer via the contact info in `package.json`.

---

> Made with ❤️ By Hardik Devaliya — clean, simple, secure. If you want, I can tailor this README to include exact code snippets from your project (components, scripts, or environment values). Just say the word and paste the files or tell me which parts to include.