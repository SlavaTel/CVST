import React from 'react';
import Header from '../shared/Header'
import Head from 'next/head'



const BaseLayout = (props) => {
  const { className, children, isAuthenticated, user, isSiteOwner, title} = props;
  const headerType = props.headerType || 'default'

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My name is Slava Telyatko and I am an software engineer and freelance developer. I almost one year of experience working on a wide range of technologies and projects like modern mobile and web applications in React. Throughout my career, I have acquired advanced technical knowledge." />
        <meta name= "keywords" content="Telyatko portfolio, Telyatko developer, Telyatko freelance, Telyatko programming"/>
        <meta property="og:title" content="Telyatko Slava - Full Stack developer" />
        <meta property="og:locale" content="en_EU" />
        <meta property="og:url" content="http://localhost:3000"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="My name is Slava Telyatko and I am an software engineer and freelance developer."/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      </Head>
      <div className="layout-container">
        <Header className={`port-nav-${headerType}`}  isAuthenticated={isAuthenticated} user={user} isSiteOwner={isSiteOwner}/> 
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div> 
        </main>
      </div>
    </React.Fragment>
  )
}

export default BaseLayout;

