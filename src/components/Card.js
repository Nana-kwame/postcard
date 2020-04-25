import React, { Component } from 'react';
import './Card.css';
import editIcon from './../assets/edit.png'


//** WSYWIG Editor import */
import { Editor } from '@tinymce/tinymce-react';
import Input from './Input';

class Card extends Component {
    state = {}

    handleInputChange = (text) => {
        const { editTitle } = this.props;

        editTitle(text);
    }

    handleEditorChange = (content, editor) => {
        const { onContentChange } = this.props;
        console.log('[CONTENT CHANGED]:: ', content);

        onContentChange(content);
    }

    render() {
        const { title, content, image, color, edit, toggleEdit, save } = this.props
        return (
            <div className='Card'
                style={{
                    backgroundColor: color,
                    color: color === '' ? 'black' : 'white'
                }}
            >

                {save ?

                    <React.Fragment>
                        <div className='Card-header'>
                            <div className='Card-header__title--displa'>
                                <h4 className='Card-header__title--display__text'>
                                    {title}
                                </h4>
                            </div>


                        </div>

                        <div dangerouslySetInnerHTML={{ __html: content }}>
                            {/* {content} */}
                        </div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <div className='Card-header'>

                            <div className='Card-header__title'>
                                {edit ?
                                    <div>
                                        <Input placeholder='Your title...' onChange={(e) => this.handleInputChange(e.target.value)} />
                                        <div onClick={toggleEdit} className='Card-header__title--display__btn'>


                                            <p className='Card-header__title--display__btn--save'>
                                                Save
                                </p>
                                        </div>
                                    </div>

                                    :
                                    <div className='Card-header__title--display'>
                                        <h4 className='Card-header__title--display__text'>
                                            {title}
                                        </h4>

                                        <abbr title='Edit postcard title'>
                                            <div onClick={toggleEdit} className='Card-header__title--display__btn'>
                                                <img src={editIcon} className='Card-header__title--display__btn--img' />
                                            </div>
                                        </abbr>

                                    </div>

                                }

                            </div>
                        </div>
                        <div>
                            <Editor
                                onEditorChange={this.handleEditorChange}
                                initialValue={content ? content : "<p>Put your heartfelt message here</p>"}
                                init={{

                                    menubar: true,
                                    toolbar: 'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
                                    height: '300',
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],

                                }}
                            />
                        </div>

                    </React.Fragment>}


            </div>);
    }
}

export default Card;