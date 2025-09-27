const request = require("supertest");
const app = require('../server.js')

test("POST /login retorna status 420 e a mensagem Logado com Sucesso! Além de um Token", async () => {
 const res = await request(app).get("/auth/login");
 expect(res.status).toBe(420);
 expect(res.body.message).toBe("Logado com Sucesso!");
});
