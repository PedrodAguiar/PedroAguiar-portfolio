export const contactData = {
  name: "Pedro Aguiar",
  role: "Front-end Developer",
  email: "pedrodaniel8416@gmail.com",
  whatsappUrl: "https://wa.me/5548988260957",
  whatsappNumber: "",
  whatsappMessage:
    "Ola Pedro, vi seu portfolio e gostaria de conversar sobre uma oportunidade.",
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
