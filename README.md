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

![image](https://github.com/user-attachments/assets/be77a8e1-3b35-4ddb-975d-05b0e40ad69f)


- 2 - Tela de login.
  - 2.2 - Com autênticação de usuário com firebase, apenas usuários cadastrados conseguem logar e efetuar compras.

![image](https://github.com/user-attachments/assets/e71c6310-a260-4765-821d-0222fb7ddf31)

![image](https://github.com/user-attachments/assets/4a8aa17f-b091-4048-9f8d-8e2189d1fbe4)


- 3 - Tela de cadastro.

![image](https://github.com/user-attachments/assets/3a2614f9-eb64-4d54-92e2-bda4f1bbd750)

![image](https://github.com/user-attachments/assets/c5536c29-d377-4801-adc3-1eda2daeac05)


- 4 - Tela de detalhes da academia.

![image](https://github.com/user-attachments/assets/9dc4db99-a44c-48c5-9591-3d2a6d973fce)

![image](https://github.com/user-attachments/assets/ac37762a-e734-46b1-9048-f0763770d6a2)

![image](https://github.com/user-attachments/assets/e285a7bd-4886-4f7f-b014-3c0b2afd2e9a)

![image](https://github.com/user-attachments/assets/b33a9cc7-6a4a-4bdb-853c-4a5768a4a6b3)

![image](https://github.com/user-attachments/assets/4ea2c80d-1400-4ecf-8c93-fce98fc048fd)

![image](https://github.com/user-attachments/assets/7d4ed1b4-8244-4e6e-8890-c31069fd64ae)

![image](https://github.com/user-attachments/assets/9195e4b5-333c-4137-ad32-60a1ee9e049a)

- 5 - Tela de planos da academia.

![image](https://github.com/user-attachments/assets/84930525-2195-4f19-885f-0e338a88faa0)

![image](https://github.com/user-attachments/assets/bc36d576-481d-4d5e-a82a-2cd15109acd4)

![image](https://github.com/user-attachments/assets/cdf06b94-f045-4fbc-ad6d-2b268727322b)

![image](https://github.com/user-attachments/assets/0984e68f-48e8-436e-9dde-967dcf480050)

![image](https://github.com/user-attachments/assets/45261034-c39e-47d5-9452-1b2561671026)

- 6 - Tela de realizar a matrícula (compra do plano).

![image](https://github.com/user-attachments/assets/2db03fe4-7fcc-41c0-999f-b8a5805833ff)

![image](https://github.com/user-attachments/assets/7e551d60-ec8b-4f33-9209-a3729bb2b042)

![image](https://github.com/user-attachments/assets/86f6144b-acd6-4962-bcf1-3afaf81d93f2)

![image](https://github.com/user-attachments/assets/51ea1930-d3cb-4f6f-a93d-b9eb94286d2c)

![image](https://github.com/user-attachments/assets/ea69c6b6-6eca-47a7-838b-a657f21e0fdc)

![image](https://github.com/user-attachments/assets/331e2561-9b2f-4c69-a86e-af36a5be8f89)

- 7 - Tela depois de realizada a compra, para sair ou explorar mais academias.

![image](https://github.com/user-attachments/assets/efa3fa94-54e7-41d1-a16e-ecbd19472dd6)

![image](https://github.com/user-attachments/assets/0390a9e5-c8ac-4e44-8ba5-7b2f58568858)

![image](https://github.com/user-attachments/assets/72ae673a-e11a-4767-8c14-b60de64a97f9)

![image](https://github.com/user-attachments/assets/05073418-7c32-4060-8aa1-34ed87260696)

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
