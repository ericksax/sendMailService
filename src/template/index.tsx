import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
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
  numberOrc: string;
  contact: {
    solicitante_nome: string;
    orgao_nome: string;
    telefone: string;
    cnpj: string;
    email: string;
  };
}

export const PDFDocument: React.FC<Readonly<PDFDocumentProps>> = ({
  contact,
  list,
  numberOrc,
}: PDFDocumentProps) => {
  const total = list.reduce((a, b) => a + b.valor, 0);
  const formattedTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);
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
            <Text>AV VEREADOR RAYMUNDO HARGREAVES, 98 - FONTESVILLE </Text>
            <Text>JUIZ DE FORA - MG - 36083-770</Text>
            <Text>Tel: (32)2101-1556</Text>
          </div>
        </View>
        <View>
          <div style={styles.subHeader}>
            <Text>Número do pedido: {numberOrc}</Text>
            <Text>Data: {}</Text>
          </div>
          <div style={styles.flex_between}>
            <Text style={styles.subHeader_info}>
              Cliente: {contact.solicitante_nome}
            </Text>
            <Text style={styles.subHeader_info}>
              orgao/empresa: {contact.orgao_nome}
            </Text>
            <Text style={styles.subHeader_info}>CNPJ: {contact.cnpj}</Text>
          </div>
          <Text style={styles.subHeader}>Contato: {contact.telefone}</Text>
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
              const price = new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(item.valor);
              const quantity = item.quantity.toLocaleString("pt-br");
              const embalagem = item.embalagem.substring(0, 30) + "...";
              const fabricante = item.fabricante.substring(0, 20) + "...";
              return (
                <View key={i} style={styles.row} wrap={false}>
                  <Text style={styles.row0}>{item.id_produto}</Text>
                  <Text style={styles.row1}>{item.descricao_produto}</Text>
                  <Text style={styles.row2}>{embalagem}</Text>
                  <Text style={styles.row3}>{fabricante}</Text>
                  <Text style={styles.row4}>{quantity}</Text>
                  <Text style={styles.row5}>{price}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View>
          <Text style={styles.total}>Total: {formattedTotal}</Text>
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
