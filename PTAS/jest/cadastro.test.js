const request = require("supertest");
const app = require('../server.js')


test("Caso 1: POST /cadastro + usuário e senha válidos => status 418, usuário cadastrado com sucesso!", async () => {
 const res = (await request(app).post("/auth/cadastro").send({nome: "teste", email: "teste@gmail", senha: "123"}));
 expect(res.status).toBe(418);
 expect(res.body.mensagem).toBe("Usuário Cadastrado com Sucesso!");
 expect(res.body).toHaveProperty('token');
 expect(res.body.erro).toBe(false);
});

test("Caso 2: POST /cadastro + usuário já existente => status 500, usuário já existente!", async () => {
 const res = (await request(app).post("/auth/cadastro").send({nome: "teste", email: "teste@gmail", senha: "123"}));
 expect(res.status).toBe(500);
 expect(res.body.erro).toBe(true);
 const deleted = (await request(app).delete("/auth/deletar").send({email: "teste@gmail", senha: "123"}));
});



