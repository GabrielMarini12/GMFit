import { useEffect, useState } from "react";
import { Container } from "../../components/container";
import { Link } from "react-router-dom";

import { api } from "../../services/api";

interface AcademiaProps {
  id: number;
  name: string;
  address: string;
  smart: number;
  black: number;
  fit: number;
  cover: string;
}

export function Home() {
  const [academias, setAcademias] = useState<AcademiaProps[]>([]);

  useEffect(() => {
    async function getAcademias() {
      const resposta = await api.get("/academias");
      setAcademias(resposta.data);
    }

    getAcademias();
  }, []);

  return (
    <Container>
      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2">
        <input
          placeholder="Digite aqui a cidade..."
          className="w-full border-2 rounded-lg h-9 px-3 outline-none"
        />
        <button className="bg-gray-950 h-9 px-8 rounded-lg text-white font-medium text-lg hover:bg-yellow-500 hover:text-black">
          Buscar
        </button>
      </section>

      <h1 className="font-bold text-center mt-6 text-2xl mb-8">
        E aí, onde você quer treinar?
      </h1>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {academias.map((academia) => (
          <section
            key={academia.id}
            className="w-full mb-4 bg-white rounded-lg shadow-lg shadow-slate-300 hover:shadow-slate-400"
          >
            <img
              className="w-full rounded-tr-lg rounded-tl-lg mb-2 max-h-48"
              src="data:image/jpeg;base64,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"
            />
            <p className="font-bold text-2xl mt-1 px-4">Iron Berg</p>
            <small className="px-4 text-slate-400">
              Rua Lindolfo Collor, 168 - Centro, São Leopoldo - RS
            </small>

            <Link to="/login">
              <p className="mt-3 px-4 text-green-600 font-medium mb-7">
                Ver academia 👈
              </p>
            </Link>

            <span className=" bg-green-100 text-green-600 font-medium py-1 mx-4 rounded-xl text-sm flex justify-center">
              1° mês por R$ 9,90 em Todos os Planos
            </span>

            <div className="flex justify-center gap-8 mt-5">
              <div className="flex flex-col items-center">
                <strong className="text-sm font-medium uppercase">SMART</strong>
                <p className="text-slate-300 text-sm line-through">R$ 149,90</p>
                <strong className="font-medium">R$ 9,90*</strong>
              </div>

              <div className="flex flex-col items-center">
                <strong className="text-sm font-medium uppercase">BLACK</strong>
                <p className="text-slate-300 text-sm line-through">R$ 149,90</p>
                <strong className="font-medium">R$ 9,90*</strong>
              </div>

              <div className="flex flex-col items-center">
                <strong className="text-sm font-medium uppercase">FIT</strong>
                <p className="text-slate-300 text-sm line-through">R$ 149,90</p>
                <strong className="font-medium">R$ 9,90*</strong>
              </div>
            </div>

            <div className="px-4">
              <button className="w-full bg-yellow-400 items-center my-4 p-4 rounded-full font-medium hover:bg-yellow-500">
                Ver planos
              </button>
            </div>
          </section>
        ))}
      </main>
    </Container>
  );
}
