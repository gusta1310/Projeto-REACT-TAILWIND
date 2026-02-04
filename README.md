📝 Gerenciador de Tarefas (Task Manager)
Este é um projeto desenvolvido com React para consolidar conceitos de gerenciamento de estado, roteamento dinâmico e persistência de dados. A aplicação permite que o usuário organize suas tarefas diárias de forma simples e intuitiva.

🔗 Acesse o projeto online: Clique aqui para abrir

🚀 Funcionalidades
CRUD de Tarefas: Adicione novas tarefas, visualize a lista, marque como concluídas e remova itens indesejados.

Persistência Local: Integração com a API localStorage do navegador para manter os dados salvos mesmo após fechar a página.

Página de Detalhes: Sistema de rotas para visualizar informações detalhadas de cada tarefa individualmente.

Design Responsivo: Interface moderna e adaptável construída com Tailwind CSS.

🛠️ Tecnologias Utilizadas
React.js: Biblioteca principal para construção da interface.

Tailwind CSS: Estilização baseada em classes utilitárias para rapidez e performance.

React Router DOM: Gerenciamento de navegação entre a Home e a Página de Detalhes.

Lucide React: Biblioteca de ícones modernos.

Vite: Ferramenta de build rápida para o desenvolvimento.

📂 Estrutura do Projeto
O projeto foi organizado de forma modular para facilitar a manutenção:

App.jsx: Componente central com a lógica de estado global e persistência.

AddTask.jsx: Componente responsável pela captura e validação de novas tarefas.

Tasks.jsx: Lista dinâmica que gerencia as interações de clique e exclusão.

TaskPage.jsx: Página de exibição de detalhes utilizando parâmetros de URL.
