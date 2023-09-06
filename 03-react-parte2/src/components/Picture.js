import Gaivota from "../images/gaivota.jpg";

const Picture = () => {
  return (
    <div>
      Minhas Imagens
      <div>
        <img
          src="deserto.jpg"
          height={300}
          width={400}
          alt="Imagens de um deserto."
        />
      </div>
      <div>
        <img
          src={Gaivota}
          height={300}
          width={400}
          alt="Imagem de uma gaivota ao pôr-do-sol."
        />
      </div>
    </div>
  );
};

export default Picture;
