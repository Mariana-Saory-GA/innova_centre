import React, {Component} from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import './../../Styles/ProfilePicture.css';

class ProfilePicChanger extends Component {
    constructor(props){
        super(props);
        this.state={
            visible: false
        }
    }

    showModal = () => {
    this.setState({
        visible: true,
    });
  };

  handleOk = e => {
      console.log(e);
      this.setState({
          visible: false,
      });
  }; 
  
  handleCancel = e => {
      console.log(e);
      this.setState({
          visible: false,
      });
  };
  
  render(){
        return(
            <div className="content-pictureProfChanger">
                <Button type="text"  onClick={this.showModal} className="btnChange">
                    Cambiar imagen
                </Button>
                <Modal title="Cambiar avatar" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    
                </Modal>
            </div>
        )
    }
}

export default ProfilePicChanger;