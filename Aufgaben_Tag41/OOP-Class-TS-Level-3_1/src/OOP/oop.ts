import Series from "./classes/Series";
import Episode from "./classes/Episode";
import Actor from "./classes/Actor";

const actorOne = new Actor("America", "Ferrera", "1984-04-18", "female");

const actorTwo = new Actor("Mark", "McKinney", "1959-06-26", "male");

const actorThree = new Actor("Lauren", "Ash", "1983-02-04", "female");

const episodeOne = new Episode("Grand Re-Opening", 40, "The employees of Cloud 9 rush to restock the store in time for its grand re-opening.", [actorOne, actorTwo]);

const episodeTwo = new Episode("Viral Video", 40, "The employees of Cloud 9 explore social media when a controversial video is posted online.", [actorOne, actorThree]);

const episodeThree = new Episode("Golden Globes Party", 40, "Amy enlists Dina and Jonah to help plan her annual Golden Globes party.", [actorOne, actorThree, actorTwo]);

const seriesOne = new Series("Superstore", "Superstore follows a group of employees working at Cloud 9, a fictional big-box chain store in St. Louis, Missouri.", 2015, 2021, [episodeOne, episodeTwo, episodeThree]);


// const printSeriesInfo = (series: Series) => {
//     console.log(`Title: ${series._title} Description: ${series._description} Start Year: ${series._startYear} Number of Episodes: ${series._episodes.length} 
//     Actors:
//         ${actorOne._firstName} ${actorOne._lastName}
//             Birthday: ${actorOne._birthday}
//             Gender: ${actorOne._gender}
//         ${actorTwo._firstName} ${actorTwo._lastName}
//             Birthday: ${actorTwo._birthday}
//             Gender: ${actorTwo._gender}
//         ${actorThree._firstName} ${actorThree._lastName}
//             Birthday: ${actorThree._birthday}
//             Gender: ${actorThree._gender}
//         `);
// }
// hier mit Hilfe wg. Fehlermeldung
const printSeriesInfo = (series: Series) => {
    console.log(`Title: ${series._title}`);
    console.log(`Description: ${series._description}`);
    console.log(`Start Year: ${series._startYear}`);
    console.log(`Number of Episodes: ${series._episodes.length}`);

    series._episodes.forEach((episode) => {
        console.log(`Episode ${episode._title}`);
        console.log(`Duration: ${episode._duration} minutes`);
        console.log(`Description: ${episode._description}`);
        console.log(`Actors:`);
        episode._actors.forEach((actor) => {
            console.log(`${actor._firstName} ${actor._lastName}`);
            console.log(`Birthday: ${actor._birthday}`);
            console.log(`Gender: ${actor._gender}`);
        });
    });
};

printSeriesInfo(seriesOne);