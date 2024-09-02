import { getImageUrl } from "./utils.js";

export default function Gallery() {
  return (
    <div>
      <h1>Cardápio</h1>
      <section className="profile">
        <h2>X-TUDO</h2>
        <img
          className="avatar"
          src={getImageUrl("szV5sdG")}
          alt="X-TUDO"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>X-TUDO: </b>2 Blend 150G,Pão Brioche,Salada
          </li>
          <li>
            <b>Adcionais:</b>
            Ovo,Batatinha,Milho,Molho
          </li>
          <li>
            <b>Trio: </b>
            Xtudo + Refrigerante + Batata
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>X-TUDO 2</h2>
        <img
          className="avatar"
          src={getImageUrl("YfeOqp2")}
          alt="Xtudo2"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>X-TUDO2: </b>3 Blends, Cebola caramelizada,milho,batata,salsicha
          </li>
          <li>
            <b>Adcionais:</b>
            Ovo,Batatinha,Milho,Molho
          </li>
          <li>
            <b>Trio: </b>Xtudo2+Refrigerante + Batata
          </li>
        </ul>
      </section>
    </div>
  );
}
