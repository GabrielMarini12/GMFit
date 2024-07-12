import { Container } from "../../components/container";

export function Checkout() {
  return (
    <Container>
      <section className="flex w-full justify-between">
        <div className="max-w-[60%] flex flex-col">
          <h1 className="font-bold text-4xl uppercase mb-12">
            Escolha o plano mais vantajoso para você:
          </h1>
          <div className="w-full flex flex-col bg-black px-3 py-16 text-white rounded-lg">
            <div className="grid grid-cols-4 text-center mb-12">
              <input type="radio" />
              <p>Adesão Zero</p>
              <p>Fidelidade 12 meses</p>
              <p>De 139,90 por: R$ 9,90*</p>
            </div>
            <div className="grid grid-cols-2 text-center ">
              <p>Treine em mais de 1.400 academias Smart Fit!</p>
              <p>no 1º mês, depois R$ 139,90/mês</p>
            </div>
          </div>
        </div>

        <div className="max-w-[40%] bg-slate-200 py-4 px-16 flex flex-col">
          <p className="font-medium text-2xl mb-2 text-left">
            Detalhes da compra
          </p>
          <p>
            Academia escolhida: <span className="font-medium">GM Fit 1</span>
          </p>
        </div>
      </section>
    </Container>
  );
}
