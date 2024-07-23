import { Link } from "react-router-dom";
import LogoCarregando from "../../assets/carregando.png";
import { Container } from "../../components/container";

export function Finish() {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-6 h-screen">
        <div className="flex flex-col justify-around items-center gap-8 w-full my-auto py-4 bg-white rounded-lg h-[80%]">
          <p className="font-medium text-4xl">Parabéns pela compra!</p>
          <img src={LogoCarregando} alt="Logo de emoji erguendo peso" />
          <p className="text-lg">Aproveite para explorar mais academias.</p>
          <Link to="/">
            <button className="bg-yellow-500 py-2 px-6 w-52 rounded-lg font-bold text-white">
              Explorar
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-around items-center gap-8 w-full my-auto py-4 bg-white rounded-lg h-[80%]">
          <p className="font-medium text-3xl">
            Você finalizou sua compra para:
          </p>
          <strong className="text-lg font-bold">Academia: xxxxx</strong>
          <p className="text-gray-600">Endereço: tal tal tal tal tal tal</p>
          <Link to="/login">
            <button className="bg-red-600 py-2 px-6 w-52 rounded-lg font-bold text-white">
              Sair
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
