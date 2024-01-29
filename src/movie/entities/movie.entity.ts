import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Movie {

    @PrimaryGeneratedColumn()
    Id: number;
    @Column({ type: 'varchar', length: 250 })
    Title: string; //"Guardians of the Galaxy Vol. 2",
    @Column({ type: 'int'})
    Year: number; //"2017",
    @Column({ type: 'varchar', length: 30 })
    Rated: string; //"PG-13",
    @Column({ type: 'varchar', length: 30 })
    Released: string;//"05 May 2017",
    @Column({ type: 'varchar', length: 30 })
    Runtime: string; //"136 min",
    @Column({ type: 'varchar', length: 250 })
    Genre: string; //"Action, Adventure, Comedy",
    @Column({ type: 'varchar', length: 250 })
    Director: string; //"James Gunn",
    @Column({ type: 'varchar', length: 250 })
    Writer: string; //"James Gunn, Dan Abnett, Andy Lanning",
    @Column({ type: 'varchar', length: 250 })
    Actors: string; //"Chris Pratt, Zoe Saldana, Dave Bautista",
    @Column({ type: 'varchar', length: 500 })
    Plot: string; //"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
    @Column({ type: 'varchar', length: 250 })
    Language: string; //"English",
    @Column({ type: 'varchar', length: 250 })
    Country: string; //"United States",
    @Column({ type: 'varchar', length: 250 })
    Awards: string; //"Nominated for 1 Oscar. 15 wins & 60 nominations total",
    @Column({ type: 'varchar', length: 500 })
    Poster: string; //"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",

}
