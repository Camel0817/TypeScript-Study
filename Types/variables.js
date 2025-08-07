var movieTitle = "Forest Gump";
movieTitle = "아저씨";
// movieTitle = 9; 오류 발생
var numCatLives = 9;
numCatLives += 1;
// numCatLives = "zero";
var gameOver = false;
gameOver = true;
// gameOver = "N";
// Type Interface (타입 추론)
var tvShow = "무한도전";
// tvShow = 1;
// tvShow = false;
var isFunny = true;
isFunny = false;
// isFunny = "true";
// the any type(어떤 Type도 올수 있음)
var thing = "hello";
thing = 1;
thing = true;
thing();
thing.toUpperCase();
// 필요한 상황은 언제일까....??
var movies = ["전지적 독자 시점", "좀비딸", "슈퍼맨", "인생은 아름다워"];
// let foundMovie;
var foundMovie;
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === "인생은 아름다워") {
        foundMovie = "인생은 아름다워";
    }
}
// foundMovie = 1;
