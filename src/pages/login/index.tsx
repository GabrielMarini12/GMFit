import logoImg from "../../assets/logo-academia.png";
import { Link } from "react-router-dom";
import { Container } from "../../components/container";

import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .email("Insira um email válido")
    .nonempty("O campo email é obrigatório"),
  password: z.string().nonempty("O campo senha é obrigatório"),
});

type FormData = z.infer<typeof schema>;

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <Container>
      <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
        <Link to="/" className="mb-6 max-w-sm w-full">
          <img
            src={logoImg}
            alt="Logo do site"
            className="bg-gray-950 rounded-full w-full shadow-lg shadow-slate-300"
          />
        </Link>

        <form
          className="bg-white max-w-xl w-full rounded-lg p-4 shadow-lg shadow-slate-300"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-3">
            <Input
              type="email"
              placeholder="Digite seu email..."
              name="email"
              error={errors.email?.message}
              register={register}
            />
          </div>

          <div className="mb-3">
            <Input
              type="password"
              placeholder="Digite sua senha..."
              name="password"
              error={errors.password?.message}
              register={register}
            />
          </div>

          <button
            className="w-full bg-yellow-400 hover:bg-yellow-500 rounded-md text-black h-11 font-medium"
            type="submit"
          >
            Acessar
          </button>
        </form>

        <Link to="/register">
          Ainda não possui uma conta?{" "}
          <span className="font-medium">Cadastre-se!</span>
        </Link>
      </div>
    </Container>
  );
}
