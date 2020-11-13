import React from 'react';


class CreateGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onDescriptionChange = (event) => {
        this.setState({ description: event.target.value });
    }

    onSubmitCreate = () => {
        fetch('http://localhost:3000/groups/create_group', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                members: 1,
                likes: 0
            })
        })
            .then(response => response.json())
            .then(group => {
                if (group) {
                    //this.props.loadUser(user);
                    console.log('this is what Im working on' + group.name);
                    this.props.onCreateGroup(group);

                }
            });
    }

    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-40-l mw shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="create_group" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Create a Group</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={this.onNameChange}
                                    required
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="description">Description</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="description"
                                    id="description"
                                    onChange={this.onDescriptionChange}
                                    required
                                />
                            </div>
                        </fieldset>
                        <div className="createGroup">
                            <input
                                onClick={this.onSubmitCreate}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Create!"
                            />
                            <input
                                onClick={() => this.props.onRouteChange('home')}

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

export default CreateGroup;