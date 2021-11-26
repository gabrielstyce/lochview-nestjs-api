export const COLUMNS_LIST = {
  id: true,
  titulo: true,
  descricao: true,
  imagens: {
    select: {
      id: true,
      url: true,
      descricao: true
    }
  },
  atributos: {
    select: {
      id: true,
      descricao: true,
      valor: true,
      imagem: {
        select: {
          id: true,
          url: true,
          descricao: true
        }
      }
    }
  }
};
