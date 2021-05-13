import React from "react";
import PageSheme from "../Components/PageSheme";
import Heading from "../Components/Heading";
import Breadcrumb from "../Components/Breadcrumb";
const O_Firmie = () => {
  return (
    <div className="o-firmie">
      <PageSheme>
        <Heading text="O firmie" />
        <Breadcrumb path="O firmie" />
        <div className="o-firmie__content">
            <p>
              Szanowni Państwo, Poniżej w kilku słowach pragniemy zaprezentować
              Państwu naszą Firmę.
            </p>
            <p>
              <span className="f-bold">
                BTIB - BAU-TECHNIK Inżynieria Budowlana
              </span>
              jest Firmą założoną przez inżyniera Tomasza Zagozdę.
            </p>
            <p>
              Źródłem podjęcia decyzji o rozpoczęciu własnej działaności był/ jest
              stale rosnący popyt na profesjonalne usługi na rynku Inwestycji
              Budowlanych z szeroko pojętą definicją "Inżyniera Kontraktu".
            </p>
            <p>
              Termin "Inżynier Kontraktu" można krótko scharakteryzować jako zespół
              wykwalifikowanych Osób działających w imieniu Inwestora, w celu
              sprawnego i profesjonalnego przeprowadzenia procesu budowlanego.
            </p>
            <p>
              Zapraszamy do zapoznania się ze szczegółowym profilem działalności
              naszej Firmy w zakładce Oferta.
            </p>
        </div>
      </PageSheme>
    </div>
  );
};

export default O_Firmie;
