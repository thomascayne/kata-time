import { createPlayer, IPlayer, match, TennisGame  } from "./tennis-game.kata";

describe("Tennis Game", () => {
    it("should exist", () => {
        const tennisGame: any = new TennisGame();
        expect(tennisGame).toBeDefined();
    });
});


