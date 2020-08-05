import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/3664254?s=460&u=73c9a8ab65243b0e10d891ac69043a174f8e2c84&v=4"
          alt="Renan Afrausino"
        />
        <div>
          <strong>Renan Afrausino</strong>
          <span>Front-End</span>
        </div>
      </header>

      <p>
        Lorem, ipsum dolor sit amet.
        <br />
        Consectetur adipisicing elit. Rerum magnam voluptate fugiat tenetur ea
        sint qui ratione consequatur ab, sit veniam eligendi. Qui, corporis
        tempore.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato!
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
