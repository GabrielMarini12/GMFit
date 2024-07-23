import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Link, useParams } from "react-router-dom";
import LogoCarregando from "../../assets/carregando.png";
import { Container } from "../../components/container";
import { AcademiaProps } from "../home";

export function Finish() {
  const { id } = useParams();
  const [academia, setAcademia] = useState<AcademiaProps>();

  useEffect(() => {
    async function getAcademia() {
      const response = await api.get(`/academias/${id}`);
      setAcademia(response.data);
    }

    getAcademia();
  }, [id]);

  return (
    <Container>
      <div className="grid grid-cols-2 gap-6 py-8 h-screen max-lg:grid-cols-1 max-lg:h-full">
        <div className="flex flex-col justify-around items-center text-center w-full my-auto py-6 bg-white rounded-lg h-[80%] max-lg:h-full max-lg:gap-6">
          <p className="font-medium text-4xl">Parabéns pela compra!</p>
          <img src={LogoCarregando} alt="Logo de emoji erguendo peso" />
          <p className="text-lg">Aproveite para explorar mais academias.</p>
          <Link to="/">
            <button className="bg-yellow-500 py-2 px-6 w-52 rounded-lg font-bold text-white">
              Explorar
            </button>
          </Link>
        </div>
        {academia && (
          <div className="flex flex-col justify-around items-center text-center w-full my-auto py-8 bg-white rounded-lg h-[80%] max-lg:h-full max-lg:gap-12">
            <p className="font-medium text-3xl text-gray-500">
              Você finalizou sua compra para:
            </p>
            <strong className="text-lg font-bold">
              Academia: {academia.name}
            </strong>
            <p className="text-gray-600">{academia.address}</p>
            <Link to="/login">
              <button className="bg-red-600 py-2 px-6 w-52 rounded-lg font-bold text-white">
                Sair
              </button>
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
}
