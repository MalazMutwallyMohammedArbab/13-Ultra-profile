import React from 'react';
import { HomeSection, HomeInformation, HomeTitle, HomeInfo, HomeDesc, Span, Btn} from './style.js'

const Home = () => {
    return (
      <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Malaz Arbab</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <Btn>Let's Begin</Btn>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}

export default Home;