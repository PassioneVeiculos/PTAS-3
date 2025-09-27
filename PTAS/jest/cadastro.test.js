const request = require("supertest");
const app = require('../server.js')


test("Caso 1: POST /cadastro + usuário e senha válidos => status 418, usuário cadastrado com sucesso!", async () => {
 const res = (await request(app).post("/auth/cadastro").send({nome: "Skolpion", email: "skolpion@gmail", senha: "Bocchio", tipo: "Rock"}));
 expect(res.status).toBe(418);
 expect(res.body.message).toBe("Usuário Cadastrado com Sucesso!");
});

test("Caso 2: POST /cadastro + usuário já existente => status 500, usuário já existente!", async () => {
 const res = (await request(app).post("/auth/cadastro").send({nome: "Claudio", email: "claudio.ifms@gmail", senha: "1234", tipo: "Administrador"}));
 expect(res.status).toBe(500);
});



