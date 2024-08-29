const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Criar páginas de posts
  const resultPosts = await graphql(`
    {
      allWpPost {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (resultPosts.errors) {
    throw resultPosts.errors;
  }

  const posts = resultPosts.data.allWpPost.nodes;

  posts.forEach((post) => {
    createPage({
      path: `/noticias/${post.slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        id: post.id,
      },
    });
  });

  // Criar páginas de homilias
  const resultHomilias = await graphql(`
    {
      allWpHomilia{
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (resultHomilias.errors) {
    throw resultHomilias.errors;
  }

  const homilias = resultHomilias.data.allWpHomilia.nodes;

  homilias.forEach((homilia) => {
    createPage({
      path: `/homilias/${homilia.slug}`,
      component: path.resolve(`./src/templates/homilia.js`),
      context: {
        id: homilia.id,
      },
    });
  });

  // Criar página de lista de homilias
  createPage({
    path: `/homilias`,
    component: path.resolve(`./src/pages/homilias.jsx`),

  });

  // Criar páginas de Cartas Pastorias
  const resultPastorais = await graphql(`
{
  allWpPastoral{
    nodes {
      id
      slug
    }
  }
}
`);

  if (resultPastorais.errors) {
    throw resultPastorais.errors;
  }

  const pastorais = resultPastorais.data.allWpPastoral.nodes;

  pastorais.forEach((pastoral) => {
    createPage({
      path: `/pastorais/${pastoral.slug}`,
      component: path.resolve(`./src/templates/pastoral.js`),
      context: {
        id: pastoral.id,
      },
    });
  });

  // Criar página Para Cartas Pastorais
  createPage({
    path: `/pastorais`,
    component: path.resolve(`./src/pages/cartasPastorais.jsx`),
  });





    // Criar páginas do Clero
    const resultPadres = await graphql(`
    {
      allWpClero {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (resultPadres.errors) {
    throw resultPadres.errors;
  }

  const padres = resultPadres.data.allWpClero.nodes;

  padres.forEach((padre) => {
    createPage({
      path: `/clRigos/${padre.slug}`,
      component: path.resolve(`./src/templates/padre.js`),
      context: {
        id: padre.id,
      },
    });
  });

  // Criar página do clero
  createPage({
    path: `/clRigos`,
    component: path.resolve(`./src/pages/clero.jsx`),
  });





  // Criar páginas para Paróquias
  const resultParoquias = await graphql(`
    {
      allWpParoquia {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (resultParoquias.errors) {
    throw resultParoquias.errors;
  }

  const paroquias = resultParoquias.data.allWpParoquia.nodes;

  paroquias.forEach((paroquia) => {
    createPage({
      path: `/paroquias/${paroquia.slug}`,
      component: path.resolve(`./src/templates/paroquia.js`),
      context: {
        id: paroquia.id,
      },
    });
  });

  // Criar página para Paróquias
  createPage({
    path: `/paroquias`,
    component: path.resolve(`./src/pages/paroquias.jsx`),
  });




  // Criar páginas para Missões
  const resultMissoes = await graphql(`
    {
      allWpMissao {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (resultMissoes.errors) {
    throw resultMissoes.errors;
  }

  const missoes = resultMissoes.data.allWpMissao.nodes;

  missoes.forEach((missao) => {
    createPage({
      path: `/missoes/${missao.slug}`,
      component: path.resolve(`./src/templates/missao.js`),
      context: {
        id: missao.id,
      },
    });
  });

  // Criar página para Missões
  createPage({
    path: `/missoes`,
    component: path.resolve(`./src/pages/missoes.jsx`),
  });




};







