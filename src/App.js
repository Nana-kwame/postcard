import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

class App extends Component {
  state = {
    title: null,
    edit: null,
    content: null,
    color: null,
    save: null

  }
  componentDidMount() {
    let saveFile = JSON.parse(localStorage.getItem('postcard'));

    if (saveFile) {
      const { color, title, content, edit, save } = saveFile;
      console.log('[SAVE FILE]:: ', saveFile);
      this.setState({ title, content, edit, color, save });

      console.log(color, title, content)

    } else {
      this.setState({ title: 'A very long title ', color: '', edit: false, save: false })
    }
  }

  //** Function to update edit state prop*/
  //** Using an arrow function to set the scope globally and not internal to the function */ 

  toggleEditState = () => {
    const { edit } = this.state;
    this.setState({
      edit: !edit
    })
  }

  //** Function to update title state prop */
  editTitle = (title) => {
    this.setState({ title })
  }


  //** Function update content */ 
  editContent = (content) => {
    this.setState({ content })
  }

  //** Function to update color */
  updateColor = (color) => {
    this.setState({ color });
  }

  onSaveClicked = () => {
    const { save, color, title, content, edit } = this.state;

    const saveFile = { color, title, content, edit }

    localStorage.setItem('postcard', JSON.stringify(saveFile));

    this.setState({ save: !save });
  }



  render() {
    const { edit } = this.state;

    return (

      <div className='App'>
        <header className='App-header'>
          <h4>
            Nana's Postcard
        </h4>

          <p>
            &#128515;
        </p>
        </header>

        <div className='App-body'>
          <Card
            edit={edit}
            toggleEdit={this.toggleEditState}
            editTitle={this.editTitle}
            title={this.state.title}
            onContentChange={this.editContent}
            color={this.state.color}
            save={this.state.save}
            content={this.state.content}
          />
        </div>

        <div className='App-footer'>
          <div className='App-footer--colorRow'>
            <div onClick={() => this.updateColor('#5C2C94')} style={{ backgroundColor: '#5C2C94' }} className='App-footer--colorRow__color'>

            </div>

            <div onClick={() => this.updateColor('#9C2424')} style={{ backgroundColor: '#9C2424' }} className='App-footer--colorRow__color'>

            </div>
            <div onClick={() => this.updateColor('#047CFC')} style={{ backgroundColor: '#047CFC' }} className='App-footer--colorRow__color'>

            </div>
            <div onClick={() => this.updateColor('#FCFC94')} style={{ backgroundColor: '#FCFC94' }} className='App-footer--colorRow__color'>

            </div>
          </div>

          <div onClick={() => this.onSaveClicked()} className='App-footer--saveBtn'>
            <p className='App-footer--saveBtn__text'>
              {this.state.save ? 'Edit' : 'Save'}

            </p>
          </div>
        </div>

      </div>
    );
  }
}

export default App;




