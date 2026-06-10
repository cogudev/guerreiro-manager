import {Header} from "@/components/pane/header"


// app/admin/layout.tsx
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-container">
       <Header/>
      {children}
    </div>
  );
}