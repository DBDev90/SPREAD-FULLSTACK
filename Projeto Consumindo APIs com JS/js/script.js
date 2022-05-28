// const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

// const BTN_CAT = document.getElementById('changeCat');

// const GET_IMG = async () => {
//     try {
//         const data = await fetch(BASE_URL)
//         const json = await data.json();
//         return json.webpurl;
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// const LOAD_IMG = async () => {
//     const IMG_CAT = document.getElementById('cat');
//     IMG_CAT.src = await GET_IMG();
// };

// BTN_CAT.addEventListener('click', LOAD_IMG);
// LOAD_IMG();

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const btnCat = document.getElementById('changeCat');

const getImg = async () => {
    const data = await fetch(BASE_URL)
        .then((resposta) => resposta.json())
        .catch((erro) => console.log(erro));
    return data.webpurl;
};

const loadImg = async () => {
    const imgCat = document.getElementById('cat');
    imgCat.src = await getImg();
};

btnCat.addEventListener('click', loadImg);
loadImg();