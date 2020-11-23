import React from 'react';



//This controls the Posts for PostsPage. It has different tachyon styling

const GroupPosts = ({title, body}) => {
    return (
        // title and date next to/ above the body

        <div class="flex flex-column" className='tr'>
            {/*profile picture(if needed), name, and Group name */}
            <div className='tC bg-black-05 dib br3 pa3 ma3 shadow-5'>
                <p>
                    Profile information
                </p>
            </div>
            {/* Posts. Will need a unique ID for posts */}
            <div className='tr w-50 bg-black-05 dib br4 pa2 ma4 shadow-5 ' >
                <h3 className='tl' class="flex">{title}</h3>
                <p>
             {body}
            </p>

            </div>
        </div>








    );
}


// each post will need a link to the groups page and the the post. alternatively, it can just create a larger post window that will 
// show the name of the user who posted it, and the name of the group that the person belongs to

export default GroupPosts;