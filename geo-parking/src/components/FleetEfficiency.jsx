import React from 'react';
import '../styles/FleetEfficiency.css';

const FleetEfficiency = () => {
    return (
        <section className="fleet-efficiency">
            <div className="container">
                <h2>Maximize Your Robotaxi Fleet Efficiency</h2>
                <div className="content">
                    <div className="image">
                        <img src="src/assets/serviceImage3.jpg" alt="Parking lot" />
                    </div>
                    <div className="text">
                        <h3>Optimize Operations with GeoParking's Advanced Solutions</h3>
                        <p>
                            GeoParking Technologies provides a B2B technology platform that accelerates the mass adoption and increases the efficiency of Robotaxi fleets. Our solution offers real-time information about the location, availability, and cost of eAV parking at special Robotaxi-only parking sites across the U.S., Canada, and internationally.
                        </p>
                        <ul>
                            <li>Real-time API communicates parking availability.</li>
                            <li>Parking lots strategically located to reduce non-revenue generating miles.</li>
                            <li>Service hubs for inspection, cleaning, and zero-carbon charging.</li>
                        </ul>
                        <a href="#learn-more" className="cta-button">Learn More →</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FleetEfficiency;
