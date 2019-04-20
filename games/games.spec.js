const req = require("supertest");
const server = require("../api/server");
const Games = require("../games/gamesModel");
beforeEach(() => {
  Games.clear();
});

describe("the games router", () => {
  describe("GET /api/games", () => {
    it("should return empty array of theres no games ", async () => {
      const res = await req(server).get("/api/games");
      expect(res.status).toBe(200);
      expect(res.type).toBe("application/json");
      expect(res.body).toEqual([]);
    });
  });
});
