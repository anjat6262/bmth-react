import React from 'react';
import './App.css'; 
import Discography from './Discography'; 

// --- 🛑 PERHATIAN: Impor Gambar di sini (Pastikan nama file dan pathnya benar) ---
// Asumsikan Anda menaruh gambar di folder 'src/assets/'
import oliImage from './assets/oli.jpg'; 
import leeImage from './assets/lee.jpg'; 
import mattKImage from './assets/mattk.jpg'; 
import mattNImage from './assets/mattn.jpg'; 
// -----------------------------------------------------------------------------

// Data anggota band
const members = [
    { name: "Oliver Sykes", role: "Vocals", image: oliImage }, 
    { name: "Lee Malia", role: "Guitar", image: leeImage },
    { name: "Matt Kean", role: "Bass", image: mattKImage },
    { name: "Mat Nicholls", role: "Drums", image: mattNImage },
];

// --- Komponen Anak (MemberCard) ---
const MemberCard = ({ name, role, image }) => {
    return (
        <div className="member-card">
            {/* Menggunakan properti 'image' untuk menampilkan gambar */}
            <img 
                src={image} 
                alt={name} 
                className="member-photo" 
            />
            <h3 className="card-title">{name}</h3>
            <p className="card-role">{role}</p>
        </div>
    );
};


// --- Komponen Utama (App) ---
function App() {
    return (
        <div className="bmth-app">
            {/* 1. Navbar */}
            <nav className="navbar">
                <span className="logo">BMTH <span className="neon-text">REACT</span></span>
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#members">Members</a>
                    <a href="#discography">Discography</a> 
                </div>
            </nav>

            {/* 2. Hero Section */}
            <header id="home" className="hero-section">
                <h1 className="hero-title">POST HUMAN: NeX GEn</h1>
                <p className="hero-subtitle">THIS IS THE NEW NORMAL</p>
                <button className="btn-neon">Listen Now</button>
            </header>

            {/* 3. Members Section */}
            <section id="members" className="members-section">
                <h2>The Crew</h2>
                <div className="member-grid">
                    {members.map((member) => (
                        <MemberCard 
                            key={member.name} 
                            name={member.name} 
                            role={member.role} 
                            image={member.image} 
                        />
                    ))}
                </div>
            </section>
            
            {/* 4. Discography Section */}
            <Discography /> 

            {/* 5. Footer */}
            <footer className="footer">
                <p>&copy; 2024 BMTH React Site.</p>
            </footer>
        </div>
    );
}

export default App;