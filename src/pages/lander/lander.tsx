import './lander.css'
import UserHeroData from '../../assets/lander/landerData.json'
// interface SocialHandles{
//     linkedin? : URL,
//     github?: URL,
//     email?: string,
// }
interface HeroData {
    name: string,
    role: string
    description: string,
    socials: {
        linkedin?: string,
        github?: string,
        email?: string
    }
}
// const heroJSON: string = ;
const data: HeroData = UserHeroData as HeroData;

export default function Lander(){
    return(
       <div id="home" className="main-container">
            <div className="lander-container">
                <div className = "lander-image">
                    {/* <img className= "lander-profile-pic" src={profilePic}></img> */}
                </div>
                <div className='lander-intro-container'>
                    <div className='lander-namaste-container'>Namaste!</div>
                    <div className='lander-intro-text'>
                        <div className='lander-intro-name'>
                            I am {data.name}
                        </div>
                        <div className='lander-intro-role'>
                            {data.role}
                        </div>
                        <div className='lander-intro-sub'>
                            {data.description}
                        </div>
                        <div className='lander-intro-socials'>
                            <div className='github-container'></div>
                            <div className='linkedin-container'></div>
                            <div className='email-container'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lander-btn-container-wrapper'>
                <div className='lander-btn-container'>
                    <div className='lander-btn'>
                        View PortFolio
                    </div>
                    <div className='lander-btn'>
                        View Resume
                    </div>
                </div>
            </div>
       </div>
    )
}