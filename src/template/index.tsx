import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { resolve } from "path";
import { styles } from "./styles";

const logo = resolve("src", "logomarca-ativa-hospitalar-black.png");


interface ProductProps {
  id_produto: number;
  descricao_produto: string;
  fabricante: string;
  embalagem: string;
  valor: number;
  quantity: number;
}

interface PDFDocumentProps {
  list: ProductProps[];
  contact: {
    name: string;
    contact: string;
    cnpj: string;
    adress: string;
    email: string;
  };
}

export const PDFDocument: React.FC<Readonly<PDFDocumentProps>> = ({
  contact,
  list,
}: PDFDocumentProps) => {
  const total = list.reduce((a, b) => a + b.valor, 0);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.title}>Orçamento Estimativo</Text>
        </View>
        <View style={styles.section}>
          <div style={styles.topHeader}>
            <Text style={styles.bold}>ATIVA MEDICO CIRÚRGICA LTDA</Text>
            <Text>CNPJ : 09.182.725/0001-12</Text>
            <Text>AV VEREADOR RAYMUNDO HARGREAVES, 98 - MILHO BRANCO </Text>
            <Text>JUIZ DE FORA - MG - 36083-770</Text>
            <Text>Tel: (32)2101-1556</Text>
          </div>
          <img
            style={{ width: "140px", height: "54px" }}
            src={logo}
            alt="logomarca da ativa"
          />
        </View>
        <View>
          <div style={styles.subHeader}>
            <Text>Número do pedido: </Text>
            <Text>Data: {}</Text>
          </div>
          <div style={styles.flex_between}>
            <Text style={styles.subHeader_info}>Cliente: {contact.name}</Text>
            <Text style={styles.subHeader_info}>
              Endereço: {contact.adress}
            </Text>
            <Text style={styles.subHeader_info}>CNPJ: {contact.cnpj}</Text>
          </div>
          <Text style={styles.subHeader}>Contato: {contact.contact}</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.table}>
            <View style={[styles.row, styles.bold, styles.header]}>
              <Text style={styles.row0}>Sequencia</Text>
              <Text style={styles.row1}>Nome</Text>
              <Text style={styles.row2}>Apresentação</Text>
              <Text style={styles.row3}>Laboratório</Text>
              <Text style={styles.row4}>Quantidade</Text>
              <Text style={styles.row5}>Valor</Text>
            </View>
            {list.map((item, i) => {
              const numItem = i + 1;
              return (
                <View key={i} style={styles.row} wrap={false}>
                  <Text style={styles.row0}>{numItem}</Text>
                  <Text style={styles.row1}>{item.descricao_produto}</Text>
                  <Text style={styles.row2}>
                    {" "}
                    {item.embalagem.substring(0, 30) + "..."}
                  </Text>
                  <Text style={styles.row3}>
                    {item.fabricante.substring(0, 20) + "..."}
                  </Text>
                  <Text style={styles.row4}>{item.quantity}</Text>
                  <Text style={styles.row5}>
                    {Number(item.valor).toFixed(2)}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
        <View>
          <Text style={styles.total}>Total: {total}</Text>
        </View>
        <View fixed style={styles.footer}>
          <Text fixed>
            _______________________________________________________________________________________________________________________________
          </Text>
          <Text fixed>Orçamento Estimativo válido por 10 dias</Text>
          <Text fixed>
            ATIVA MÉDICO CIRÚRGICA - AV VEREADOR RAYMUNDO HARGREAVES, 98 - MILHO
            BRANCO JUIZ DE FORA - MG - 36083-770
          </Text>
        </View>
      </Page>
    </Document>
  );
};
