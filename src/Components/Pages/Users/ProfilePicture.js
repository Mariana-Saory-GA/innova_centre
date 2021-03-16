import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import './../../Styles/ProfilePicture.css';
import ProfilePicChanger from './ProfilePicChanger';

class ProfilePicture extends Component {
  
    render(){
        return(
            <div className="content-pictureProf">
                <Avatar 
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    icon={<UserOutlined/> } 
                    style={{backgroundColor: '#f0c508',}} />
                <ProfilePicChanger/>
            </div>
        )
    }
}

export default ProfilePicture;