import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../../services/api";
import { AcademiaProps } from "../home";
import { Container } from "../../components/container";

import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaStopwatch,
} from "react-icons/fa";

export function Academias() {
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
      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {academia && (
          <section key={academia.id} className="w-full mb-4">
            <p className="px-4 text-xl mb-2">Academia</p>
            <p className="font-bold text-3xl px-4 mb-6">{academia.name}</p>
            <img
              className="w-full rounded-lg mb-8 max-h-fit shadow-lg shadow-slate-300"
              src={academia.cover}
            />

            <div className="flex max-w-full justify-center items-center gap-2">
              <FaArrowCircleLeft size={22} />

              <img
                className=" rounded-lg mb-8 max-w-20 shadow-lg shadow-slate-300"
                src={academia.cover}
              />
              <img
                className=" rounded-lg mb-8 max-w-20 shadow-lg shadow-slate-300"
                src={academia.cover}
              />
              <img
                className=" rounded-lg mb-8 max-w-20 shadow-lg shadow-slate-300"
                src={academia.cover}
              />
              <img
                className=" rounded-lg mb-8 max-w-20 shadow-lg shadow-slate-300"
                src={academia.cover}
              />
              <img
                className=" rounded-lg mb-8 max-w-20 shadow-lg shadow-slate-300"
                src={academia.cover}
              />
              <img
                className="rounded-lg mb-8 max-w-20 shadow-lg shadow-slate-300"
                src={academia.cover}
              />

              <FaArrowCircleRight size={22} />
            </div>
          </section>
        )}

        <div className="flex flex-col mt-2">
          <section className="border-2 border-yellow-500 w-full max-h-64 rounded-lg mt-24 justify-around flex flex-col px-8 py-5 gap-4">
            <div className="flex justify-between">
              <FaStopwatch size={28} color="#3e5040" className="ml-10" />
              <p className="font-medium text-yellow-500 text-lg">
                Horário de funcionamento
              </p>
            </div>
            <div className="flex justify-between mr-20">
              <p className="italic text-lg">Segundas à Sextas</p>
              <p className="font-bold">5h - 23h</p>
            </div>
            <div className="flex justify-between mr-20">
              <p className="italic text-lg">Sábado e Feriados</p>
              <p className="font-bold">8h - 17h</p>
            </div>
            <div className="flex justify-between mr-20">
              <p className="italic text-lg">Domingos</p>
              <p className="font-bold">8h - 14h</p>
            </div>
          </section>
          <section className="border-2 border-yellow-500 w-full max-h-80 rounded-lg mt-6 justify-around flex flex-col px-4 py-3 gap-2">
            <div className="flex justify-between">
              <iframe
                className="shadow-lg shadow-slate-200 w-full h-64"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.3275306377013!2d-51.14477022514058!3d-29.76816941851875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95196852301dac53%3A0x43966178c91276ba!2sR.%20Lindolfo%20Collor%2C%20168%20-%20Centro%2C%20S%C3%A3o%20Leopoldo%20-%20RS%2C%2093010-080!5e0!3m2!1spt-BR!2sbr!4v1720144712461!5m2!1spt-BR!2sbr"
                loading="lazy"
              ></iframe>
            </div>
          </section>

          <section className="px-6">
            <Link to="/planos">
              <button className="p-3 bg-yellow-400 w-full rounded-full font-bold text-lg mt-12 cursor-pointer hover:bg-yellow-500">
                Ver planos
              </button>
            </Link>
          </section>
        </div>
      </main>
    </Container>
  );
}
