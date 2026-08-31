// [CRUD] javascript basico
const miniTwitter = {
  usuarios: [
    {
      username: "imthaix",
    },
  ],
  posts: [
    {
      id: 1,
      owner: "imthaix",
      content: "Meu primeiro tweet",
    },
  ],
};

// CREATE
function criaPost(dados) {
  miniTwitter.posts.push({
    id: miniTwitter.posts.lenght + 1,
    owner: dados.owner,
    content: dados.content,
  });
}
criaPost({ owner: "imthaix", content: "Segundo tweet" });
console.log(miniTwitter.posts);

// READ
function pegaPosts() {
  return miniTwitter.posts;
}
console.log(pegaPosts());

// UPDATE
function atualizaContentDoPost(id, novoConteudo) {
  const postQueVaiSerAtualizado = pegaPosts().find((post) => {
    return post.id === id;
  });
  console.log(postQueVaiSerAtualizado);
}
atualizaContentDoPost(2, "Novo conteudo do post");

// DELETE
