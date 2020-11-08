import React from 'react';
import Post from './Post';

//This controls the Posts for PostsPage. It has different tachyon styling

const GroupPosts = () => {
    return (


        <div class="flex flex-column" className='tr'>
            {/*profile picture(if needed), name, and Group name */}
            <div className='tC bg-black-05 dib br3 pa3 ma3 shadow-5'>
                <p>
                    Profile information
                </p>
            </div>
            {/* Posts. Will need a unique ID for posts */}
            <div className='tr w-50 bg-black-05 dib br4 pa3 ma4 shadow-5 ' >
                <p>
                    {/* Post.id */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer at ultrices risus, et interdum orci. Vivamus 
                    ullamcorper porta nisi sed malesuada. Vivamus iaculis 
                    est sed augue placerat, fringilla volutpat massa vehicula. 
                    Pellentesque ac molestie lorem, quis mollis sapien. Nam 
                    commodo enim vitae ex ullamcorper, sit amet consectetur 
                    leo convallis. Curabitur elementum nunc nec dui maximus laoreet. 
            </p>

            </div>
        </div>








    );
}


// each post will need a link to the groups page and the the post. alternatively, it can just create a larger post window that will 
// show the name of the user who posted it, and the name of the group that the person belongs to

export default GroupPosts;