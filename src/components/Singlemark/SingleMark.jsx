import "./singlemark.css";


export default function SingleBookmark(props){

    console.log(props.bookmark.post_title)
    return (
        <>
            <p className="bookmark-text p-4">{props.bookmark.post_title}</p>
        </>

    );
}
