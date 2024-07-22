import { Link } from "react-router-dom";
import LogoCarregando from "../../assets/carregando.png";
import { Container } from "../../components/container";

export function Finish() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center gap-8 w-full pt-6 pb-6">
        <p className="font-medium text-4xl">Parabéns pela compra!</p>
        <img src={LogoCarregando} alt="Logo de emoji erguendo peso" />
        <p className="text-lg">Aproveite para explorar mais academias.</p>
        <Link to="/">
          <button className="bg-yellow-500 py-2 px-6 w-52 rounded-lg font-bold text-white">
            Explorar
          </button>
        </Link>
      </div>
    </Container>
  );
}
