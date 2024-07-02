import logoImg from "../../assets/logo-academia.png";

export function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center items-center bg-gray-950 pb-8 mt-8">
      <img src={logoImg} alt="Logo so site" className="w-48" />
      <p className="text-yellow-500 uppercase text-sm mt-[-35px] mb-2">
        Academia Oficial{" "}
        <small className="text-white uppercase text-[8px]">
          Do comitê Olímpico do Brasil
        </small>
      </p>
      <p className="text-white text-sm">
        GM Fit © Todos os direitos reservados - 2024
      </p>
    </footer>
  );
}
