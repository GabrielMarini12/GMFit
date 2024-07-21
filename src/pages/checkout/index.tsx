import { useState, useEffect, FormEvent } from "react";
import { Container } from "../../components/container";
import { api } from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";
import { AcademiaProps } from "../home";

import toast from "react-hot-toast";

export function Checkout() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [academia, setAcademia] = useState<AcademiaProps>();
  const [nome, setNome] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [cpf, setCpf] = useState("");
  const [cvv, setCvv] = useState("");
  const [validadeCartao, setValidadeCartao] = useState("");
  const [parcelas, setParcelas] = useState(139.99);

  useEffect(() => {
    async function getAcademia() {
      const response = await api.get(`/academias/${id}`);
      setAcademia(response.data);
    }

    getAcademia();
  }, [id]);

  function planoBlack() {
    setParcelas(139.99);
  }

  function planoFit() {
    setParcelas(129.99);
  }

  function planoSmart() {
    setParcelas(149.99);
  }

  function pagamento(e: FormEvent) {
    e.preventDefault();

    if (nome === "") {
      toast.error("O nome é obrigatório!");
    }

    if (numeroCartao === "") {
      toast.error("O número do cartão é obrigatório!");
    } else if (numeroCartao.length < 16 || numeroCartao.length > 16) {
      toast.error("O número do cartão deve conter 16 caracteres!");
    }

    if (cpf === "") {
      toast.error("O cpf é obrigatório!");
    } else if (cpf.length < 11 || cpf.length > 11) {
      toast.error("O cpf deve conter 11 caracteres!");
    }

    if (cvv === "") {
      toast.error("O cvv é obrigatório!");
    } else if (cvv.length < 3 || cvv.length > 3) {
      toast.error("O cvv deve conter 3 caracteres!");
    }

    if (validadeCartao === "") {
      toast.error("A validade é obrigatório!");
    }

    if (
      nome != "" &&
      numeroCartao != "" &&
      cpf != "" &&
      cvv != "" &&
      validadeCartao != ""
    ) {
      toast.success("Compra realizada com sucesso!");
      navigate("/");
    }
  }

  return (
    <Container>
      {academia && (
        <section className="flex w-full justify-between max-lg:flex-col">
          <div className="max-w-[60%] flex flex-col max-lg:max-w-full">
            <h1 className="font-bold text-4xl uppercase mb-12">
              Escolha o plano mais vantajoso para você:
            </h1>
            <div className="w-full flex flex-col bg-black px-3 py-12 text-white rounded-lg mb-10 border border-black shadow-md shadow-slate-300">
              <div className="grid grid-cols-4 max-sm:grid-cols-2 items-center text-center mb-8 relative">
                <div className="absolute bg-yellow-500 -top-9 -right-4 pl-8 pr-4 rounded-r-sm ">
                  <p className="uppercase text-black font-bold">
                    O mais vantajoso
                  </p>
                </div>
                <div className="bg-black absolute w-5 h-5 top-[-34px] right-44 rotate-45"></div>
                <div className="flex justify-center items-center ">
                  <input
                    type="radio"
                    className="peer hidden"
                    id="checked-black"
                    name="filtro"
                    onClick={() => planoBlack()}
                  />
                  <label
                    htmlFor="checked-black"
                    className=" peer-checked:bg-yellow-500 border border-white h-3 p-2 mr-4 rounded-sm cursor-pointer"
                  ></label>
                  <p className="uppercase text-lg font-bold ">Plano black</p>
                </div>
                <p className="max-sm:hidden">
                  Adesão <br /> <span className="font-bold">Zero</span>
                </p>
                <p className="max-sm:hidden">
                  Fidelidade <br /> <span className="font-bold">12 meses</span>
                </p>
                <div className="flex flex-col items-start pl-10">
                  <p className="uppercase font-bold text-base line-through text-red-600">
                    <span className=" text-white">De:</span>{" "}
                    <span className="text-white">
                      {academia.black.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </p>
                  <p className="uppercase font-bold text-sm">por:</p>
                  <p className="uppercase font-bold text-3xl mb-7">
                    R$ <span className="text-5xl">9</span>,99*
                  </p>
                  <p className="text-sm text-left ">
                    <span className="font-medium text-sm">no 1° mês</span>,
                    depois{" "}
                    {academia.black.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                    /mês
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 text-left pl-12 -mt-14">
                <p className="font-bold text-sm max-sm:hidden">
                  Treine em mais de 1.400 academias Smart Fit!
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col bg-slate-100 px-3 py-12 text-black rounded-lg mb-10 border border-gray-300 shadow-md shadow-slate-300">
              <div className="grid grid-cols-4 max-sm:grid-cols-2 items-center text-center mb-8">
                <div className="flex justify-center items-center">
                  <input
                    type="radio"
                    className="peer hidden"
                    id="checked-fit"
                    name="filtro"
                    onClick={() => planoFit()}
                  />
                  <label
                    htmlFor="checked-fit"
                    className=" peer-checked:bg-yellow-500 border border-black h-3 p-2 mr-4 rounded-sm cursor-pointer"
                  ></label>
                  <p className="uppercase text-lg font-bold ">Plano fitnes</p>
                </div>
                <p className="max-sm:hidden">
                  Adesão <br /> <span className="font-bold">Zero</span>
                </p>
                <p className="max-sm:hidden">
                  Fidelidade <br /> <span className="font-bold">12 meses</span>
                </p>
                <div className="flex flex-col items-start pl-10">
                  <p className="uppercase font-bold text-base line-through text-red-600">
                    <span className=" text-black">De:</span>{" "}
                    <span className="text-black">
                      {academia.fit.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </p>
                  <p className="uppercase font-bold text-sm">por:</p>
                  <p className="uppercase font-bold text-3xl mb-7">
                    R$ <span className="text-5xl">9</span>,99*
                  </p>
                  <p className="text-sm text-left ">
                    <span className="font-medium text-sm">no 1° mês</span>,
                    depois{" "}
                    {academia.fit.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                    /mês
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 text-left pl-12 -mt-14">
                <p className="font-bold text-sm max-sm:hidden">
                  Pague menos para treinar o quanto quiser na sua unidade.
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col bg-slate-100 px-3 py-12 text-black rounded-lg mb-10 border border-gray-300 shadow-md shadow-slate-300">
              <div className="grid grid-cols-4 max-sm:grid-cols-2 items-center text-center mb-8">
                <div className="flex justify-center items-center">
                  <input
                    type="radio"
                    className="peer hidden"
                    id="checked-smart"
                    name="filtro"
                    onClick={() => planoSmart()}
                  />
                  <label
                    htmlFor="checked-smart"
                    className=" peer-checked:bg-yellow-500 border border-black h-3 p-2 mr-4 rounded-sm cursor-pointer"
                  ></label>
                  <p className="uppercase text-lg font-bold ">Plano smart</p>
                </div>
                <p className="max-sm:hidden">
                  Adesão <br /> <span className="font-bold">Zero</span>
                </p>
                <p className="max-sm:hidden">
                  Fidelidade <br /> <span className="font-bold">12 meses</span>
                </p>
                <div className="flex flex-col items-start pl-10">
                  <p className="uppercase font-bold text-base line-through text-red-600">
                    <span className=" text-black">De:</span>{" "}
                    <span className="text-black">
                      {academia.smart.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </p>
                  <p className="uppercase font-bold text-sm">por:</p>
                  <p className="uppercase font-bold text-3xl mb-7">
                    R$ <span className="text-5xl">9</span>,99*
                  </p>
                  <p className="text-sm text-left ">
                    <span className="font-medium text-sm">no 1° mês</span>,
                    depois{" "}
                    {academia.smart.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                    /mês
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 text-left pl-12 -mt-14">
                <p className="font-bold text-sm max-sm:hidden">
                  Treine quando quiser na sua unidade.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[40%] max-lg:w-full h-full ml-20 max-lg:ml-0 bg-slate-200 py-8 px-6 flex flex-col rounded-lg  shadow-md shadow-slate-300 mb-8">
            <p className="font-bold text-2xl mb-2 text-left">
              Detalhes da compra
            </p>
            <p className="text-sm">
              Academia escolhida:{" "}
              <span className="font-medium text-base">{academia.name}</span>
            </p>
            <div className="w-full border border-gray-300 mt-6 mb-8"></div>

            <div className="w-[90%] flex flex-col mx-auto gap-4 border border-gray-300 bg-white py-6 px-6 rounded-lg h-72 overflow-y-scroll">
              <div className="flex justify-between">
                <p className="uppercase text-xs font-bold">1ª cobrança</p>
                <p className="font-bold text-sm">R$ 9,99</p>
              </div>

              <div className="w-full border border-gray-200"></div>

              <div className="flex justify-between">
                <p className="uppercase text-xs font-bold">2ª cobrança</p>
                <p className="font-bold text-sm">
                  {parcelas.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>

              <div className="w-full border border-gray-200"></div>

              <div className="flex justify-between">
                <p className="uppercase text-xs font-bold">3ª cobrança</p>
                <p className="font-bold text-sm">
                  {parcelas.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>

              <div className="w-full border border-gray-200"></div>

              <div className="flex justify-between">
                <p className="uppercase text-xs font-bold">4ª cobrança</p>
                <p className="font-bold text-sm">
                  {parcelas.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>

              <div className="w-full border border-gray-200"></div>

              <div className="flex justify-between">
                <p className="uppercase text-xs font-bold">5ª cobrança</p>
                <p className="font-bold text-sm">
                  {parcelas.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>

              <div className="w-full border border-gray-200"></div>

              <div className="flex justify-between">
                <p className="uppercase text-xs font-bold">6ª cobrança</p>
                <p className="font-bold text-sm">
                  {parcelas.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>

              <div className="w-full border border-gray-200"></div>

              <div className="flex justify-between">
                <p className="uppercase text-xs font-bold">7ª cobrança</p>
                <p className="font-bold text-sm">
                  {parcelas.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>

              <div className="w-full border border-gray-200"></div>

              <div className="flex justify-between">
                <p className="uppercase text-xs font-bold">8ª cobrança</p>
                <p className="font-bold text-sm">
                  {parcelas.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>

              <div className="w-full border border-gray-200"></div>

              <div className="flex justify-between">
                <p className="uppercase text-xs font-bold">9ª cobrança</p>
                <p className="font-bold text-sm">
                  {parcelas.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>

              <div className="w-full border border-gray-200"></div>

              <div className="flex justify-between">
                <p className="uppercase text-xs font-bold">10ª cobrança</p>
                <p className="font-bold text-sm">
                  {parcelas.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>

              <div className="w-full border border-gray-200"></div>

              <div className="flex justify-between">
                <p className="uppercase text-xs font-bold">11ª cobrança</p>
                <p className="font-bold text-sm">
                  {parcelas.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>

              <div className="w-full border border-gray-200"></div>

              <div className="flex justify-between">
                <p className="uppercase text-xs font-bold">12ª cobrança</p>
                <p className="font-bold text-sm">
                  {parcelas.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </div>

            <div className="w-full border border-gray-300 mt-8 mb-8"></div>

            <p className="font-bold text-2xl mb-6 text-left">Pagamento</p>

            <form
              onSubmit={pagamento}
              className="flex flex-col w-[90%] mx-auto gap-4"
            >
              <select className="p-2 rounded-lg">
                <option>Mastercard</option>
                <option>Visa</option>
                <option>Elo</option>
              </select>
              <input
                type="text"
                placeholder="Nome no cartão..."
                className="p-2 rounded-lg"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />

              <input
                type="number"
                placeholder="Nº no cartão..."
                className="p-2 rounded-lg"
                value={numeroCartao}
                onChange={(e) => setNumeroCartao(e.target.value)}
              />

              <input
                type="number"
                placeholder="CPF do titular..."
                className="p-2 rounded-lg"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />

              <div className="flex gap-2">
                <div className="flex flex-col">
                  <input
                    type="number"
                    placeholder="CVV"
                    className="p-2 rounded-lg w-full"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="12/2024"
                    className="p-2 rounded-lg w-full"
                    value={validadeCartao}
                    onChange={(e) => setValidadeCartao(e.target.value)}
                  />
                </div>
              </div>
              <select className="p-2 rounded-lg">
                <option disabled>Parcelamento</option>
                <option>
                  1x -{" "}
                  {(parcelas * 11 + academia.promotion).toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </option>
                <option>
                  2x -{" "}
                  {((parcelas * 11 + academia.promotion) / 2).toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </option>
                <option>
                  3x -{" "}
                  {((parcelas * 11 + academia.promotion) / 3).toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </option>
                <option>
                  4x -{" "}
                  {((parcelas * 11 + academia.promotion) / 4).toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </option>
                <option>
                  5x -{" "}
                  {((parcelas * 11 + academia.promotion) / 5).toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </option>
                <option>
                  6x -{" "}
                  {((parcelas * 11 + academia.promotion) / 6).toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </option>
                <option>
                  7x -{" "}
                  {((parcelas * 11 + academia.promotion) / 7).toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </option>
                <option>
                  8x -{" "}
                  {((parcelas * 11 + academia.promotion) / 8).toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </option>
                <option>
                  9x -{" "}
                  {((parcelas * 11 + academia.promotion) / 9).toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </option>
                <option>
                  10x -{" "}
                  {((parcelas * 11 + academia.promotion) / 10).toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </option>
                <option>
                  11x -{" "}
                  {((parcelas * 11 + academia.promotion) / 11).toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </option>
                <option>
                  12x -{" "}
                  {((parcelas * 11 + academia.promotion) / 12).toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </option>
              </select>
              <button
                className="bg-black p-2 rounded-lg font-bold text-white mt-2 hover:bg-yellow-500 hover:text-black transition-all"
                type="submit"
              >
                Finalizar compra
              </button>
            </form>
          </div>
        </section>
      )}
    </Container>
  );
}
