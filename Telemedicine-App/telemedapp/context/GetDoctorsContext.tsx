"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Doctor = {
  id: string;
  name: string;
  title: string;
  numSessions: number;
  nearestApp: string;
  fees60min: number;
  fees30min: number;
  interests: string[];
  rating: number;
  numReviews: number;
  language: string[];
  speciality: string;
  gender: string;
  price: number[];
  todayDate: string;
  thisWeek: string;
  dateRange1: string;
  dateRange2: string;
  country: string[];
  sort: string;
  isOnline: string;
};
interface DoctorContextProps {
  doctors: Doctor[];
  isLoading: boolean;
  error: string | null;
  fetchDoctors: () => void;
}

const DoctorContext = createContext<DoctorContextProps | undefined>(undefined);

export const DoctorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDoctors = async () => {
    try {
      setIsLoading(true);
      // const response = await fetch(
      //   `${process.env.NEXT_PUBLIC_SERVER_NAME}/patient/home`,
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );

      // if (!response.ok) {
      //   throw new Error("Failed to fetch doctors");
      // }
      // const data = await response.json();

      const data: Doctor[] = [
        {
          id: "1",
          name: "Dr. Aian Abdrakhmanov",
          title: "Psychiatrist",
          numSessions: 12,
          nearestApp: "2025-03-05",
          rating: 4.6,
          fees60min: 31000,
          fees30min: 21000,
          numReviews: 55,
          interests: ["Depression", "Anxiety", "Stress", "Relationships"],
          speciality: "Mental Health",
          gender: "Male",
          price: [31000, 21000],
          todayDate: "2025-02-23",
          thisWeek: "2025-02-23 to 2025-03-01",
          dateRange1: "2025-02-01 to 2025-02-07",
          dateRange2: "2025-02-08 to 2025-02-14",
          country: ["Kazakhstan"],
          sort: "rating",
          isOnline: "Yes",
          language: ["Kazakh", "Russian", "English"],
        },
        {
          id: "2",
          name: "Dr. Yuriy Pya",
          title: "Cardiologist",
          numSessions: 18,
          nearestApp: "2025-03-10",
          rating: 4.8,
          fees60min: 41000,
          fees30min: 26000,
          numReviews: 65,
          interests: ["Heart Disease", "Hypertension", "Cholesterol", "Arrhythmia"],
          speciality: "Cardiology",
          gender: "Male",
          price: [41000, 26000],
          todayDate: "2025-02-23",
          thisWeek: "2025-02-23 to 2025-03-01",
          dateRange1: "2025-02-01 to 2025-02-07",
          dateRange2: "2025-02-08 to 2025-02-14",
          country: ["Kazakhstan"],
          sort: "nearestApp",
          isOnline: "Yes",
          language: ["Kazakh", "Russian", "English"],
        },
        {
          id: "3",
          name: "Dr. Yermagambet Mukhanovich",
          title: "Dermatologist",
          numSessions: 22,
          nearestApp: "2025-03-15",
          rating: 4.9,
          fees60min: 36000,
          fees30min: 23000,
          numReviews: 75,
          interests: ["Acne", "Eczema", "Psoriasis", "Skin Cancer"],
          speciality: "Dermatology",
          gender: "Female",
          price: [36000, 23000],
          todayDate: "2025-02-23",
          thisWeek: "2025-02-23 to 2025-03-01",
          dateRange1: "2025-02-01 to 2025-02-07",
          dateRange2: "2025-02-08 to 2025-02-14",
          country: ["Kazakhstan"],
          sort: "rating",
          isOnline: "Yes",
          language: ["Kazakh", "Russian", "English"],
        },
        {
          id: "4",
          name: "Dr. Panchenko Snezhana Konstantinovna",
          title: "Pediatrician",
          numSessions: 27,
          nearestApp: "2025-03-20",
          rating: 4.9,
          fees60min: 33000,
          fees30min: 21000,
          numReviews: 85,
          interests: ["Child Development", "Vaccinations", "Nutrition", "Asthma"],
          speciality: "Pediatrics",
          gender: "Female",
          price: [33000, 21000],
          todayDate: "2025-02-23",
          thisWeek: "2025-02-23 to 2025-03-01",
          dateRange1: "2025-02-01 to 2025-02-07",
          dateRange2: "2025-02-08 to 2025-02-14",
          country: ["Kazakhstan"],
          sort: "nearestApp",
          isOnline: "Yes",
          language: ["Kazakh", "Russian", "English"],
        },
        {
          id: "5",
          name: "Dr. Kuderinova Aniya Bekbulatovna",
          title: "Neurologist",
          numSessions: 20,
          nearestApp: "2025-03-25",
          rating: 4.7,
          fees60min: 43000,
          fees30min: 29000,
          numReviews: 60,
          interests: ["Epilepsy", "Stroke", "Migraine", "Multiple Sclerosis"],
          speciality: "Neurology",
          gender: "Male",
          price: [43000, 29000],
          todayDate: "2025-02-23",
          thisWeek: "2025-02-23 to 2025-03-01",
          dateRange1: "2025-02-01 to 2025-02-07",
          dateRange2: "2025-02-08 to 2025-02-14",
          country: ["Kazakhstan"],
          sort: "rating",
          isOnline: "Yes",
          language: ["Kazakh", "Russian", "English"],
        },
        {
          id: "6",
          name: "Dr. Teshchenko Elena Alexandrovna",
          title: "Endocrinologist",
          numSessions: 22,
          nearestApp: "2025-03-10",
          rating: 4.7,
          fees60min: 21000,
          fees30min: 12000,
          numReviews: 65,
          interests: [
            "Diabetes",
            "Thyroid Disorders",
            "Hormonal Imbalances",
            "Obesity",
          ],
          speciality: "Endocrinology",
          gender: "Female",
          price: [21000, 12000],
          todayDate: "2025-02-23",
          thisWeek: "2025-02-23 to 2025-03-01",
          dateRange1: "2025-02-01 to 2025-02-07",
          dateRange2: "2025-02-08 to 2025-02-14",
          country: ["Kazakhstan"],
          sort: "nearestApp",
          language: ["Kazakh", "Russian"],
          isOnline: "Yes",
        },
        {
          id: "7",
          name: "Dr. Igor Alexandrovich Remesnikov",
          title: "Orthopedic Surgeon",
          numSessions: 30,
          nearestApp: "2025-03-15",
          rating: 4.8,
          fees60min: 25000,
          fees30min: 14000,
          numReviews: 75,
          interests: [
            "Joint Replacement",
            "Sports Injuries",
            "Arthritis",
            "Fractures",
          ],
          speciality: "Orthopedics",
          gender: "Male",
          price: [25000, 14000],
          todayDate: "2025-02-23",
          thisWeek: "2025-02-23 to 2025-03-01",
          dateRange1: "2025-02-01 to 2025-02-07",
          dateRange2: "2025-02-08 to 2025-02-14",
          country: ["Kazakhstan"],
          sort: "rating",
          language: ["Kazakh", "Russian"],
          isOnline: "Yes",
        },
        {
          id: "8",
          name: "Dr. Stanislav Igorevich Pushkar",
          title: "Gastroenterologist",
          numSessions: 28,
          nearestApp: "2025-03-20",
          rating: 4.9,
          fees60min: 23000,
          fees30min: 12500,
          numReviews: 85,
          interests: ["IBS", "Liver Disease", "GERD", "Colonoscopy"],
          speciality: "Gastroenterology",
          gender: "Female",
          price: [23000, 12500],
          todayDate: "2025-02-23",
          thisWeek: "2025-02-23 to 2025-03-01",
          dateRange1: "2025-02-01 to 2025-02-07",
          dateRange2: "2025-02-08 to 2025-02-14",
          country: ["Kazakhstan"],
          sort: "nearestApp",
          language: ["Kazakh", "Russian", "English"],
          isOnline: "Yes",
        },
      ];

      setDoctors(data);
      setIsLoading(false);
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (doctors.length === 0) {
      fetchDoctors();
    }
  }, [doctors]);

  return (
    <DoctorContext.Provider value={{ doctors, isLoading, error, fetchDoctors }}>
      {children}
    </DoctorContext.Provider>
  );
};

export const useDoctorContext = () => {
  const context = useContext(DoctorContext);
  if (!context) {
    throw new Error("useDoctorContext must be used within a DoctorProvider");
  }
  return context;
};
