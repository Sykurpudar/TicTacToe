const game = require('./game');
test("returns greeting with custom name", () => {
	expect(game("Bei")).toBe("Hello, Bei!");
});
