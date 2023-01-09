import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer'
  }
};

export const postPrompt = async ({
  promp,
  n,
  size
}: {
  promp: string;
  n: number;
  size: '256x256' | '512x512' | '1024x1024';
}) => {
  try {
    const res = await axios.post(
      'https://api.openai.com/v1/images/generations',
      {
        promp: promp,
        n: n,
        size: size
      },
      config
    );
    console.log(promp, n, size);
    return Promise.resolve(res);
  } catch (err) {
    return Promise.resolve(err);
  }
  return;
};
