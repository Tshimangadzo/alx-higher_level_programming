-- Some issue

SELECT tv_shows.title, tv_show_genres.genre_id
from tv_shows, tv_show_genres
WHERE tv_show_genres.show_id = tv_shows.id
ORDER BY tv_shows.title, tv_show_genres.genre_id;