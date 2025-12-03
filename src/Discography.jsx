import React from 'react';
import './App.css';

const albumsData = [
    { title: "POST HUMAN: NeX GEn", year: 2024, track: "Kool-Aid", vibe: "Future Emo/Experimental" },
    { title: "POST HUMAN: Survival Horror", year: 2020, track: "Teardrops", vibe: "Cyberpunk Metal/Industrial" },
    { title: "amo", year: 2019, track: "MANTRA", vibe: "Pop Rock/Electronic" },
    { title: "That's The Spirit", year: 2015, track: "Throne", vibe: "Arena Rock" },
    { title: "Sempiternal", year: 2013, track: "Shadow Moses", vibe: "Iconic Metalcore" },
    { title: "There Is a Hell...", year: 2010, track: "Crucify Me", vibe: "Post-Hardcore/Orchestral" },
];

const Discography = () => {
    return (
        <section id="discography" className="discography-section">
            <h2 className="section-title">Key <span className="neon-text">Discography</span></h2>
            <div className="album-list">
                {albumsData.map((album, index) => (
                    <div className="album-card" key={index}>
                        <div className="album-info">
                            <h3 className="album-title">{album.title}</h3>
                            <p className="album-year">{album.year}</p>
                        </div>
                        <div className="album-details">
                            <p>Key Track: <span className="neon-text">{album.track}</span></p>
                            <p>Vibe: {album.vibe}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <p className="discography-note">
                <span className="neon-text">Note:</span> Many more EPs and early works exist!
            </p>
        </section>
    );
};

export default Discography;