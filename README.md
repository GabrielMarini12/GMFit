# GMFit

Aplicação web de compra de planos de academias da mesma rede 🏋️

# Tecnologia

- React JS
- TypeScript

# Começando
- Dependência
  - tailwindcss
  - react router dom
  - react icons
  - react hook form
    - npm install @hookform/resolvers
  - zod
  - npm install -g json-server
  - axios
  - firebase
  - swiper
  - toast

- Rodar Api
  - json-server --watch db.json
 
# Como usar

- 1 - Ao acessar o projeto, essa é a tela inicial (tela de busca de academias).
  - 1.1 - Nessa tela ficam todas academias cadastradas pela franquia.

![image](https://github.com/user-attachments/assets/86b7890d-86e2-4762-870e-e6a8a27fa33a)

![image](https://github.com/user-attachments/assets/720fc110-3d6d-43a8-b8bb-ddc8181f3f8c)

- 2 - Tela de login.
  - 2.2 - Com autênticação de usuário com firebase, apenas usuários cadastrados conseguem logar e efetuar compras.

![image](https://github.com/user-attachments/assets/e71c6310-a260-4765-821d-0222fb7ddf31)

- 3 - Tela de cadastro.

![image](https://github.com/user-attachments/assets/3a2614f9-eb64-4d54-92e2-bda4f1bbd750)

- 4 - Tela de detalhes da academia.

![image](https://github.com/user-attachments/assets/9dc4db99-a44c-48c5-9591-3d2a6d973fce)

![image](https://github.com/user-attachments/assets/ac37762a-e734-46b1-9048-f0763770d6a2)

![image](https://github.com/user-attachments/assets/e285a7bd-4886-4f7f-b014-3c0b2afd2e9a)

- 5 - Tela de planos da academia.

![image](https://github.com/user-attachments/assets/84930525-2195-4f19-885f-0e338a88faa0)

![image](https://github.com/user-attachments/assets/bc36d576-481d-4d5e-a82a-2cd15109acd4)

- 6 - Tela de realizar a matrícula (compra do plano).

![image](https://github.com/user-attachments/assets/2db03fe4-7fcc-41c0-999f-b8a5805833ff)

![image](https://github.com/user-attachments/assets/7e551d60-ec8b-4f33-9209-a3729bb2b042)

- 7 - Tela depois de realizada a compra, para sair ou explorar mais academias.

![image](https://github.com/user-attachments/assets/efa3fa94-54e7-41d1-a16e-ecbd19472dd6)

![image](https://github.com/user-attachments/assets/0390a9e5-c8ac-4e44-8ba5-7b2f58568858)

# Características

As principais características do aplicativo são:
- Autenticação de usuários.
- Proteção de páginas, ou seja, só o usuário logados podem visualizar páginas de detalhes, planos e finalizar um compra.
- Slider de imagens.
- Informações puxadas de forma dinâmica de acordo com as escolhas do usuário.
- Integração com a Api do Whatsapp.
- Integração com uma Api, onde constam as academias cadastradas e todas suas informações.
- Resposivo.


# Deploy
- https://gm-fit.vercel.app/
