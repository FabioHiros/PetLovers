
<h1>Como rodas o programa</h1>
<h2>Passo 1</h2>
<p>
  -Baixe o repositório<br>
  -Entre na pasta <b>FRONTEND</b> pelo seu terminal<br>
  -Digite Npm Install<br>
  -Digite Npm run dev<br>
  -Utilize o Link fornecido no terminal para acessar o programa
</p>

<h2>Passo 2</h2>
<p>Em outro terminal vá até a pasta <b>BACKEND</b> e digite npm install<br>
  -Crie um arquivo .env dentro da pasta Backend com o seus dados para o banco de dados mysql DATABASE_URL="mysql://usuario:senha@localhost:3306/mydb?schema=public" <br>
  -Digite "npx prisma generate" para gerar o client<br>
  -Digite "npx prisma migrate dev" para criar o banco de dados mysql a partir do schema<br>
  -Entre na pasta src pelo terminal e digite npx ts-node src/server.ts  para iniciar o server backend<br>
</p>
