import "./SinglePost.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';






export default function SinglePost(props) {

    // const [time, settime] = useState(0);
    // console.log(time);
    
    // function handleTimetoread() {
    //     settime((prevTime) => prevTime + props.postdata.time_to_read);
    //   }


    return (
        <>
            <div className=" col mt-3">
                <Card className="border-0">
                    <Card.Img variant="top" src={props.postdata.post_picture} className="rounded" />
                    <Card.Body>
                        <div className="row">
                            <div className="col-8">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                    <Image src={props.postdata.profile_picture} alt="Description" width="60" height="60" roundedCircle />
                                    </div>
                                    <div className="col-6">
                                    <div className="row flex-column">
                                        <div className="col justify-content-start">
                                            <h5 className="profile-name">{props.postdata.profile_name}</h5>
                                        </div>
                                        <div className="col justify-content-start">
                                            <p className="date">Mar, 15</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div className="col-4 d-flex justify-content-end">
                                    <p>{props.postdata.time_to_read} min read</p><i className="fa-sharp fa-solid fa-bookmark" onClick={()=>props.onAddBookmark(props.postdata)}></i>
                            </div>
                        </div>
                        <Card.Title>{props.postdata.post_title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button  onClick={()=>props.onButtonClick(props.postdata.time_to_read)}>Mark as Read</Button>
                        
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}