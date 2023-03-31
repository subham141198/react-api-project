import "./SinglePost.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import { useEffect, useState } from "react";





export default function SinglePost(props) {

    const [time, settime] = useState(0);
    console.log(time);
    


   
    return (
        <>
            <div className=" col mt-3">
                <Card>
                    <Card.Img variant="top" src={props.postdata.post_picture} />
                    <Card.Body>
                        <div className="row">
                            <div className="col-6 d-flex justify-content-start align-items-center">
                                <div className="row align-items-center">
                                    <div className="col-3 justify-content-start">
                                    <Image src={props.postdata.profile_picture} alt="Description" width="50" height="50" roundedCircle />
                                    </div>
                                    <div className="col-9">
                                    <div className="row flex-column">
                                        <div className="col justify-content-start">
                                            <h5>{props.postdata.profile_name}</h5>
                                        </div>
                                        <div className="col justify-content-start">
                                            <p>Mar, 15</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                    <p>{props.postdata.time_to_read} min read</p><i className="fa-sharp fa-solid fa-bookmark"></i>
                            </div>
                        </div>
                        <Card.Title>{props.postdata.post_title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <a href="#markasread" onClick={(()=>{settime(time+props.postdata.time_to_read)})}>Mark as Read</a>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}