import './GetPosts.css';

function GetPosts(props) {
    const handleClick = () => {
        alert ("You clicked " + props.title)
    }
    
    return (
        <div className='main-container'>
            <div className='container' >
                <div className='json_id'>{props.id}</div>
                <div className='json_userID'>{props.json_userID}</div>
                <div className='upper_section'>
                    <div className='json_title'>{props.title}</div>
                </div>
                <div className='json_body'>{props.body}</div>
                <button className='button' onClick={handleClick}>Click me!</button>
            </div>
        </div> 
    )
}

export default GetPosts;