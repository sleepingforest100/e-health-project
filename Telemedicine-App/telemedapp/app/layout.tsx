import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/navbarComp/navbar";
import { ProfileProvider } from "@/context/ProfileContext";
import { DoctorProvider } from "@/context/GetDoctorsContext";

export const metadata: Metadata = {
  title: "E-health system",
  description:
    " Project for e-health system.",
  keywords:
    "telemedicine, pilot, development, project, enterprise, solution, healthcare, health, medical, doctor, patient, appointment, video, call, chat, prescription, history, profile, user, admin, dashboard, calendar, schedule, reminder, notification, telemedapp",
  icons: {
    icon: "/logo.png", // Фавиконка
  },
};

// 📌 Переносим viewport в отдельный экспорт
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DoctorProvider>
          <ProfileProvider>
            <Navbar />
            {children}
          </ProfileProvider>
        </DoctorProvider>
      </body>
    </html>
  );
}
