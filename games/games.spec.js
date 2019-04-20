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
    it("should return an array of games ", async () => {
      Games.addGame({
        title: "Pacman",
        genre: "Arcade",
        releaseYear: 1980
      });
      Games.addGame({
        title: "Mario",
        genre: "Platformer",
        releaseYear: 1989
      });
      const res = await req(server).get("/api/games");
      expect(res.status).toBe(200);
      expect(res.type).toBe("application/json");
      expect(res.body).toEqual([
        {
          title: "Pacman",
          genre: "Arcade",
          releaseYear: 1980
        },
        {
          title: "Mario",
          genre: "Platformer",
          releaseYear: 1989
        }
      ]);
    });
  });
});
