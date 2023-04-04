try {
  try {
    try {
      throw new Error("Erro no nível mais interno");
    } catch (e) {
      console.log("Erro capturado no nível mais interno: ", e.message);
      throw e;
    }
  } catch (e) {
    console.log("Erro capturado no nível intermediário: ", e.message);
    throw e;
  }
} catch (e) {
  console.error("Erro capturado no nível mais externo: ", e.message);
}


console.log("Iniciando o processamento");

try {
  // código que pode gerar um erro
  throw new Error("Ocorreu um erro");

} catch (error) {
  console.error("Erro capturado: ", error);

} finally {
  console.log("Fim do processo");
}
