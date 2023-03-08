export { getBackupAlbums, getBackupVideos };

const BACKUP_VIDEO = [
  {
    img: "https://i.ytimg.com/vi/LVTQe47sUi4/hqdefault.jpg",
    descripticon: "",
    videoId: "LVTQe47sUi4",
    title: "Así fue el Movistar Arena 2022 en Argentina! 🔥💥",
  },
  {
    img: "https://i.ytimg.com/vi/y-CDAc-178w/hqdefault.jpg",
    descripticon: "shorts #cdn #flan.",
    videoId: "y-CDAc-178w",
    title:
      "Este año estuvo picante!Gracias LATAM por estos shows! Se viene un 2023 a full Lámina Once #shorts",
  },
  {
    img: "https://i.ytimg.com/vi/DRpYRvL6ZBo/hqdefault.jpg",
    descripticon: "",
    videoId: "DRpYRvL6ZBo",
    title:
      "Así arrancó el show del Movistar Arena en Buenos Aires. Entradas agotadas!🇦🇷#cdn #shorts #flan",
  },
  {
    img: "https://i.ytimg.com/vi/NkzhJzUj9yQ/hqdefault.jpg",
    descripticon: "",
    videoId: "NkzhJzUj9yQ",
    title: "Muchas gracias Mexico!! Sigue la gira!",
  },
  {
    img: "https://i.ytimg.com/vi/4JO0dFIlTiE/hqdefault.jpg",
    descripticon: "",
    videoId: "4JO0dFIlTiE",
    title: "Así fue la grabación del videoclip de Rorschach #LaminaOnce #MakingOf #Back",
  },
  {
    img: "https://i.ytimg.com/vi/PIass-1rgkI/hqdefault.jpg",
    descripticon:
      "cuartetodenos #láminaonce #rorschach Nuevo álbum #LáminaOnce acá: links.altafonte.com/6rk0wye Créditos Director: Charly ...",
    videoId: "PIass-1rgkI",
    title: "Cuarteto de Nos | Rorschach (Videoclip oficial)",
  },
  {
    img: "https://i.ytimg.com/vi/QZoNqt7j7n8/hqdefault.jpg",
    descripticon: "cuartetodenos #laminaonce #sesión.",
    videoId: "QZoNqt7j7n8",
    title: "Cuarteto de Nos | Sesión Lámina Once",
  },
  {
    img: "https://i.ytimg.com/vi/wfh8hdXhSkc/hqdefault.jpg",
    descripticon: "cuartetodenos #sesión #laminaonce.",
    videoId: "wfh8hdXhSkc",
    title: "Cuarteto de Nos | Sesión #5 - Roberto",
  },
];

