import dotenv from 'dotenv';
dotenv.config( );
import express from 'express';
const app = express();
app.get('/', ( req, res ) => {
    res.send('Hello World!');
});
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
          title: "Why did the JavaScript developer cross the road?",
          id: 1,
          content: "To get to the 'other side'! (console.log('other side'))"
        },
        {
          title: "What do you call a fish with no eyes?",
          id: 2,
          content: "Fsh!"
        },
        {
          title: "Why did the React component feel relieved?",
          id: 3,
          content: "Because it was finally off the hook!"
        },
        {
          title: "What is a JavaScript developer's favorite beverage?",
          id: 4,
          content: "Syntax sugar!"
        },
        {
          title: "A JavaScript object walks into a bar...",
          id: 5,
          content: "Bartender says, 'We don't serve your type here.' Object replies, 'What? You don't have prototypes?'"
        }
      ];
    res.send(jokes)
})
app.listen(process.env.PORT || 3000 , () => {
    console.log(`Server is running on port ${ process.env.PORT || 3000 }`);
});

