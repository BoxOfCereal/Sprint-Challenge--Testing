const req = require("supertest");
const server = require("../games/games");

describe("the server", () => {
  describe("GET /", () => {
    it(" should return up a response for the message", async () => {
      const res = await req(server).get("/");
      expect(res.status).toBe(200);
      expect(res.type).toBe("application/json");
      expect(res.body).toEqual({ message: " the server is up" });
    });
  });
});
