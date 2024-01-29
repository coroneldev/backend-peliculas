import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MovieService {

  constructor(
    @InjectRepository(Movie) private readonly movieRepository: Repository<Movie>,
  ) {}

  create(createMovieDto: CreateMovieDto) {
    const movie: Movie = new Movie();
    movie.Title     = createMovieDto.Title;     //"Guardians of the Galaxy Vol. 2",
    movie.Year      = createMovieDto.Year;      //"2017",
    movie.Rated     = createMovieDto.Rated;     //"PG-13",
    movie.Released  = createMovieDto.Released;  //"05 May 2017",
    movie.Runtime   = createMovieDto.Runtime;   //"136 min",
    movie.Genre     = createMovieDto.Genre;     //"Action, Adventure, Comedy",
    movie.Director  = createMovieDto.Director;  //"James Gunn",
    movie.Writer    = createMovieDto.Writer;    //"James Gunn, Dan Abnett, Andy Lanning",
    movie.Actors    = createMovieDto.Actors;    //"Chris Pratt, Zoe Saldana, Dave Bautista",
    movie.Plot      = createMovieDto.Plot;      //"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
    movie.Language  = createMovieDto.Language;  //"English",
    movie.Country   = createMovieDto.Country;   //"United States",
    movie.Awards    = createMovieDto.Awards;    //"Nominated for 1 Oscar. 15 wins & 60 nominations total",
    movie.Poster    = createMovieDto.Poster;    //"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    return this.movieRepository.save(movie);
    //return 'This action adds a new movie';
  }

  findAll() {
    return this.movieRepository.find();
    //return `This action returns all movie`;
  }

  findOne(id: number) {
    return this.movieRepository.findOne({where: {Id: id} });
    //return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return this.movieRepository.delete(id);
    //return `This action removes a #${id} movie`;
  }
}
