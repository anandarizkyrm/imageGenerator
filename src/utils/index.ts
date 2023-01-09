import axios from 'axios';

const API_KEY = import.meta.env.VITE_KEY_API;
const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

export const postPrompt = async ({
  prompt,
  n,
  size
}: {
  prompt: string;
  n: number;
  size: '256x256' | '512x512' | '1024x1024';
}) => {
  try {
    const res = await axios.post(
      'https://api.openai.com/v1/images/generations',
      {
        prompt,
        n,
        size
      },
      config
    );

    return Promise.resolve(res);
  } catch (err) {
    console.log(err);
    throw new Error(err.response.data.error.message);
  }
};
