import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "../../components/container";
import { AcademiaProps } from "../home";
import btnHelp from "../../assets/botaoHelp.png";

import { FaStopwatch, FaLocationArrow } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

export function Academias() {
  const { id } = useParams();
  const [academia, setAcademia] = useState<AcademiaProps>();
  const [academias, setAcademias] = useState<AcademiaProps[]>([]);
  const [sliderPreView, setSliderPreView] = useState<number>(4);

  useEffect(() => {
    async function getAcademias() {
      const resposta = await api.get("/academias");
      setAcademias(resposta.data);
    }

    getAcademias();
  }, []);

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
        setSliderPreView(1);
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

  function handleScroll() {
    window.scrollTo(0, 0);
  }

  return (
    <Container>
      <main className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {academia && (
          <section key={academia.id} className="w-full mb-4">
            <p className="px-4 text-xl mb-2">Academia</p>
            <p className="font-bold text-3xl px-4 mb-6">{academia.name}</p>
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
            >
              {academia.imagens.map((imagem) => (
                <SwiperSlide key={imagem} className="pl-1 pr-1 mb-2">
                  <img
                    className="w-full rounded-lg mb-8 max-h-fit shadow-lg shadow-slate-300 z-0"
                    src={imagem}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
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
          </div>
        )}
      </main>
      {academia && (
        <section className="px-6">
          <Link to={`/planos/${academia.id}`}>
            <button className="p-3 mb-12 bg-red-600 w-full text-white rounded-full font-medium text-lg mt-6 cursor-pointer hover:bg-red-700 transition-all max-sm:mt-6">
              Quero treinar aqui!
            </button>
          </Link>
        </section>
      )}

      <section className="mt-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-medium">
          Conheça <span className="text-yellow-500 font-bold">a equipe</span>
        </h1>
        <p className="mt-4 w-2/3 text-gray-600 flex justify-center items-center">
          É bom contar com essa galera para tirar dúvidas, treinar pra valer,
          bater um papinho...
        </p>
        <p className="mb-4 w-2/3 text-gray-600 flex justify-center items-center">
          Identifique o pessoal pela cor da camiseta!
        </p>
        <div className="grid grid-cols-3 mt-12 max-sm:grid-cols-1 mb-6">
          <div className="flex flex-col justify-center items-center max-sm:mb-8">
            <img
              src="https://assets3.smartfit.com.br/assets/locations-page-v4/recepcionista.png"
              alt="Camiseta Recepcionista"
            />
            <p className="text-xl mt-2">Recepcionista</p>
            <p className="text-gray-600 mt-2 text-center w-2/3 text-sm">
              Dúvidas sobre a operação da academia? Traga pro balcão!
            </p>
          </div>

          <div className="flex flex-col justify-center items-center max-sm:mb-8">
            <img
              src="https://assets3.smartfit.com.br/assets/locations-page-v4/professores.png"
              alt="Camiseta Professores"
            />
            <p className="text-xl mt-2">Professores</p>
            <p className="text-gray-600 mt-2 text-center w-2/3 text-sm">
              Ele sabe tudo sobre exercício, monta treino, dá aula coletiva e te
              ajuda a conquistar seus objetivos.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center max-sm:mb-8">
            <img
              src="https://assets3.smartfit.com.br/assets/locations-page-v4/lider.png"
              alt="Camiseta Líder da Unidade"
            />
            <p className="text-xl mt-2">Líder de Unidade</p>
            <p className="text-gray-600 mt-2 text-center w-2/3 text-sm">
              É a pessoa responsável pelo bom funcionamento da unidade está
              sempre disponível para ajudar!
            </p>
          </div>
        </div>
      </section>

      <div className="flex w-full bg-yellow-100 mt-6 py-4 px-2 justify-center items-center rounded-lg mb-10">
        <img src={btnHelp} alt="Botão de ajuda" className="mr-6 max-sm:w-24" />
        <div className="flex flex-col">
          <p className="text-3xl mb-2 max-sm:text-lg">
            Se ficar com dúvida, a gente te ajuda!︎
          </p>
          <p className="text-gray-700 text-sm">
            Todos os nossos equipamentos possuem o botão GM Help, que solicita
            ajuda de um professor quando acionado.
          </p>
        </div>
      </div>

      {academia && (
        <section key={academia.id} className="w-full mb-12 mt-4 text-center">
          <h1 className="text-4xl font-medium mb-4">
            Encontramos essas outras academias{" "}
            <span className="text-yellow-500 font-bold">perto de você!</span>
          </h1>
          <Swiper
            slidesPerView={sliderPreView}
            pagination={{ clickable: true }}
            navigation
          >
            {academias.map((academia) => (
              <SwiperSlide key={academia.id} className="pl-3 pr-3 mb-10">
                <div className="bg-white rounded-lg mt-4 h-64 relative">
                  <Link to={`/academias/${academia.id}`}>
                    <img
                      className="w-full rounded-tr-lg rounded-tl-lg mb-2 max-h-40 object-cover "
                      src={academia.cover}
                      onClick={handleScroll}
                    />
                  </Link>

                  <p className="font-medium px-4">{academia.name}</p>
                  <p className="pb-2 text-sm text-gray-500 px-3 mt-1">
                    {academia.address}
                  </p>
                  <div className="flex justify-center items-center absolute rounded-full top-1 left-1 bg-white text-gray-500 py-1 px-2  text-xs">
                    <FaLocationArrow />
                    <p className="ml-1">{academia.distancia}m</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}
    </Container>
  );
}
