package com.janajit.movies;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "movies")  //Document is an annotation provided by Spring data project. It is used to identify a domain object, which is persisted to MongoDB. So you can use it to map a Java class into a collection inside MongoDB.
@Data     // Comes from lombok project. Takes care of all the getters and setters in this bean.
@AllArgsConstructor  // Comes from lombok project. Takes all the private variables as arguments for the constructor
@NoArgsConstructor   // Comes from lombok project. Takes no arguments for the constructor.
public class Movie {

    @Id
    private ObjectId id;
    private String imdbId;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private String poster;
    private List<String> genres;
    private List<String> backdrops;

    @DocumentReference // This annotation will help only to store the ids of the review for a movie but not the whole review body;
    private List<Review> reviewIds;

}
