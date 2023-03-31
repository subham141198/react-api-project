
import "./Post.css"
import SinglePost from "../Singlepost/SinglePost";
import React, { useEffect, useState } from "react";

export default function Post() {
    
    const [postdatas, setpostdata] = useState([]);
    const [count, setCount] = useState(0);
    function onButtonClick(timetread) {
    
        setCount(count+timetread);
      }
    
      console.log(count)
    useEffect(() => {
        fetch('generated.json').then(Response => Response.json()).then(data => setpostdata(data))
    }, [])



    return (
        <>
            <div className="container-fluid m-5">
                <div className="row">
                    <div className="col-7 post-container">
                        <div className="row row-col-1 mt-3"></div>
                        {
                            postdatas.map(postdata => <SinglePost key={postdata.id} postdata={postdata} onButtonClick={onButtonClick} />)
                        }
                    </div>
                    <div className="col-5 mics-container">
                        <div className="row">
                            <div className="col-12 p-4">
                                <span>Spent time on read{count}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

