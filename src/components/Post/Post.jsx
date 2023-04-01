
import "./Post.css"
import SinglePost from "../Singlepost/SinglePost";
import React, { useEffect, useState } from "react";
import SingleBookmark from "../Singlemark/SingleMark";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Post() {

    const [postdatas, setpostdata] = useState([]);
    const [count, setCount] = useState(0);
    const [bookmarks, setbookmark] = useState([]);
    const [bookmarkcounter, setbookmarkcounter] = useState(0);

    function onButtonClick(timetread) {
        setCount(count + timetread);
        toast.success('Marked as Read !', {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    function onAddBookmark(newbookmark) {
        const existingElement = bookmarks.find((bookmarks) => bookmarks.id === newbookmark.id);
        if (!existingElement) {
            setbookmark(prevElements => [...prevElements, newbookmark]);
            setbookmarkcounter(bookmarkcounter + 1);
            toast.success('Bookmark Added !', {
                position: toast.POSITION.TOP_RIGHT
            });
          }
          else{
            toast.error('Bookmark Already Added !', {
                position: toast.POSITION.TOP_RIGHT
            });
          }
    }

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
                            postdatas.map(postdata => <SinglePost key={postdata.id} postdata={postdata} onButtonClick={onButtonClick} onAddBookmark={onAddBookmark} />)
                        }
                    </div>
                    <div className="col-5 mics-container">
                        <div className="row">
                            <div className="col-12 p-4">
                                <span>Spent time on read{count}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p>{bookmarkcounter}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 p-4">
                               {
                                bookmarks.map(bookmark => <SingleBookmark key={bookmark.id} bookmark={bookmark}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>

        </>
    );
};

