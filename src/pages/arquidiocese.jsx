// src/pages/arquidiocese.js
import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import * as styles from './css/arquidiocese.module.css';
import arcebispo from '../images/arcebispo.jpg';
import bispoemerito from '../images/bispoemerito.jpg';
import clero from '../images/clero.jpg';
import comunidades from '../images/comunidades.jpeg';
import historia from '../images/historia.webp';
import missoes from '../images/missoes.png';
import paroquias from '../images/paroquias.png';
import vigararias from '../images/vigararias.jpg';
import movimentos from '../images/movimentos.jpg';
import seminarios from '../images/seminarios.jpg';
import escolas from '../images/escolas.jpg';

const Arquidiocese = () => {
  return (
    <Layout pageTitle="Arquidiocese">
      <Seo title="Arquidiocese" />

      <section className={styles.section}>
        <div className={styles.left}>
          <h1 className={styles.h1}>Arcebispo da Arquidiocese</h1>
          <img src={arcebispo} className={styles.image} alt="Arcebispo" />
        </div>
        <div className={styles.content}>
          <Link to="/biografia/biografia-arcebispo"><h2 className={styles.h2}>Biografia</h2></Link>
          <Link to="/armas/armas-arcebispo"><h2 className={styles.h2}>Armas</h2></Link>
          <Link to="/homilias"><h2 className={styles.h2}>Homilias</h2></Link>          
          <Link to="/cartasPastorais"><h2 className={styles.h2}>Cartas pastorais</h2></Link>          
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.left}>
          <h1 className={styles.h1}>Bispo Emérito</h1>
          <img src={bispoemerito} className={styles.image} alt="Bispo Emérito" />
        </div>
        <div className={styles.content}>
          <Link to="/biografia/biografia-bispo-emerito"><h2 className={styles.h2}>Biografia</h2></Link>
          <Link to="/armas/armas-bispo-emerito"><h2 className={styles.h2}>Armas</h2></Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.left}>
          <h1 className={styles.h1}>Clero</h1>
          <img src={clero} className={styles.image} alt="Clero" />
        </div>
        <div className={styles.content}>
          <Link to="/clero"><h2 className={styles.h2}>Clero da Arquidiose do Huambo</h2></Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.left}>
          <h1 className={styles.h1}>Seminários</h1>
          <img src={seminarios} className={styles.image} alt="Seminários" />
        </div>
        <div className={styles.content}>
          <Link to="/seminarios/seminario-menor"><h2 className={styles.h2}>Seminário Menor de Nossa Senhora das Mercês</h2></Link>
          <Link to="/seminarios/seminario-propedeutico"><h2 className={styles.h2}>Semninário Propedêutico São João Evangelista</h2></Link>
          <Link to="/seminarios/seminario-maior-filosofia"><h2 className={styles.h2}>Seminário Maior de Cristo Rei, Secção de Filosofia</h2></Link>
          <Link to="/seminarios/seminario-maior-teologia"><h2 className={styles.h2}>Seminário Maior de Cristo Rei, Secção de Teologia</h2></Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.left}>
          <h1 className={styles.h1}>Vigararias</h1>
          <img src={vigararias} className={styles.image} alt="Vigararias" />
        </div>
        <div className={styles.content}>
          <Link to="/vigararias/vigararia-sede"><h2 className={styles.h2}>Vigararia da Sede</h2></Link>
          <Link to="/vigararias/vigararia-caala"><h2 className={styles.h2}>Vigaraia da Caála</h2></Link>
          <Link to="/vigararias/vigararia-katchiungo"><h2 className={styles.h2}>Vigaria do Katchiungo</h2></Link>
          <Link to="/vigararias/vigararia-bailundo"><h2 className={styles.h2}>Vigararia do Bailundo</h2></Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.left}>
          <h1 className={styles.h1}>Paróquias</h1>
          <img src={paroquias} className={styles.image} alt="Paróquias" />
        </div>
        <div className={styles.content}>
          <Link to="/paroquias"><h2 className={styles.h2}>Paróquias da Arquidiose do Huambo</h2></Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.left}>
          <h1 className={styles.h1}>Missões</h1>
          <img src={missoes} className={styles.image} alt="Missões" />
        </div>
        <div className={styles.content}>
          <Link to="/missoes"><h2 className={styles.h2}>Missões da Arquidiose do Huambo</h2></Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.left}>
          <h1 className={styles.h1}>Vida Cristã</h1>
          <img src={comunidades} className={styles.image} alt="Vida Cristã" />
        </div>
        <div className={styles.content}>
          <Link to="/vida-crista/comunidades-religiosas"><h2 className={styles.h2}>Comunidades Religiosas e Institutos Religiosos presentes na Arquidiose do Huambo</h2></Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.left}>
          <h1 className={styles.h1}>Associações e Movimentos</h1>
          <img src={movimentos} className={styles.image} alt="Associações e Movimentos" />
        </div>
        <div className={styles.content}>
          <Link to="/associacoes-movimentos/movimentos-apostolado"><h2 className={styles.h2}>Movimentos de Apostolado e Associações presentes na Arquidiose do Huambo</h2></Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.left}>
          <h1 className={styles.h1}>Escolas Católicas</h1>
          <img src={escolas} className={styles.image} alt="Escolas Católicas" />
        </div>
        <div className={styles.content}>
          <Link to="/escolas/escolas-catolicas"><h2 className={styles.h2}>Escolas Católicas da Arquidiose do Huambo</h2></Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.left}>
          <h1 className={styles.h1}>História</h1>
          <img src={historia} className={styles.image} alt="História" />
        </div>
        <div className={styles.content}>
          <Link to="/historia/historia-arquidiocese"><h2 className={styles.h2}>História da Arquidiose do Huambo</h2></Link>
        </div>
      </section>
    </Layout>
  );
};


export const Head = () => <title>Arquidiocese</title>
export default Arquidiocese;
