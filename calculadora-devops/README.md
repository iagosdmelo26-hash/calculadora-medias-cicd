# Calculadora de Médias — Seminário DevOps e CI/CD

Site simples em HTML, CSS e JavaScript, com testes automatizados em Node.js e publicação via GitHub Actions + GitHub Pages.

## Estrutura

- `index.html`: interface do site
- `css/style.css`: aparência
- `js/calculadora.js`: regra de cálculo testada
- `js/app.js`: interação com a página
- `tests/calculadora.test.js`: testes automatizados
- `.github/workflows/ci-cd.yml`: pipeline de testes e publicação
- `package.json`: comando de testes

## 1. Testar no computador

Instale o Node.js (versão 22 ou superior), abra a pasta do projeto no VS Code e execute no terminal:

```bash
npm test
```

O comando executa os testes. Para abrir o site, abra `index.html` no navegador.

## 2. Criar o repositório no GitHub (interface web, sem terminal Git)

1. Entre em github.com e crie um repositório público, por exemplo `calculadora-devops`.
2. Envie os arquivos e pastas deste projeto, **mantendo a estrutura**, especialmente `.github/workflows/ci-cd.yml`. A pasta `.github` pode estar oculta em alguns sistemas.
3. Faça commit na branch `main`.
4. Em **Settings > Pages > Build and deployment**, selecione **Source: GitHub Actions**.
5. Em **Actions**, acompanhe a execução `CI e publicacao do site`.
6. Quando terminar, encontre o link do site em **Settings > Pages** ou no ambiente `github-pages` da execução.

Se o repositório usar regras de proteção ou políticas organizacionais, será preciso ajustar as permissões de execução e publicação. GitHub Pages pode exigir configurações específicas dependendo do plano e da visibilidade do repositório.

## 3. Demonstração segura: erro e correção

**Não altere `main` diretamente para criar o erro.**

1. No GitHub, abra o seletor de branches e crie `demonstracao-erro` a partir de `main`.
2. Na branch `demonstracao-erro`, edite `js/calculadora.js` e troque:

```javascript
return (nota1 + nota2) / 2;
```

por:

```javascript
return nota1 + nota2;
```

3. Faça commit da alteração nessa branch.
4. Abra um **Pull request** da branch `demonstracao-erro` para `main`.
5. Acesse a aba **Actions** (ou os checks do pull request). O job `Testes automatizados` deverá falhar. O job de publicação não executará para o pull request.
6. Ainda na branch `demonstracao-erro`, corrija a função para `return (nota1 + nota2) / 2;` e faça outro commit.
7. Aguarde a nova execução dos testes; agora deverão passar.
8. Para mostrar uma **nova versão publicada**, faça uma mudança visível adicional na branch, por exemplo altere o título do site para `Calculadora de Médias — Versão 2` no `index.html`, faça commit e aguarde os testes.
9. Faça merge do pull request aprovado para `main`. A execução de `push` em `main` fará os testes novamente e, se passarem, publicará o site.
10. Abra o link do GitHub Pages e confira a mudança visual.

**Importante:** se a branch terminar igual à `main`, não haverá alteração para mesclar. Por isso o passo 8 é necessário para demonstrar uma publicação nova.

## 4. O que cada integrante apresenta

1. **DevOps:** explica o cenário e a colaboração da equipe.
2. **Versionamento:** mostra branch, commits, pull request e merge.
3. **Automação:** mostra o arquivo `.github/workflows/ci-cd.yml` e explica o acionamento automático.
4. **CI/CD:** abre os checks de teste falhando/passando e a execução da publicação condicionada aos testes.
5. **Benefícios:** abre o site atualizado e comenta rapidez, rastreabilidade e redução de erros.

## 5. Conceitos importantes

- **CI:** integra e testa alterações frequentemente.
- **Continuous Delivery:** mantém a aplicação validada e pronta para ser lançada, com possibilidade de aprovação manual.
- **Continuous Deployment:** publica automaticamente em produção após verificações obrigatórias.
- **Pipeline deste projeto:** testes em pull requests; testes + publicação automática em `main`.
- A publicação em `main` é automática após os testes. O merge do pull request é uma decisão humana, de modo que a demonstração inclui uma etapa de aprovação antes da implantação.

## 6. Plano B

Antes da aula, faça capturas de tela de: testes falhando, testes passando, pipeline de publicação concluída e site antes/depois. Se a internet falhar, apresente as capturas e execute `npm test` localmente.

## Referências oficiais

- https://docs.github.com/en/actions
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://nodejs.org/api/test.html
