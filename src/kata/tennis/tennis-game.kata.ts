export interface IPlayer {
	name: string;
	score: number;
	serve: boolean;
	win: string;
}

export function createPlayer(params: Partial<IPlayer>): IPlayer {
	return {
		name: "",
		score: 0,
		serve: false,
		win: "",
		...params
	};
}

export const match: number = 0 || 15 || 30 || 40;

export class TennisGame {
	gameScore = createPlayer({});
	gameEnded = false;
	matchScore = createPlayer({});
	matchStarted = false;
	matchWon = createPlayer({});
	startGame = false;

	player1 = createPlayer({
        name: "Thomas Cayne",
        score: 0,
		serve: false,
    });

	player2 = createPlayer({
        name: "Pedro Cayne",
        score: 0,
		serve: false,
    });

	pointWon(point: IPlayer): void {
		this.matchScore = point;
	}

	getGameScore(): IPlayer {
		return this.gameScore;
	}

    getMatch(): IPlayer {
        return this.matchScore;
	}

	getMatchPoint(): string {
		if (this.matchScore.score.toString() === match.toString()) {
			return match.toString();
		}
		return "No game";
	}

	playGame(match: number): string {
		if (!this.startGame) {
			this.player1.serve = true;
		}
		return "";
	}
}

