const URL = 'https://japceibal.github.io/japflix_api/movies-data.json';
const MOVIES = [];
let str = '';

fetch(URL).then(RESOLVED => RESOLVED.json()).then(DATA => {
    for (const elem of DATA) {
        MOVIES.push(elem);
    }
});

document.getElementById('btnBuscar').addEventListener('click', () => {
    str = document.getElementById('inputBuscar').value;
    if (str !== '') {
        document.getElementById('lista').innerHTML = '';
        let moviesFilters = MOVIES.filter((elem) => {
            return  elem.title.toLowerCase().includes(str.toLowerCase()) ||
                    elem.tagline.toLowerCase().includes(str.toLowerCase()) ||
                    elem.overview.toLowerCase().includes(str.toLowerCase()) ||
                    getGenre(elem.genres, str);
        });
        showMovies(moviesFilters);
    }
});

function getGenre(gen, str) {
    let flag = false;

    for (const elem of gen) {
        if (elem.name.includes(str)){
            flag = true;
        }
    }
    return flag;
}

function showMovies(mvs) {
    for (const elem of mvs) {
        let movie = document.createElement('div');
        movie.classList.add('list-group-item', 'bg-dark-light');
        movie.innerHTML = `
            <div class="float-end">${showScore(Math.round(elem.vote_average))}</div>
            <div class="text-start">
            <h4 class="fw-bold text-light"><a id="${elem.id}" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">${elem.title}</a></h4>
            <p class="text-secondary">${elem.tagline}</p>
            </div>
        `;
        document.getElementById('lista').appendChild(movie);
        
        document.getElementById(elem.id).addEventListener('click', ()=>{
            document.getElementById('offcanvasTopLabel').innerHTML = elem.title;
            document.getElementById('overview').innerHTML = elem.overview;
            document.getElementById('genres').innerHTML = showGenres(elem.genres);
            document.getElementById('year').innerHTML = elem.release_date.slice(0,4);
            document.getElementById('runtime').innerHTML = ` ${elem.runtime} mins`;
            document.getElementById('budget').innerHTML = ` $${elem.budget}`;
            document.getElementById('revenue').innerHTML = ` $${elem.revenue}`;
        });
    }
}

function showGenres(arr) {
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
            res += `${arr[i].name} - `;
        }else{
            res += `${arr[i].name}`;
        }
    }
    return res;
}

function showScore(score) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < (score/2) ) {
            stars += `
            <span class="fa fa-star checked"></span>
            `;
        }else{
            stars += `
            <span class="fa fa-star"></span>
            `;
        }
    }
    return stars;
}