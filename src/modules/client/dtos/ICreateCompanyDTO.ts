interface ICreateCompanyDTO {
  name: string;
  city?: string;
  uf?: string;
  cep: string;
  district: string;
  phone: string;
  whatsapp: string;
  linkWhatsapp: string;
  linkMap: string;
  address: string;
}

export { ICreateCompanyDTO };
