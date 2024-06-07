import Home from "../app/Components/index";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Bubble Box Taguatinga",
  description: "Bubble Box - Rede de Lavanderias Self Service",
  openGraph: {
    images: [
      {
        url: "/imagens/logo.png",
        alt: "Bubble Box Logo"
      }
    ]
  },
  icons: {
    icon: "/imagens/favicon.ico"
  },
  keywords: ["Lavanderia", "Self Service", "Bubble Box"]
};


export default function Page() {
  return (
    <Home />
  );
}