const BACKUP_ALBUMS = [
  {
    shareUrl: "https://open.spotify.com/album/0rre7z2j7c3zbxasPRhshi?si=FQiXkLmpQlyVX9CyqKjEtw",
    img: "https://i.scdn.co/image/ab67616d00001e029af1f855364ac9ebc7ea24f3",
    name: "Lámina Once",
    year: 2022,
    tracks: 8,
  },
  {
    shareUrl: "https://open.spotify.com/album/6CLlWqMKd95lyqfHKBzSM4?si=uyrmjXy1SNeJKNvyIeg9KA",
    img: "https://i.scdn.co/image/ab67616d00001e0262e0d016c13d30c2e75a3ac8",
    name: "Jueves",
    year: 2019,
    tracks: 9,
  },
  {
    shareUrl: "https://open.spotify.com/album/6Jp05umHWHkUhR6V6TnonS?si=7LcGkr3lTaGtdWNVTQRoNQ",
    img: "https://i.scdn.co/image/ab67616d00001e022188d9b499f902a088c4d984",
    name: "Apocalipsis Zombi",
    year: 2017,
    tracks: 10,
  },
  {
    shareUrl: "https://open.spotify.com/album/1ffZ5xExmmOr15QQzYrXyf?si=mzC4hSinRX6NLr15mwjtIg",
    img: "https://i.scdn.co/image/ab67616d00001e029f5248c5be0af950ac81900c",
    name: "Habla Tu Espejo",
    year: 2014,
    tracks: 10,
  },
  {
    shareUrl: "https://open.spotify.com/album/4X6PQwYWxtGGtKjAfX6wa6?si=4RNC9EsKRfmRZ3VLQle_nQ",
    img: "https://i.scdn.co/image/ab67616d00001e02e32b600cf149063d811341e3",
    name: "Porfiado",
    year: 2012,
    tracks: 12,
  },
  {
    shareUrl: "https://open.spotify.com/album/4Ay02WMMtEKaySj1mtPTga?si=rpdSf6VsRZOne8FZH6SGKQ",
    img: "https://i.scdn.co/image/ab67616d00001e02d95902c0e53bc949e0197ec2",
    name: "Bipolar",
    year: 2009,
    tracks: 12,
  },
  {
    shareUrl: "https://open.spotify.com/album/6evTdl2CjuBbkiCaXOKUKW?si=8poVl6CmQtSGS2jmNpXn-Q",
    img: "https://i.scdn.co/image/ab67616d00001e021cf84979a6b7d69db35773ec",
    name: "Raro",
    year: 2006,
    tracks: 12,
  },
  {
    shareUrl: "https://open.spotify.com/album/4fNaCXMkt7UWlUf7W8ncFz?si=2vX87qsaQSGfZKR7JLtZPA",
    img: "https://i.scdn.co/image/ab67616d00001e0232bf5209279de9db51c51738",
    name: "Cortamambo",
    year: 2000,
    tracks: 14,
  },
  {
    shareUrl: "https://open.spotify.com/album/3BQcHexO7ax9cofAYeNwTo?si=dt7pWIHeR7GlkwqYrQsZ9g",
    img: "https://i.scdn.co/image/ab67616d00001e027870c0edb1eb64e0ff3955fa",
    name: "Revista ¡Ésta!",
    year: 1998,
    tracks: 12,
  },
  {
    shareUrl: "https://open.spotify.com/album/3xbz47G6HXJnh7xB1tzekc?si=GOkw4theQ9OYSWrWic63oQ",
    img: "https://i.scdn.co/image/ab67616d00001e02220d1d18d518f47c74726ef3",
    name: "El Tren Bala",
    year: 1996,
    tracks: 18,
  },
  {
    shareUrl: "https://open.spotify.com/album/5I6NoY1Bon3fgdreGQJjPZ?si=0LQzxGIST3SXi1exwKSVbw",
    img: "https://i.scdn.co/image/ab67616d00001e0207b25d51152a7ace7fbabde1",
    name: "Barranca Abajo",
    year: 1995,
    tracks: 16,
  },
  {
    shareUrl: "https://open.spotify.com/album/29OvepmbxMRRmrZCwREeHx?si=taoaY8ZlRZCVOg_gnjfIGg",
    img: "https://i.scdn.co/image/ab67616d00001e02203781eb89a3a9f2b6529445",
    name: "Otra navidad en las trincheras",
    year: 1994,
    tracks: 18,
  },
  {
    shareUrl: "https://open.spotify.com/album/2ifnB89PpCOFh12OZVVeHO?si=z4eaa8QjQfqJJ6Cc77b1eQ",
    img: "https://i.scdn.co/image/ab67616d00001e02920222e3bd234382decbfd26",
    name: "Canciones del Corazón",
    year: 1991,
    tracks: 10,
  },
  {
    shareUrl: "https://open.spotify.com/album/2nYkOzI6plzhX7StDOlMOA?si=ttL9-MJlTyyeY1vmjetsoQ",
    img: "https://i.scdn.co/image/ab67616d00001e02f31f6abcc12d883d9bc37981",
    name: "Emilio García",
    year: 1988,
    tracks: 12,
  },
  {
    shareUrl: "https://open.spotify.com/album/30k1g1RNzspPOJ7gSnQawf?si=a2vc2Q8qQ8-BhM4mW3Z_ig",
    img: "https://i.scdn.co/image/ab67616d00001e02de6bdd7f43f58f1ec5e9bc3a",
    name: "Soy una Arveja",
    year: 1987,
    tracks: 14,
  },
  {
    shareUrl: "https://open.spotify.com/album/1yf1JecN6PiQqab6umYHPj?si=jHyNXVa5Qk-6uFYC_PnYcw",
    img: "https://i.scdn.co/image/ab67616d00001e02c0b8c5f5d790b086b829af8a",
    name: "Alberto Wolf y el Cuarteto de Nos",
    year: 1985,
    tracks: 12,
  },
];

const getBackupAlbums = () => {
  let albumsHtml = BACKUP_ALBUMS.map(
    (album) => `
        <div class="bg-gray-300 rounded-lg p-4">
            <a href="${album.shareUrl}" target="_blank">
                <img class="mb-4 rounded-lg" src="${album.img}"
                    alt="Portada ${album.name}">
                <div class="text-center">
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">${album.name}</h3>
                    <p class="text-base font-medium">
                        Año: ${album.year} <br>
                        Canciones: ${album.tracks}
                    </p>
                </div>
            </a>
        </div>`,
  ).join("");

  return albumsHtml;
};

const getBackupVideos = () => {
  let videosHtml = BACKUP_VIDEO.map(
    (video) => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.img}" alt="${video.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
              <a href="https://youtube.com/watch?v=${video.videoId}" target="_blank">
                  <h3 class="text-sm text-gray-700">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      ${video.title}
                  </h3>
                </a>
            </div>
        </div>`,
  ).join("");

  return videosHtml;
};
