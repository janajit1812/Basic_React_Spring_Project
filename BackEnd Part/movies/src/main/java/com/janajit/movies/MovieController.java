package com.janajit.movies;


import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/movies")
@CrossOrigin(origins = "*")

public class MovieController {
    @Autowired // Helps to instantiate the MovieService class.
    private MovieService movieService;
    @GetMapping
    private ResponseEntity<List<Movie>> getAllMovies(){
        return new ResponseEntity<List<Movie>>(movieService.allMovies(),HttpStatus.OK);
    }
//    @GetMapping("/{id}")
//    private ResponseEntity<Optional<Movie>> getMovieById(@PathVariable ObjectId id){
//        return new ResponseEntity<Optional<Movie>>(movieService.findMovieById(id),HttpStatus.OK);
//    }

    @GetMapping("/{imdbId}")
    private ResponseEntity<Optional<Movie>> findMovieById(@PathVariable String imdbId){
        return new ResponseEntity<Optional<Movie>>(movieService.singleMovieByImdbId(imdbId),HttpStatus.OK);
    }

}
