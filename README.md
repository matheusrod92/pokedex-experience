# Pokédex 

Neste "assignment" vocês deverão criar uma pokedéx semelhante a do site https://www.pokedex.org/ para listar pokemons e seus detalhes! O intuito dessa dinâmica é fazer com que você crie diferentes componentes e reutilize os mesmos.

## Entrega do assignment
1. Faça um fork deste repositório
2. Clone o seu fork na sua máquina
3. Implemente tudo que conseguir
4. Faça um pull-request do seu fork no repositório original

## O que pode ser utilizado?
- angular-cli (https://cli.angular.io/)
- materialize.css (https://materializecss.com/)
- PokeAPI v2 (https://pokeapi.co)

## Como vai ser feito?

### Listando Pokemons
Primeiro iremos listar nossos pokemons através do endpoint `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0` onde **offset** representa o numero anterior ao id do pokemon que vai ser buscado - então se buscarmos por offset=0 teremos como primeiro pokemon o número 1 - e **limit** a quantidade de pokemons que vai ser listada.

**Exemplo:** Com o link `https://pokeapi.co/api/v2/pokemon/?limit=3&offset=143` eu vou visualizar os 3 pokemons lendários do desenho clássico (Articuno, Zapdos e Moltres).

**Exemplo de listagem:** https://www.pokedex.org/ (não é necessário colocar a imagem do pokemon)

Para listar nossos pokemons criem um serviço que puxe os dados do endpoint disponibilizado acima e popule um componente que exiba apenas o seu nome e possua um link para sua descrição completa seguindo o padrão de rota `/pokemon/:id`, onde **id** é o id do nosso pokemon. Este componente deve ter uma visualização de card  (https://materializecss.com/cards.html#basic).

**Exemplo de rota:**
Caso eu queira ver os detalhes do pokemon Articuno que possui o id 144 eu devo visitar a url `/pokemon/144` para ver os seus dados.

### Detalhando meu pokemon
Nos detalhes do nosso pokemon devemos obrigatóriamente mostrar:
- id
- nome
- altura (height)
- imagem de frente (sprite)
- nomes dos tipos (types)
- Status (stats)

Os dados a serem mostrados devem estar disponibilizados semelhantes ao exemplo: https://www.pokedex.org/#/pokemon/7

- id deve estar em negrito
- nome deve ser um título (https://materializecss.com/typography.html#headers)
- nomes dos tipos devem ter uma cor de fundo em destaque
- status devem mostrar o nome do status com seu valor entre parênteses e a frente dele uma barra de progresso do seu valor (https://materializecss.com/preloader.html#linear) - o valor máximo que a barra de progresso pode atingir é 200.

Para consumir todos esses dados utilizem o endpoint `https://pokeapi.co/api/v2/pokemon/:id` onde **id** é o id do pokemon a ser buscado (dica: peguem da rota).

Criem um componente para mostrar todos esses dados e um serviço para consumir os dados da API.

