# hr-demo-test
# HR Demo — Test Mode

เดโมระบบ HR (Clock-in, Leave, Payslip) พร้อมใช้งาน **ฟรี** บน Vercel  
เลือกใช้งานได้ 2 แบบ:
- **Basic (แนะนำสำหรับมือใหม่):** ไม่มีแบ็กเอนด์ ใช้งานเดโม UI ได้ทันที
- **Advanced:** มี Login (Email OTP), RBAC (employee/manager/hr), อัปโหลดเซลฟี (Supabase Storage), และหน้า **/admin**

---

## 🚀 ใช้งานแบบเร็วสุด (Basic)
> ใช้ได้เลย ไม่ต้องตั้งค่า Supabase/ENV

```bash
pnpm install       # หรือ npm/yarn
pnpm dev           # เปิด http://localhost:3000
