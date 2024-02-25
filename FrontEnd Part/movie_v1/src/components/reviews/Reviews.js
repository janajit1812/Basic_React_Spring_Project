import React from 'react'
import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import ReviewForm from '../reviewForm/ReviewForm'
import api from '../../api/axiosConfig'


const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {

    const revText = useRef(); // Use to get the text entered in the textarea of the reviewForm page.
    const params = useParams();
    const movieId = params.movieId; // used to get imdbid that will be passed with the url

    useEffect(() => {
        getMovieData(movieId);
    }, []);

    const addReview= async (e)=>{
        try {
            e.preventDefault();
            const rev=revText.current;
            const response= await api.post('/api/v1/reviews',{reviewBody: rev.value, imdbId: movieId});
            const updatedReview= [...reviews,{body:rev.value}];
            rev.value="";
            setReviews(updatedReview);
            
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Reviews</h2>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt="Nothing to display" />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a review" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        reviews.map((r) => {
                            return(
                                <>
                                    <Row>
                                        <Col>{r?.body}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>                                
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews
