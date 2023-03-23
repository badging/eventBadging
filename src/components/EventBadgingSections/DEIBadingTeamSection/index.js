import './DEIBadingTeamSection.css';

export default function DEIBadingTeamSection() {
    return (
        <section className='badging-team-section'>
            <div className='badging-team-section__header'>
                <h2>DEI Badging Team</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra elementum, morbi metus et, 
                    fusce molestie. Etiam placerat varius tristique nulla urna amet. Dignissim amet auctor 
                    eget dui orci. 
                </p>
            </div>
            <div className='badging-team-members'>
                <div>
                    <h3>Reviwers</h3>
                    <ul>
                        <li>Ruth Ikegah</li>
                        <li>Neofytos Kolokotronis</li>
                        <li>Anita Ihuman</li>
                        <li>Dustin Mitchell	</li>
                        <li>Vinodh Ilangovan</li>
                        <li>Matt Germonprez	</li>
                        <li>Molly de Blanc</li>
                        <li>Gema Rodriguez</li>
                        <li>Dhruv Sachdev</li>
                    </ul>
                </div>
                <div>
                    <h3>Maintainers</h3>
                    <ul>
                        <li>Aastha Bist	</li>
                        <li>Matt Snell</li>
                    </ul>
                </div>
                <div>
                    <h3>Moderators</h3>
                    <ul>
                        <li>Xiaoya Esther</li>
                    </ul>
                </div>
            </div>

        </section>
    );
}