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
  console.log(postQueVaiSerAtualizado)
  postQueVaiSerAtualizado.content() = novoConteudo
}
atualizaContentDoPost(1, "Novo conteudo do post")
console.log(pegaPosts());

// DELETE
function apagaPost(id){
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id;
    })
    miniTwitter.posts = listaDePostsAtualizada

    console.log(listaDePostsAtualizada);
}
apagaPost(1)