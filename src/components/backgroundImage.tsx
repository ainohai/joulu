import * as React from 'react';

const imagArr = [
  {
    url: 'https://banner2.cleanpng.com/20180217/fxq/kisspng-cloud-sky-clip-art-dreaming-clouds-cliparts-5a888d21abee15.3342528915188984657042.jpg',
  },
  {
    url: 'https://i.pinimg.com/474x/9b/52/38/9b52385169bc0fbab790291c8aa039bc--hot-firefighters-hot-firemen.jpg',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Ada_Lovelace_color.svg',
    height: '75%',
  },
  {
    url: 'https://img.freepik.com/free-photo/3d-abstract-dots-wave-pattern-background_53876-103012.jpg?w=2000',
    height: '100%',
  },
  {
    url: 'https://thumbs.dreamstime.com/b/print-wallpaper-fantasy-design-modern-art-fog-forest-colored-mystic-background-magical-magic-artistic-fairytale-dream-113837169.jpg',
  },
  {
    url: 'https://st2.depositphotos.com/3356679/7582/i/950/depositphotos_75829545-stock-photo-black-and-white-clouds-and.jpg',
  },
];

export function BackgroundImage() {
  let [index, setIndex] = React.useState(0);
  let [images, setImages] = React.useState(imagArr);
  //let [input, setInput] = React.useState("");

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'end',
      }}
    >
      <img
        src={images[index].url}
        style={{ height: images[index].height ?? '100%' }}
      />
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1001 }}>
        <button
          style={{ display: 'inline-box', maxWidth: '200px' }}
          onClick={() => setIndex(index < imagArr.length - 1 ? index + 1 : 0)}
        >
          Seuraava tausta
        </button>
        {/**<input style={{ display:"inline-box", maxWidth: "200px" }} type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="Kuvan url" />
          <a style={{ display:"inline-box", maxWidth: "200px" }} href={input}>{input}</a>
          <button style={{ display:"inline-box", maxWidth: "200px" }} onClick={() => { setImages([...images, { url: input }]); setInput(""); setIndex(images.length -1); console.dir(images) }}>Testaa taustakuvaa</button>**/}
      </div>
    </div>
  );
}
