import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const ItemFaIrytailes = ({audioUrl, id, imageUrl, lullaby, name, text, updateTime, updated}) => {

  let existsAudioUrl = <ReactAudioPlayer src={audioUrl} controls />

  if (audioUrl === undefined) {
    existsAudioUrl = <ReactAudioPlayer />
  }

    return (
        <div>
            <section data-id={id}>
                <h1>{name}</h1>
                <p className="text flow-text"
                    // style={{background:`url(${imageUrl})`}}
                >
                    {text}
                </p>
                <div className="audioblock">
                  {existsAudioUrl}

                </div>
            </section>

        </div>
    );

};


export default ItemFaIrytailes;
