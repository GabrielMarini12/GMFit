import { useEffect, useState } from "react";
import { Container } from "../../components/container";
import { Link } from "react-router-dom";

import { api } from "../../services/api";

export interface AcademiaProps {
  id: string;
  name: string;
  address: string;
  smart: number;
  black: number;
  fit: number;
  promotion: number;
  cover: string;
  mapa: string;
  horariosegundaasexta: string;
  horariosabadoeferiado: string;
  horariodomingo: string;
  imagens: string[];
  distancia: string;
}

export function Home() {
  const [academias, setAcademias] = useState<AcademiaProps[]>([]);
  const [input, setInput] = useState("");
  const listacademia = [] as AcademiaProps[];
  const [loadImages, setLoadImages] = useState<string[]>([]);

  useEffect(() => {
    async function getAcademias() {
      const resposta = await api.get("/academias");
      setAcademias(resposta.data);
    }

    getAcademias();
  }, []);

  function handleImageLoad(id: string) {
    setLoadImages((prevImageLoaded) => [...prevImageLoaded, id]);
  }

  async function handleSearchAcademia() {
    if (input === "") {
      const resposta = await api.get("/academias");
      setAcademias(resposta.data);
      return;
    }

    academias.map((academia) => {
      if (input.toUpperCase() === academia.name.toUpperCase()) {
        listacademia.push({
          id: academia.id,
          name: academia.name,
          address: academia.address,
          smart: academia.smart,
          black: academia.black,
          fit: academia.fit,
          promotion: academia.promotion,
          cover: academia.cover,
          mapa: academia.mapa,
          horariosegundaasexta: academia.horariosegundaasexta,
          horariosabadoeferiado: academia.horariosabadoeferiado,
          horariodomingo: academia.horariodomingo,
          imagens: academia.imagens,
          distancia: academia.distancia,
        });
      }
    });

    console.log(listacademia);
    setAcademias(listacademia);
    setInput("");
  }

  return (
    <Container>
      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2">
        <input
          placeholder="Digite o nome da academia..."
          className="w-full border-2 rounded-lg h-9 px-3 outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-gray-950 h-9 px-8 rounded-lg text-white font-medium text-lg hover:bg-yellow-500 hover:text-black transition-all"
          onClick={handleSearchAcademia}
        >
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
            <div
              className="w-full h-48 rounded-tr-lg rounded-tl-lg bg-slate-200"
              style={{
                display: loadImages.includes(academia.id) ? "none" : "block",
              }}
            ></div>
            <img
              className="w-full rounded-tr-lg rounded-tl-lg mb-2 max-h-48 object-cover"
              src={academia.cover}
              onLoad={() => handleImageLoad(academia.id)}
              style={{
                display: loadImages.includes(academia.id) ? "block" : "none",
              }}
            />
            <p className="font-bold text-2xl mt-1 px-4">{academia.name}</p>
            <small className="px-4 text-slate-400">{academia.address}</small>

            <Link to={`/academias/${academia.id}`}>
              <p className="mt-3 px-4 text-green-600 font-medium mb-7">
                Ver academia 👈
              </p>
            </Link>

            <span className=" bg-green-100 text-green-600 font-medium py-1 mx-4 rounded-xl text-sm flex justify-center">
              1° mês por{" "}
              {academia.promotion.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}{" "}
              em Todos os Planos
            </span>

            <div className="flex justify-center gap-8 mt-5">
              <div className="flex flex-col items-center">
                <strong className="text-sm font-medium uppercase">SMART</strong>
                <p className="text-slate-300 text-sm line-through">
                  {" "}
                  {academia.smart.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <strong className="font-medium">
                  {" "}
                  {academia.promotion.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                  *
                </strong>
              </div>

              <div className="flex flex-col items-center">
                <strong className="text-sm font-medium uppercase">BLACK</strong>
                <p className="text-slate-300 text-sm line-through">
                  {" "}
                  {academia.black.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <strong className="font-medium">
                  {" "}
                  {academia.promotion.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                  *
                </strong>
              </div>

              <div className="flex flex-col items-center">
                <strong className="text-sm font-medium uppercase">FIT</strong>
                <p className="text-slate-300 text-sm line-through">
                  {" "}
                  {academia.fit.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <strong className="font-medium">
                  {" "}
                  {academia.promotion.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                  *
                </strong>
              </div>
            </div>

            <div className="px-4">
              <Link to={`/planos/${academia.id}`}>
                <button className="w-full bg-yellow-400 items-center my-4 p-4 rounded-full font-medium hover:bg-yellow-500 transition-all">
                  Ver planos
                </button>
              </Link>
            </div>
          </section>
        ))}
      </main>
    </Container>
  );
}
