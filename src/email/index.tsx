import React from "react";
import { Html } from "@react-email/html";
import { Body } from "@react-email/body";
import { Heading } from "@react-email/heading";
import { Head } from "@react-email/head";
import { Img } from "@react-email/img";

const logoImage = "https://i.ibb.co/C5VcsbH/logomarca-ativa-hospitalar.png"


interface ProductProps {
  id_produto: number;
  descricao_produto: string;
  fabricante: string;
  embalagem: string;
  valor: string;
  quantity: number;
}

interface EmailProps {
  list?: ProductProps[];
  email: string;
  contact?: {
    name: string;
    contact: string;
    cnpj: string;
    adress: string;
    email: string;
  };
}

const bodyStyle: React.CSSProperties = {
  background: "#fff",
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  fontFamily: "sans-serif",
};

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
  padding: "1rem",
  background: "#00a3a3",
};

const asideStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: ".5rem",
  fontWeight: "bold",
};

const boxInfoClient: React.CSSProperties = {
  margin: "1rem auto",
  width: "95%",
  padding: ".5rem",
  border: "1px solid silver",
  display: "flex",
  flexDirection: "column",
};

const tableStyle: React.CSSProperties = {
  width: "96.8%",
  margin: "2rem auto",
  boxSizing: "border-box",
};

const headingStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#363636",
};

export const Email: React.FC<Readonly<EmailProps>> = ({
  list,
  contact,
  email,
}: EmailProps) => {
  return (
    <Html lang="pt-BR">
      <Head />
      <Body style={bodyStyle}>
        <header style={headerStyle}>
          <Img src={logoImage} width="160" height="60" />
          <aside style={asideStyle}>
            <span>Ativa Hospitalar</span>
            <span>Av. Vereador Raymundo Hargreaves, 98</span>
            <span>Fontes Ville</span>
            <span>Juiz de Fora - MG</span>
          </aside>
        </header>
        <Heading style={headingStyle}>Orçamento Estimativo</Heading>
        <div style={boxInfoClient}>
          <span>Empresa: {contact?.name}</span>
          <span>Endereço: {contact?.adress}</span>
          <span>Contato: {contact?.contact}</span>
          <span>CNPJ: {contact?.cnpj}</span>
          <span>Email: {email}</span>
        </div>
        <div>
          <table style={tableStyle}>
            <thead style={{ backgroundColor: "#cacaca" }}>
              <tr>
                <th>Seq</th>
                <th>Nome</th>
                <th>Apresentação</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "#e9e9e9" }}>
              {list?.map((item, i) => (
                <tr key={item.id_produto}>
                  <td style={{ textAlign: "end" }}>{i + 1}</td>
                  <td style={{ textAlign: "end" }}>{item.descricao_produto}</td>
                  <td style={{ textAlign: "end" }}>{item.embalagem}</td>
                  <td style={{ textAlign: "end" }}>{item.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Body>
    </Html>
  );
};

export default Email;
