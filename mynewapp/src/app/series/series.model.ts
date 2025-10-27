export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    poster: string;
    web: string;

    constructor(id: number, name: string, channel: string, seasons: number, description: string, poster: string, web: string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.poster = poster;
        this.web = web;
    }
}