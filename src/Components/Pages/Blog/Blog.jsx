import React from 'react';
import '../../Styles/Blog.css';
import InstagramEmbed from 'react-instagram-embed';

function Blog (){
    return(
        <>
        <section className="content-blog">
            <div className="content-blogTitle">
                <h1> Posts del día </h1>
            </div>
            <div className="content-instagram">
            <InstagramEmbed
                url='https://www.instagram.com/p/CMm1gRNB_Ys/'
                clientAccessToken='442093927099752|bcfd374f177b5d5761b79475f87abb78'
                maxWidth={300}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            />
            </div>
        </section>
        </>
    );
}

export default Blog