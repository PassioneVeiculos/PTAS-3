const request = require("supertest");
const app = require('../server.js')

test("Caso 1: POST /login + usuário e senha certos => status 420, logado com sucesso!, token", async () => {
 const res = (await request(app).post("/auth/login").send({email: "claudio.ifms@gmail", senha: "1234"}));
 expect(res.status).toBe(420);
 expect(res.body.message).toBe("Logado com Sucesso!");
 expect(res.body).toHaveProperty('token');
});

test("Caso 2: POST /login + usuário correto e senha incorreta => status 401, senha incorreta!", async () => {
 const res = (await request(app).post("/auth/login").send({email: "claudio.ifms@gmail", senha: "12345"}));
 expect(res.status).toBe(401);
 expect(res.body.message).toBe("Senha Incorreta!");
});

test("Caso 3: POST /login + usuário inexistente => status 200, usuário não encontrado!", async () => {
 const res = (await request(app).post("/auth/login").send({email: "claudio.ifms@gmoil", senha: "1234"}));
 expect(res.status).toBe(200);
 expect(res.body.message).toBe("Usuário não Encontrado!");
});

test("Caso 4: POST /login + estrutura do body inválida => status 500, erro no servidor!", async () => {
 const res = (await request(app).post("/auth/login").send({emoil: "claudio.ifms@gmail", senha: "1234"}));
 expect(res.status).toBe(500);
});


