import dotEnv from 'dotenv';

dotEnv.load();


const config = {
  goodreadsKey:  process.env.GOODREADS_API_KEY,
  translateKey: process.env.GOOGLE_API_KEY
}

export {config};