export const contactData = {
  name: "Pedro Aguiar",
  role: "Analista de Dados | Ciência de Dados & Inteligência Artificial",
  email: "pedrodaniel8416@gmail.com",
  whatsappUrl: "https://wa.me/5548988260957",
  whatsappNumber: "",
  whatsappMessage:
    "Olá Pedro, vi seu portfólio e gostaria de conversar sobre uma oportunidade em Dados.",
  linkedin: "https://www.linkedin.com/in/pedro-aguiar-b23a3020b/",
  github: "https://github.com/PedrodAguiar",
};

export const emailHref = `mailto:${contactData.email}`;

export const whatsappHref = contactData.whatsappUrl
  ? contactData.whatsappUrl
  : contactData.whatsappNumber
  ? `https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(
      contactData.whatsappMessage
    )}`
  : null;
