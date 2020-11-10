import React, { useState, useEffect } from 'react';


const CreatePost = () => {

    const [title, setTitle] = useState('');

    const [body, setBody] = useState('');

    const onTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const onBodyChange = (event) => {
        setBody(event.target.value);
    }

    // onSubmitCreate = () => {
    //     fetch('http://localhost:3000/CreateGroup', {
    //         method: 'post',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             email: this.state.email,
    //             password: this.state.password,
    //             name: this.state.name
    //         })
    //     })
    //         .then(response => response.json())
    //         .then(user => {
    //             if (user) {
    //                 this.props.loadUser(user);
    //                 this.props.onRouteChage('home');
    //             }
    //         });
    // }


    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-40-l mw shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="create_group" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Create a Post</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="title">Title</label>
                            <input
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="text"
                                name="Title"
                                id="Title"
                                onChange={onTitleChange}
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="body">Post Something</label>
                            <input
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="text"
                                name="body"
                                id="body"
                                onChange={onBodyChange}                            />
                        </div>
                    </fieldset>
                    <div className="creatPost">
                        <input
                            /* onClick={onSubmitCreate} */
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Create!"
                        />
                        <input
                            /* onClick={onSubmitCreate} */
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Cancel"
                        /> 
                    </div>
                </div>
            </main>
        </article>
    );
}


export default CreatePost;