import  { Configuration, OpenAIApi } from 'openai';
import { writeFileSync } from 'fs';

const configuration = new Configuration({
    apikey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

const prompt = 'man in the universe'

const response = await openai.createImage({
    prompt,
    n: 1,
    size: "1024x1024", 
  });
  
const url = response.data.data[0].url;
console.log(url);     


// saving image to disk 

const imgResult = await fetch(url);
const blob = await imgResult.blob();
const buffer = Buffer.from(await blob.arrayBuffer());
writeFileSync(`./img/${prompt}.png`, buffer);