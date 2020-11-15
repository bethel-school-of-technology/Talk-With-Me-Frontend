
import React, { Component } from 'react';


class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }

    onTitleChange = (event) => {
        this.setState({ title: event.target.value })
    }

    onBodyChange = (event) => {
        this.setState({ body: event.target.value });
    }

    onPostCreate = () => {
        fetch('http://localhost:3000/Posts/create_post', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body
            })
        })
            .then(response => response.json())
            .then(post => {
                if (post) {
                    //this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            });
    }
    //Need to create a Route Change for the Cancel button.

    render() {
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
                                    onChange={this.onTitleChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="body">Post Something</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="body"
                                    id="body"
                                    onChange={this.onBodyChange} />
                            </div>
                        </fieldset>
                        <div className="creatPost">
                            <input
                                onClick={this.onPostCreate} 
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Create!"
                            />
                            <input
                                onClick={'group page'}
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
}


export default CreatePost;