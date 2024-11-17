// Lernziel: fetch zum Abrufen von Daten von einer API nutzen:
// Nutze die JSON-Placeholder API und hole dort mit fetch die Kommentare zum post1 unter 
// https://jsonplaceholder.typicode.com/posts/1/comments ab

// Lass dir die E-Mail-Adressen aller Kommentierenden auf der Konsole ausgeben
// Fange mögliche Fehler beim Aufruf der API ab und zeige sie in der Konsole an

// Hole in einem neuen fetch alle Posts ab https://jsonplaceholder.typicode.com/posts
// und verarbeite sie weiter
    
//     gib alle Posts auf der Konsole aus
//     finde die höchste Post-Id und gib sie auf der Konsole aus
//     finde den kürzesten Titel gib ihn auf der Konsole aus
//     finde den längsten Body und gib ihn auf der Konsole aus



import { IComments, IPosts } from "./IPosts";

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/posts/1/comments'
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

async function fetchComments(){
    try {
        const response = await fetch(COMMENTS_URL);
        const result= await response.json() as  IComments[];
        console.log(result);
        
        result.forEach(mailAd => {
            console.log(mailAd.email);
            
        });
    } catch (err) {
        console.log('catching comments failed', err);  
    }
}
fetchComments(); 


let allPosts :IPosts [] = []

async function fetchAllPosts(){
    try {
        const response = await fetch(POSTS_URL);
        const result = await response.json() as IPosts [];

        allPosts = [...result]; 
        console.log(allPosts);
        
        const highestPostId = allPosts.reduce((highest,post) => post.id > highest ? post.id: highest, 0)
        console.log("Highest ID of posts: ", highestPostId); 
        
        const shortestTitle = allPosts.reduce((shortest, post) => post.title.length < shortest.title.length ? post : allPosts[0]); 
        console.log("Shortest title of posts:  ", shortestTitle); 
        
        const longestBody = allPosts.reduce((longest,post) => post.body.length < longest.body.length ? post : allPosts[0]);
        console.log("Longest body of posts: ", longestBody); 
        
    } catch(err) {
        console.error('fetching all post failed', err)
    }
}
fetchAllPosts()