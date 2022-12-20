import React from 'react';
import './style.css'

const Profile = () => {
    return (
      <div class="profile_skills">
            <div class="container">
                <div class="profile">
                    <h2 class="profile-title"><span>My </span>Profile</h2>
                    <ul class="profile-list">
                        <li class="profile-item">
                            <span>Name</span>
                            Malaz Arbab
                        </li>
                        <li class="profile-item">
                            <span>Birthday</span>
                            18/10/1996
                        </li>
                        <li class="profile-item">
                            <span>Address</span>
                            Khartoum
                        </li>
                        <li class="profile-item">
                            <span>Phone</span>
                            +249 968 923 996
                        </li>
                        <li class="profile-item">
                            <span>Email</span>
                            malazarbab870@gmail.com
                        </li>
                        <li class="profile-item">
                            <span>Website</span>
                            <a href="https://my-portfolio-gilt-ten-26.vercel.app/" class="web">my website</a>
                        </li>
                    </ul>
                </div>
                
                <div class="skills">
                    <h2 class="skills-title">Some <span>skills</span></h2>
                    <p class="skills-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p>
                    <div class="bar">
                        <span class="title">Bootstrap</span>
                        <span class="perc">100%</span>
                        <div class="parent">
                            <span class="sp1"></span>
                        </div>
                    </div>
                    
                    <div class="bar">
                        <span class="title">CSS3</span>
                        <span class="perc">90%</span>
                        <div class="parent">
                            <span class="sp2"></span>
                        </div>
                    </div>
                    
                    <div class="bar">
                        <span class="title">React</span>
                        <span class="perc">70%</span>
                        <div class="parent">
                            <span class="sp3"></span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Profile;