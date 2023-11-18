/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import axios from 'axios';

const BackgroundRemoval = ({ Imageurl }) => {
  const [resultImageUrl, setResultImageUrl] = useState(null);

 

  const handleRemoveBackground = () => {

    axios({
      method: 'post',
      url: 'https://api.remove.bg/v1.0/removebg',
      data: { image_url: Imageurl },
      responseType: 'arraybuffer',
      headers: {
        'X-Api-Key': 'D6vL9uNsjjcrCX2gYUxzZZym',
      },
      encoding: null,
    })
      .then((response) => {
        if (response.status !== 200) {
          console.error('Error:', response.status, response.statusText);
          return;
        }

        const blob = new Blob([response.data], { type: 'image/png' });
        const newResultImageUrl = URL.createObjectURL(blob);
        setResultImageUrl(newResultImageUrl);
      })
      .catch((error) => {
        console.error('Request failed:', error);
      });
  };
  if (Imageurl) {
    handleRemoveBackground();
  }

  return (
    <div>
      {/* {resultImageUrl && (
        <main className='flex'>
          <section className='bg-slate-100 flex justify-center items-center rounded-2xl p-8'>
            <div>
              <h2>Result:</h2>
              <img src={resultImageUrl} alt="Result" />
            </div>
          </section>
        </main>
      )} */}

      <img className='mix-blend-multiply   h-[10rem] ' src={resultImageUrl}  alt="" />
    </div>
  );
};

export default BackgroundRemoval;
