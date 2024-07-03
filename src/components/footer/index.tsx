import logoImg from "../../assets/logoGmFit.png";

export function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center items-center bg-gray-950 pb-8 mt-8">
      <img src={logoImg} alt="Logo so site" className="w-28 mt-4" />
      <p className="text-yellow-500 uppercase text-sm mt-2 mb-2">
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
