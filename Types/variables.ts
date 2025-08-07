let movieTitle: string = "Forest Gump";
movieTitle = "아저씨";
// movieTitle = 9; 오류 발생

let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = "zero";

let gameOver: boolean = false;
gameOver = true;
// gameOver = "N";


// Type Interface (타입 추론)
let tvShow = "무한도전";
// tvShow = 1;
// tvShow = false;

let isFunny = true;
isFunny = false;
// isFunny = "true";

// the any type(어떤 Type도 올수 있음)
let thing: any = "hello";
thing = 1;
thing = true;
thing();
thing.toUpperCase();

// 필요한 상황은 언제일까....??
const movies = ["전지적 독자 시점","좀비딸","슈퍼맨","인생은 아름다워"]

// let foundMovie;
let foundMovie: string;

for(let movie of movies) {
    if(movie === "인생은 아름다워") {
        foundMovie = "인생은 아름다워";
    }
}

// foundMovie = 1;
