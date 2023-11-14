const TemplateExpressions = () => {
  const name = "Letícia";
  const data = {
    age: 29,
    job: "Desenvolvedora de Software",
  };

  return (
    <>
      <div>
        <h1>Olá, {name}, tudo bem? </h1>
        <p>Você atua como: {data.job}</p>
        <p>{4 + 4}</p>
      </div>
      {console.log("TSX React")}
    </>
  );
};

export default TemplateExpressions;
