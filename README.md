# Projeto de Testes — The Internet

Este projeto foi criado com o objetivo de demonstrar habilidades em **testes manuais e automatizados** utilizando o site de demonstração [The Internet](https://the-internet.herokuapp.com).

O repositório inclui casos de teste, relatórios de bugs e automações usando **Cypress**, simulando o fluxo de autenticação do sistema.

---

##  Estrutura do Projeto

demo-the-internet/  
┣ README.md   
┣ test-cases/   
┃ ┣ CT-001-login-valido.md    
┃ ┗ CT-002-login-senha-invalida.md      
┣ bug-reports/      
┃ ┗ BUG-001-session-logout-back-button.md    
┣ automation/     
┃ ┣ package.json    
┃ ┣ package-lock.json   
┃ ┗ cypress/    
┃ ┗ e2e/demo-login.cy.js    
┣ evidences/  
┃ ┣ CT-001-login-valido.png    
┃ ┣ CT-002-login-senha-invalida.png     
┃ ┗ BUG-001-session-logout-back-button.gif   

---

##  Objetivo

Testar a funcionalidade de **login (Form Authentication)** do site [The Internet](https://the-internet.herokuapp.com/login), documentando comportamentos esperados e eventuais bugs encontrados.

---

##  Tecnologias Utilizadas
- **Cypress** – Automação de testes web
- **Git/GitHub** – Versionamento e portfólio

---

##  Como Executar os Testes Automatizados

1. Clone o repositório:
    ```
   git clone https://github.com/bruno-leonardo-dev/demo-the-internet.git

   cd demo-the-internet/automation

2. Instale as dependências:
    ```
    npm install

3. Execute os testes:
  - Modo interativo:
    ```
    npx cypress open
  - Modo headless:
    ```
    npx cypress run

##  Documentação Incluída

- 📂 test-cases/  
Casos de teste manuais

- 📂 bug-reports/    
Relatórios de bugs documentados com passos, evidências e resultados esperados

- 📂 automation/  
Scripts automatizados em Cypress simulando o login e validações

##  Autor

**Bruno Leonardo**  
QA Júnior | Testes Manuais e Automatizados   
[LinkedIn](https://www.linkedin.com/in/bruno-leonardo-26053b287/)