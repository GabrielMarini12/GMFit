import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { AcademiaProps } from "../home";
import { Container } from "../../components/container";

import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

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

            <div className="flex justify-center items-center gap-3 mt-4">
              <FaArrowCircleLeft size={22} />

              <img
                className="w-full rounded-lg mb-8 max-w-20 shadow-lg shadow-slate-300"
                src={academia.cover}
              />
              <img
                className="w-full rounded-lg mb-8 max-w-20 shadow-lg shadow-slate-300"
                src={academia.cover}
              />
              <img
                className="w-full rounded-lg mb-8 max-w-20 shadow-lg shadow-slate-300"
                src={academia.cover}
              />
              <img
                className="w-full rounded-lg mb-8 max-w-20 shadow-lg shadow-slate-300"
                src={academia.cover}
              />
              <img
                className="w-full rounded-lg mb-8 max-w-20 shadow-lg shadow-slate-300"
                src={academia.cover}
              />
              <img
                className="w-full rounded-lg mb-8 max-w-20 shadow-lg shadow-slate-300"
                src={academia.cover}
              />
              <FaArrowCircleRight size={22} />
            </div>
          </section>
        )}
      </main>
    </Container>
  );
}
