import React from "react";
import styles from "./Proposals.module.css";

const proposals = [
  { id: 1, title: "Educação", description: "Melhorar a educação pública..." },
  {
    id: 2,
    title: "Saúde",
    description: "Ampliar o acesso ao sistema de saúde...",
  },
  {
    id: 3,
    title: "Segurança",
    description: "Implementar novas políticas de segurança...",
  },
  {
    id: 4,
    title: "Transporte",
    description: "Modernizar o sistema de transporte...",
  },
];

const additionalProposals = [
  "Cultura para todos",
  "Habitação acessível",
  "Emprego para jovens",
  "Inclusão digital",
  "Sustentabilidade urbana",
];

const Proposals = () => {
  return (
    <section id="proposals" className={styles.proposals}>
      <h2>Propostas</h2>
      <div className={styles.cards}>
        {proposals.map((proposal) => (
          <div key={proposal.id} className={styles.card}>
            <h3>{proposal.title}</h3>
            <p>{proposal.description}</p>
          </div>
        ))}
      </div>
      <ul className={styles.list}>
        {additionalProposals.map((proposal, index) => (
          <li key={index}>{proposal}</li>
        ))}
      </ul>
    </section>
  );
};

export default Proposals;
