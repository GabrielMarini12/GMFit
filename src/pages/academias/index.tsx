import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "../../components/container";
import { AcademiaProps } from "../home";

import { FaStopwatch } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

export function Academias() {
  const { id } = useParams();
  const [academia, setAcademia] = useState<AcademiaProps>();
  const [sliderPreView, setSliderPreView] = useState<number>(4);

  useEffect(() => {
    async function getAcademia() {
      const response = await api.get(`/academias/${id}`);
      setAcademia(response.data);
    }

    getAcademia();
  }, [id]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSliderPreView(2);
      } else {
        setSliderPreView(4);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <main className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {academia && (
          <section key={academia.id} className="w-full mb-4">
            <p className="px-4 text-xl mb-2">Academia</p>
            <p className="font-bold text-3xl px-4 mb-6">{academia.name}</p>
            <img
              className="w-full rounded-lg mb-8 max-h-fit shadow-lg shadow-slate-300"
              src={academia.cover}
            />

            <div className="ml-12 mr-12 max-sm:ml-6 max-sm:mr-6">
              <Swiper
                slidesPerView={sliderPreView}
                pagination={{ clickable: true }}
                navigation
              >
                {academia.imagens.map((imagem) => (
                  <SwiperSlide key={imagem} className="pl-1 pr-1">
                    <img
                      className="mb-8 w-full h-24 rounded-lg cursor-pointer opacity-40 hover:opacity-100"
                      src={imagem}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        )}

        {academia && (
          <div className="flex flex-col mt-2">
            <section className="border-2 border-yellow-500 w-full max-h-64 rounded-lg mt-24 justify-around flex flex-col px-8 py-5 gap-4  max-sm:mt-0">
              <div className="flex justify-between">
                <FaStopwatch
                  size={28}
                  color="#3e5040"
                  className="ml-10  max-sm:ml-0"
                />

                <p className="font-medium text-yellow-500 text-lg">
                  Horário de funcionamento
                </p>
              </div>
              <div className="flex justify-between mr-20 max-sm:mr-0">
                <p className="italic text-lg">Segundas à Sextas</p>
                <p className="font-bold">{academia.horariosegundaasexta}</p>
              </div>
              <div className="flex justify-between mr-20 max-sm:mr-0">
                <p className="italic text-lg">Sábado e Feriados</p>
                <p className="font-bold">{academia.horariosabadoeferiado}</p>
              </div>
              <div className="flex justify-between mr-20 max-sm:mr-0">
                <p className="italic text-lg">Domingos</p>
                <p className="font-bold">{academia.horariodomingo}</p>
              </div>
            </section>

            <section className="border-2 border-yellow-500 w-full max-h-80 rounded-lg mt-6 justify-around flex flex-col px-4 py-3 gap-2">
              <div className="flex justify-between">
                <iframe
                  className="shadow-lg shadow-slate-200 w-full h-64"
                  src={academia.mapa}
                  loading="lazy"
                ></iframe>
              </div>
            </section>

            <section className="px-6">
              <Link to={`/planos/${academia.id}`}>
                <button className="p-3 bg-yellow-400 w-full rounded-full font-medium text-lg mt-12 cursor-pointer hover:bg-yellow-500  max-sm:mt-6">
                  Ver planos
                </button>
              </Link>
            </section>
          </div>
        )}
      </main>
    </Container>
  );
}
