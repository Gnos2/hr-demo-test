# HR Demo — Test Mode (Advanced)
- Next.js (App Router)
- Supabase Auth (Email OTP), RBAC (employee/manager/hr)
- Storage bucket `selfies` (public) with policies
- API Routes (attendance, leaves, payslips, signed URLs)
- Admin Dashboard (employees/leaves overview)

## Quickstart
```bash
pnpm install
cp .env.example .env.local
pnpm dev
```
Run `sql/setup.sql` in Supabase SQL Editor first.
