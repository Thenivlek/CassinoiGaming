import React from "react";
import styles from "./Footer.module.scss";
import PixLogo from "../../assets/pix.png";

import { BsChatDotsFill, BsInstagram } from "react-icons/bs";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.brand}>
          <span className={styles.ux}>UX</span>
          <span className={styles.bet}>BET</span>
        </div>
        <p className={styles.text}>
          A ux.bet.br é operada pela Reals Brasil LTDA, uma empresa registrada
          sob o CNPJ nº 56.197.912/0001‑50, licenciada – em nível federal – pela
          Secretaria de Prêmios e Apostas do Ministério da Fazenda (SPA/MF) no
          Brasil com o número de Autorização SPA/MF n° 2.104‑7 datada de 30 de
          Dezembro de 2024 (publicada em 31/12/2024).
        </p>
        <p className={styles.contact}>
          <strong>Ouvidoria:</strong> Telefone: 0800 591 9481
          <br />
          <a href="mailto:suporte@uxbet.com.br">suporte@uxbet.com.br</a>
          <br />
          Segunda a sexta, das 9:00 às 18:00h, exceto feriados
        </p>
      </div>

      <div className={styles.right}>
        <div className={styles.col}>
          <h4>Institucional</h4>
          <ul>
            <li>Quem somos</li>
            <li>Instalar APP Cliente</li>
            <li>Regras</li>
            <li>Política de privacidade</li>
            <li>Política AML</li>
            <li>Jogo responsável</li>
            <li>Termos e condições</li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4>Métodos de pagamento</h4>
          <img className={styles.icon} src={PixLogo} alt="PIX" />
        </div>
        <div className={styles.col}>
          <h4>Siga nossas redes sociais</h4>
          <BsInstagram className={styles.iconig} />
        </div>
      </div>
    </div>

    <div className={styles.bottom}>
      <span>2025 © UX. Todos os direitos reservados.</span>
      <span>Versão 2.23</span>
    </div>

    <button className={styles.floating}>
      <BsChatDotsFill size={20} color="#fff" />
    </button>
  </footer>
);

export default Footer;
