import React from "react";
import styles from "./Agenda.module.css";

const events = [
  { date: "01/10", description: "Encontro com eleitores em Copacabana" },
  { date: "03/10", description: "Debate na TV" },
  { date: "05/10", description: "Visita à comunidade no Complexo do Alemão" },
];

const Agenda = () => {
  return (
    <section id="agenda" className={styles.agenda}>
      <h2>Agenda de Campanha</h2>
      <div className={styles.eventList}>
        {events.map((event, index) => (
          <div key={index} className={styles.event}>
            <span>{event.date}</span>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agenda;
