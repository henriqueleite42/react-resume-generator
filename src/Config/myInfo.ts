export const fileConfig = {
  filename: "CV",
  lang: "PT",
  info: {
    title: "Currículo -  Henrique Leite",
    author: "Henrique Leite",
    keywords: "Currículo",
  },
};

export const MyInfo = {
  name: "henrique leite",
  headline: "FullStack Developer Pleno",
  age: 20,
  graduation: "Autodidata",
  salaryExpectation: "R$ 3.500,00 - R$ 4.000,00",
  contact: [
    {
      title: "e-mail",
      info: "henriqueleite616@gmail.com",
    },
    {
      title: "linkedin",
      info: "henriqueleite42",
      link: "https://www.linkedin.com/in/henriqueleite42/",
    },
    {
      title: "whatsapp",
      info: "+55 19 99990 4610",
    },
  ],
  portfolio: [
    {
      info: "GitHub",
      link: "https://github.com/henriqueleite42",
    },
  ],
  competences: [
    { name: "React" },
    { name: "NodeJs" },
    { name: "TypeScript" },
    { name: "Redux" },
    { name: "User Experience" },
  ],
  languages: [
    {
      info: "Inglês - Intermediário",
    },
  ],
  about: [
    "Primeiro e mais importante de tudo, minha maior paixão é analisar e aprender padrões. Desde criança, meus jogos favoritos sempre foram aqueles que precisam de muita atenção, para que você consiga descobrir o padrão da fase e depois de tentar muito, finalmente conseguir vencer e passar para a proxima.",
    "Quando descobri a programação, fiquei imediatamente apaixonado pelo como é possível transformar apenas algumas linhas de codigo, em absolutamente qualquer coisa. Com uma nova paixão descoberta, comecei a fazer projetos desafiadores por conta própria, até que graças a uma visão mais empreendedora, comecei a fazer freelancers.",
    'Aos 18 consegui meu primeiro "emprego de verdade" como programador, no cargo de FullStack Developer. Nesse emprego tive a sorte de continuar com minha autonomia, e ser responsável por todas as etapas do desenvolvimento, desdo planejamento e apresentação até a execução e testes.',
    "Mesmo tendo seguido a área de desenvolvimento, minha maior paixão continua sendo a análise de dados, por isso, venho estudando sobre python e machine learning, com o intuito de poder trabalhar com o que mais amo e me tornar um Data Scientist.",
    "Atualmente, estou em busca da minha graduação em Data Science, para que assim possa retomar meu antigo sonho de trabalhar com análise.",
  ].join("\n\n"),
  employment: [
    {
      company: "GoBrain",
      role: "FullStack Developer",
      start: new Date("2020-3-1"),
      actualJob: true,
      list: [],
    },
    {
      company: "NFSERVICE",
      role: "FullStack Developer",
      start: new Date("2019-6-1"),
      end: new Date("2020-3-1"),
      list: [],
    },
    {
      company: "Freelancer",
      role: "FullStack Developer",
      start: new Date("2017-4-1"),
      actualJob: true,
      list: [],
    },
  ],
};
