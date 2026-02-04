📝 Gerenciador de Tarefas (Task Manager)
Um gerenciador de tarefas simples e eficiente construído com React, Tailwind CSS e Lucide React. O projeto permite criar, visualizar detalhes, marcar como concluídas e excluir tarefas, utilizando o localStorage para persistência de dados.

🚀 Funcionalidades
Adicionar Tarefas: Criação de novas tarefas com título e descrição.

Persistência: As tarefas ficam salvas no navegador através da Local Storage API, não sumindo ao recarregar a página.

Marcar como Concluída: Alterna o status da tarefa com um clique, aplicando um efeito visual de riscado.

Visualização Detalhada: Rota dinâmica para ver a descrição completa de uma tarefa específica.

Exclusão: Remoção de tarefas da lista com atualização automática do estado.

🛠️ Tecnologias Utilizadas
React.js: Biblioteca principal para construção da interface.

Tailwind CSS: Framework CSS para estilização rápida e responsiva.

React Router DOM: Gerenciamento de rotas e parâmetros de URL.

Lucide React: Biblioteca de ícones elegantes.

📁 Estrutura do Projeto
O código está organizado em componentes reutilizáveis para facilitar a manutenção:

App.jsx: Componente pai que centraliza a lógica de estado e funções de CRUD.

AddTask.jsx: Formulário com validação para entrada de novos dados.

Tasks.jsx: Lista dinâmica que renderiza as tarefas e gerencia ações de clique.

TaskPage.jsx: Página de detalhes que consome parâmetros via Query Strings.
