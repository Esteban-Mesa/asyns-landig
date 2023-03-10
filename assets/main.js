const contentAlbums = null || document.getElementById("content_albums");
const contentVideos = null || document.getElementById("content_videos");

const titleAlbums = null || document.getElementById("albums_title");
const titleVideos = null || document.getElementById("videos_title");

const pseudoClass =
  "before:content-['⚠️'] before:text-3xl after:content-['⚠️'] after:text-3xl hover:cursor-help";

const API_YOUTUBE =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCHIalb8oZehqMPum16ImmGQ&part=snippet%2Cid&order=date&maxResults=10";
const API_SPOTIFY =
  "https://spotify23.p.rapidapi.com/artist_albums/?id=13JJKrUewC1CJYmIDXQNoH&offset=0&limit=100";

const optionsYoutube = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6406f93a86mshef8138252eb8ca8p1b0d94jsnbf0e8f74e41d",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const optionsSpotify = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6406f93a86mshef8138252eb8ca8p1b0d94jsnbf0e8f74e41d",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};

async function fetchData(urlApi, options) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

async function getVideos() {
  try {
    const videos = await fetchData(API_YOUTUBE, optionsYoutube);
    let view = `${videos.items
      .map(
        (video) => `
    <div class="group relative">
        <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
              <h3 class="text-sm text-gray-700">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  ${video.snippet.title}
              </h3>
            </a>
        </div>
    </div>`,
      )
      .slice(0, 8)
      .join("")}`;
    contentVideos.innerHTML = view;
  } catch (error) {
    console.log(error);

    setBackup(titleVideos);
  }
}

async function getAlbums() {
  try {
    const albums = await fetchData(API_SPOTIFY, optionsSpotify);
    let view = `${albums.data.artist.discography.albums.items
      .map(
        (album) => `
      <div class="bg-gray-300 rounded-lg p-4">
        <a href="${album.releases.items[0].sharingInfo.shareUrl}" target="_blank">
            <img class="w-full mb-4 rounded-lg" src="${album.releases.items[0].coverArt.sources[0].url}"
                alt="Portada ${album.releases.items[0].name}">
            <div class="text-center">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">${album.releases.items[0].name}</h3>
                <p class="text-base font-medium">
                    Año: ${album.releases.items[0].date.year} <br>
                    Canciones: ${album.releases.items[0].tracks.totalCount}
                </p>
            </div>
        </a>
      </div>
      `,
      )
      .slice(0)
      .join("")}`;
    contentAlbums.innerHTML = view;
  } catch (error) {
    console.log(error);

    setBackup(titleAlbums);
  }
}

async function setBackup(element = HTMLElement) {
  const BACKUP = await import("./backup.js");

  let a = element.getAttribute("class");
  element.setAttribute("class", `${a} ${pseudoClass}`);

  let span = document.createElement("span");
  span.setAttribute(
    "class",
    "hidden absolute bottom-10 left-0 w-max h-16 text-sm font-normal " +
      "p-2 bg-slate-100 rounded-md border-solid border-2 border-gray-800",
  );
  span.innerText = "La siguiente información \npuede estar desactualizada";

  element.appendChild(span);

  element.addEventListener("mouseenter", () => span.classList.remove("hidden"));
  element.addEventListener("mouseleave", () => span.classList.add("hidden"));

  if (element == titleAlbums) {
    contentAlbums.innerHTML = BACKUP.getBackupAlbums();
  }
  if (element == titleVideos) {
    contentVideos.innerHTML = BACKUP.getBackupVideos();
  }
}

(async () => {
  getVideos();
  getAlbums();
})();
