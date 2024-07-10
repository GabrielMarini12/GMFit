import { Container } from "../../components/container";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export function Planos() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://assets.smartfit.com.br/attachments/b53e790fe4394ccd1865509eba6b907c24735fd5/store/017aaacc29ad8d256a4f21199b1be8b3a2be3492097c88f91d63d4c8889b/banner_location_desktop"
          alt="Banner de promoção"
          className="w-full"
        />

        <h1 className="text-4xl font-medium mt-12 text-center">
          Conheça{" "}
          <span className="text-yellow-500 font-bold">
            os planos dessa academia!
          </span>
        </h1>

        <p className="mt-4 w-2/3 text-gray-600 flex justify-center items-center text-center">
          Os valores apresentados abaixo são promocionais. Aproveite!
        </p>

        <table className="w-full  mt-8 text-center">
          <tr className="grid grid-cols-4 mb-6 border-b-2 h-32 items-center">
            <td></td>
            <td className="text-xl">
              Plano <span className="font-bold">Black</span>
              <p className="text-xs text-gray-500 mt-1">
                Treine em mais de 1.400 academias GM Fit!
              </p>
            </td>
            <td className="text-xl">
              Plano <span className="font-bold">Fit</span>
              <p className="text-xs text-gray-500 mt-1">
                Pague menos para treinar o quanto quiser na sua unidade.
              </p>
            </td>
            <td className="text-xl">
              Plano <span className="font-bold"> Smart</span>
              <p className="text-xs text-gray-500 mt-1">
                Treine quando quiser na sua unidade
              </p>
            </td>
          </tr>
          <tr className="grid grid-cols-4 mb-4 border-b-2 h-12 items-center">
            <td className="text-start text-gray-800">
              Acesso ilimitado a +1.400 academias da rede
            </td>
            <td className="flex justify-center items-center">
              <FaCheckCircle size={28} color="#21d439" />
            </td>
            <td className="flex justify-center items-center">
              <FaTimesCircle size={28} color="#c4c4c4" />
            </td>
            <td className="flex justify-center items-center">
              <FaTimesCircle size={28} color="#c4c4c4" />
            </td>
          </tr>
          <tr className="grid grid-cols-4 mb-4 border-b-2 h-12 items-center">
            <td className="text-start text-gray-800">
              Leve 5 amigos por mês para treinar com você
            </td>
            <td className="flex justify-center items-center">
              <FaCheckCircle size={28} color="#21d439" />
            </td>
            <td className="flex justify-center items-center">
              <FaTimesCircle size={28} color="#c4c4c4" />
            </td>
            <td className="flex justify-center items-center">
              <FaTimesCircle size={28} color="#c4c4c4" />
            </td>
          </tr>
          <tr className="grid grid-cols-4 mb-4 border-b-2 h-12 items-center">
            <td className="text-start text-gray-800">Cadeira de massagem</td>
            <td className="flex justify-center items-center">
              <FaCheckCircle size={28} color="#21d439" />
            </td>
            <td className="flex justify-center items-center">
              <FaTimesCircle size={28} color="#c4c4c4" />
            </td>
            <td className="flex justify-center items-center">
              <FaTimesCircle size={28} color="#c4c4c4" />
            </td>
          </tr>
          <tr className="grid grid-cols-4 mb-4 border-b-2 h-12 items-center">
            <td className="text-start text-gray-800">
              GM Fit GO (treinos online) no app
            </td>
            <td className="flex justify-center items-center">
              <FaCheckCircle size={28} color="#21d439" />
            </td>
            <td className="flex justify-center items-center">
              <FaCheckCircle size={28} color="#21d439" />
            </td>
            <td className="flex justify-center items-center">
              <FaCheckCircle size={28} color="#21d439" />
            </td>
          </tr>
          <tr className="grid grid-cols-4 mb-4 border-b-2 h-12 items-center">
            <td className="text-start text-gray-800">
              Área de musculação e aeróbicos
            </td>
            <td className="flex justify-center items-center">
              <FaCheckCircle size={28} color="#21d439" />
            </td>
            <td className="flex justify-center items-center">
              <FaCheckCircle size={28} color="#21d439" />
            </td>
            <td className="flex justify-center items-center">
              <FaCheckCircle size={28} color="#21d439" />
            </td>
          </tr>
          <tr className="grid grid-cols-4 mb-4 border-b-2 h-12 items-center">
            <td className="text-start text-gray-800">GM Fit App</td>
            <td className="flex justify-center items-center">
              <FaCheckCircle size={28} color="#21d439" />
            </td>
            <td className="flex justify-center items-center">
              <FaCheckCircle size={28} color="#21d439" />
            </td>
            <td className="flex justify-center items-center">
              <FaCheckCircle size={28} color="#21d439" />
            </td>
          </tr>
          <tr className="grid grid-cols-4 mb-6  h-32 items-center">
            <td></td>
            <td className="text-xl">
              <span className="font-bold">R$ 9,90*</span>
              <p className="text-sm text-gray-500 mt-1">
                <span className="text-black font-medium">no 1º mês</span>,
                depois R$ 139,90 /mês
              </p>
              <p className="text-xs text-gray-400 pt-1">
                12 meses de fidelidade
              </p>
            </td>
            <td className="text-xl">
              <span className="font-bold">R$ 9,90*</span>
              <p className="text-sm text-gray-500 mt-1">
                <span className="text-black font-medium">no 1º mês</span>,
                depois R$ 129,90 /mês
              </p>
              <p className="text-xs text-gray-400 pt-1">
                12 meses de fidelidade
              </p>
              <p className="text-xs text-gray-400 pt-1">Adesão R$ 49,90</p>
            </td>
            <td className="text-xl">
              <span className="font-bold">R$ 9,90*</span>
              <p className="text-sm text-gray-500 mt-1">
                <span className="text-black font-medium">no 1º mês</span>,
                depois R$ 149,90 /mês
              </p>
              <p className="text-xs text-gray-400 pt-1">
                12 meses de fidelidade
              </p>
              <p className="text-xs text-gray-400 pt-1">Adesão R$ 49,90</p>
            </td>
          </tr>
        </table>
      </div>
    </Container>
  );
}
