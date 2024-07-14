import { Container } from "../../components/container";

export function Checkout() {
  return (
    <Container>
      <section className="flex w-full justify-between">
        <div className="max-w-[60%] flex flex-col">
          <h1 className="font-bold text-4xl uppercase mb-12">
            Escolha o plano mais vantajoso para você:
          </h1>
          <div className="w-full flex flex-col bg-black px-3 py-12 text-white rounded-lg mb-8 border border-black shadow-md shadow-slate-300">
            <div className="grid grid-cols-4 items-center text-center mb-8">
              <div className="flex justify-center items-center">
                <button className="border border-white h-3 p-2 mr-4 rounded-sm"></button>
                <p className="uppercase text-lg font-bold ">Plano black</p>
              </div>
              <p>
                Adesão <br /> <span className="font-bold">Zero</span>
              </p>
              <p>
                Fidelidade <br /> <span className="font-bold">12 meses</span>
              </p>
              <div className="flex flex-col items-start pl-10">
                <p className="uppercase font-bold text-base line-through text-red-600">
                  <span className=" text-white">De:</span>{" "}
                  <span className="text-white">139,90</span>
                </p>
                <p className="uppercase font-bold text-sm">por:</p>
                <p className="uppercase font-bold text-3xl mb-7">
                  R$ <span className="text-5xl">9</span>,90*
                </p>
                <p className="text-sm text-left ">
                  <span className="font-medium text-sm">no 1° mês</span>, depois
                  R$ 139,90/mês
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 text-left pl-12 -mt-14">
              <p className="font-bold text-sm">
                Treine em mais de 1.400 academias Smart Fit!
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col bg-slate-100 px-3 py-12 text-black rounded-lg mb-8 border border-gray-300 shadow-md shadow-slate-300">
            <div className="grid grid-cols-4 items-center text-center mb-8">
              <div className="flex justify-center items-center">
                <button className="border border-black h-3 p-2 mr-4 rounded-sm"></button>
                <p className="uppercase text-lg font-bold ">Plano fitnes</p>
              </div>
              <p>
                Adesão <br /> <span className="font-bold">Zero</span>
              </p>
              <p>
                Fidelidade <br /> <span className="font-bold">12 meses</span>
              </p>
              <div className="flex flex-col items-start pl-10">
                <p className="uppercase font-bold text-base line-through text-red-600">
                  <span className=" text-black">De:</span>{" "}
                  <span className="text-black">129,90</span>
                </p>
                <p className="uppercase font-bold text-sm">por:</p>
                <p className="uppercase font-bold text-3xl mb-7">
                  R$ <span className="text-5xl">9</span>,90*
                </p>
                <p className="text-sm text-left ">
                  <span className="font-medium text-sm">no 1° mês</span>, depois
                  R$ 129,90/mês
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 text-left pl-12 -mt-14">
              <p className="font-bold text-sm">
                Pague menos para treinar o quanto quiser na sua unidade.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col bg-slate-100 px-3 py-12 text-black rounded-lg mb-8 border border-gray-300 shadow-md shadow-slate-300">
            <div className="grid grid-cols-4 items-center text-center mb-8">
              <div className="flex justify-center items-center">
                <button className="border border-black h-3 p-2 mr-4 rounded-sm"></button>
                <p className="uppercase text-lg font-bold ">Plano smart</p>
              </div>
              <p>
                Adesão <br /> <span className="font-bold">Zero</span>
              </p>
              <p>
                Fidelidade <br /> <span className="font-bold">12 meses</span>
              </p>
              <div className="flex flex-col items-start pl-10">
                <p className="uppercase font-bold text-base line-through text-red-600">
                  <span className=" text-black">De:</span>{" "}
                  <span className="text-black">149,90</span>
                </p>
                <p className="uppercase font-bold text-sm">por:</p>
                <p className="uppercase font-bold text-3xl mb-7">
                  R$ <span className="text-5xl">9</span>,90*
                </p>
                <p className="text-sm text-left ">
                  <span className="font-medium text-sm">no 1° mês</span>, depois
                  R$ 149,90/mês
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 text-left pl-12 -mt-14">
              <p className="font-bold text-sm">
                Treine quando quiser na sua unidade.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[40%] ml-20 bg-slate-200 py-8 px-6 flex flex-col rounded-lg  shadow-md shadow-slate-300 mb-8">
          <p className="font-bold text-2xl mb-2 text-left">
            Detalhes da compra
          </p>
          <p className="text-sm">
            Academia escolhida:{" "}
            <span className="font-medium text-base">GM Fit 1</span>
          </p>
          <div className="w-full border border-gray-300 mt-6 mb-12"></div>

          <div className="w-[90%] flex flex-col mx-auto gap-4 border border-gray-300 bg-white py-6 px-6 rounded-lg">
            <div className="flex justify-between">
              <p className="uppercase text-xs font-bold">1ª cobrança</p>
              <p className="font-bold text-sm">R$ 9,90</p>
            </div>

            <div className="w-full border border-gray-200"></div>

            <div className="flex justify-between">
              <p className="uppercase text-xs font-bold">2ª cobrança</p>
              <p className="font-bold text-sm">R$ 9,90</p>
            </div>

            <div className="w-full border border-gray-200"></div>

            <div className="flex justify-between">
              <p className="uppercase text-xs font-bold">3ª cobrança</p>
              <p className="font-bold text-sm">R$ 9,90</p>
            </div>

            <div className="w-full border border-gray-200"></div>

            <div className="flex justify-between">
              <p className="uppercase text-xs font-bold">4ª cobrança</p>
              <p className="font-bold text-sm">R$ 9,90</p>
            </div>

            <div className="w-full border border-gray-200"></div>

            <div className="flex justify-between">
              <p className="uppercase text-xs font-bold">5ª cobrança</p>
              <p className="font-bold text-sm">R$ 9,90</p>
            </div>

            <div className="w-full border border-gray-200"></div>

            <div className="flex justify-between">
              <p className="uppercase text-xs font-bold">6ª cobrança</p>
              <p className="font-bold text-sm">R$ 9,90</p>
            </div>

            <div className="w-full border border-gray-200"></div>

            <div className="flex justify-between">
              <p className="uppercase text-xs font-bold">7ª cobrança</p>
              <p className="font-bold text-sm">R$ 9,90</p>
            </div>

            <div className="w-full border border-gray-200"></div>

            <div className="flex justify-between">
              <p className="uppercase text-xs font-bold">8ª cobrança</p>
              <p className="font-bold text-sm">R$ 9,90</p>
            </div>

            <div className="w-full border border-gray-200"></div>

            <div className="flex justify-between">
              <p className="uppercase text-xs font-bold">9ª cobrança</p>
              <p className="font-bold text-sm">R$ 9,90</p>
            </div>

            <div className="w-full border border-gray-200"></div>

            <div className="flex justify-between">
              <p className="uppercase text-xs font-bold">10ª cobrança</p>
              <p className="font-bold text-sm">R$ 9,90</p>
            </div>

            <div className="w-full border border-gray-200"></div>

            <div className="flex justify-between">
              <p className="uppercase text-xs font-bold">11ª cobrança</p>
              <p className="font-bold text-sm">R$ 9,90</p>
            </div>

            <div className="w-full border border-gray-200"></div>

            <div className="flex justify-between">
              <p className="uppercase text-xs font-bold">12ª cobrança</p>
              <p className="font-bold text-sm">R$ 9,90</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
