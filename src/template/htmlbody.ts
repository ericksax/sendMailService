import { resolve } from "path";
const logo = resolve("src/public", "logomarca-ativa-hospitalar-black.png");

export const html = `
    <body style="font-family: sans-serif; margin: 0; padding: 0">
    <div
        style="
        width: 600px;
        margin: auto;
        background-color: #3e96a9;
        color: white;
        line-height: 100%;
        height: 100px;
        "
    >
        <div style="margin-left: auto; margin-right: auto; padding: 10px">
        <p style="padding: 0; margin: 0; font-size: 10px">
            ATIVA MÉDICO CIRÚRGICA LTDA
        </p>
        <p style="padding: 0; margin: 0; font-size: 10px">
            CNPJ : 09.182.725/0001-12
        </p>
        <p style="padding: 0; margin: 0; font-size: 10px">
            AV VEREADOR RAYMUNDO HARGREAVES, 98 - MILHO BRANCO
        </p>
        <p style="padding: 0; margin: 0; font-size: 10px">
            JUIZ DE FORA - MG - 36083-770
        </p>
        <p style="padding: 0; margin: 0; font-size: 10px">Tel: (32)2101-1556</p>
        </div>
        <img src="${logo}" />
    </div>

    <div style="margin-left: 24px; width: 550px; margin: 36px auto">
        <h2>Olá, seu E-mail com o orçamento chegou!!</h2>
        <p>Obrigado por utilizar nosso serviço!!</p>
        <p>Qualquer dúvida pode nos procurar pelo telefone (032) 2101-1556</p>
    </div>

    <hr style="margin-left: 24px; margin-right: 24px" />
    <div style="font-size: 9px; text-align: center">
        Equipe de desenvolvedores Ativa Hospitalar - Todos direitos reservados
    </div>
    </body>
`;
