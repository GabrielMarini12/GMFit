import { FaWhatsapp } from "react-icons/fa";

export function BtnWhatsapp() {
  return (
    <div className="bg-green-500 w-16 h-16 rounded-full items-center flex justify-center fixed bottom-5 right-2 cursor-pointer hover:bg-green-600 animate-bounce z-10 transition-all">
      <a
        href={
          "https://api.whatsapp.com/send?phone=51993629999&text=Olá, gostaria de saber mais sobre os planos da GM Fit!"
        }
        target="_blank"
      >
        <FaWhatsapp size={36} color="#fff" />
      </a>
    </div>
  );
}
