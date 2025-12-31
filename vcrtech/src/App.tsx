import React from 'react';

const App = () => {
    const primaryPurple = "#6f42c1";
    const lightPurple = "#f8f5ff";
    const darkPurple = "#4b2889";
    const whatsappGreen = "#25D366";

    const waNumber = "27786115645";
    const phoneDisplay = "078 611 5645";
    const waMessage = encodeURIComponent("Hi VCR Diesel Tech, I need a mobile diagnostic scan (R350 per session). Please assist.");
    const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

    return (
        <div style={{ fontFamily: "'Poppins', sans-serif", scrollBehavior: 'smooth' }}>

            {/* --- MOBILE QUICK-CALL BAR --- */}
            <div className="d-lg-none bg-dark text-white text-center py-2 sticky-top" style={{ zIndex: 1100, fontSize: '0.85rem' }}>
                <a href={`tel:${waNumber}`} className="text-white text-decoration-none fw-bold">
                    📞 Tap to Call: {phoneDisplay}
                </a>
            </div>

            {/* --- NAVBAR --- */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-2">
                <div className="container">
                    <a className="navbar-brand fw-black d-flex align-items-center" href="/" style={{ color: primaryPurple }}>
                        <span className="text-white px-2 rounded me-2" style={{ backgroundColor: primaryPurple }}>VCR</span>
                        <span className="tracking-widest" style={{ fontSize: '0.9rem' }}>DIESEL TECH</span>
                    </a>
                    <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center pt-3 pt-lg-0">
                            <li className="nav-item w-100 text-center"><a className="nav-link" href="#home">Home</a></li>
                            <li className="nav-item w-100 text-center"><a className="nav-link" href="#services">Services</a></li>
                            <li className="nav-item w-100 text-center"><a className="nav-link" href="#pricing">Pricing</a></li>
                            <li className="nav-item w-100 mt-2 mt-lg-0">
                                <a className="btn text-white rounded-pill px-4 ms-lg-3 fw-bold shadow-sm w-100"
                                   href={waLink} target="_blank" rel="noopener noreferrer"
                                   style={{ backgroundColor: whatsappGreen, border: 'none' }}>
                                    WhatsApp Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main id="main-content">
                {/* --- HERO SECTION --- */}
                <header id="home" className="py-4 py-lg-5" style={{ backgroundColor: lightPurple }}>
                    <div className="container py-lg-5">
                        <div className="row align-items-center g-4 flex-column-reverse flex-lg-row">
                            <div className="col-lg-6 text-center text-lg-start">
                                <div className="d-inline-flex align-items-center badge mb-3 px-3 py-2 fw-bold text-uppercase" style={{ backgroundColor: primaryPurple }}>
                                    📍 Mobile Diagnostics: Gauteng & Limpopo
                                </div>
                                <h1 className="display-4 fw-black mb-3" style={{ color: darkPurple }}>Expert Mobile Diagnostics & Car Scanning.</h1>
                                <p className="lead mb-4 text-muted fs-5">Professional vehicle fault clearing at your doorstep. Based in <strong>Germiston</strong>, visiting <strong>Venda</strong> during June & December.</p>

                                <div className="d-grid d-lg-flex gap-2">
                                    <a href={waLink} className="btn btn-lg px-lg-5 py-3 fw-bold rounded-pill text-white shadow" style={{ backgroundColor: primaryPurple }}>Book a Scan</a>
                                    <a href={`tel:${waNumber}`} className="btn btn-outline-dark btn-lg px-lg-5 py-3 rounded-pill d-lg-none">Call Now</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative px-2">
                                    <img
                                        src="/assets/main.jfif"
                                        alt="VCR Diesel Tech Diagnostic Tools"
                                        className="img-fluid rounded-4 shadow-lg border border-white border-4"
                                        style={{ aspectRatio: '4/3', objectFit: 'cover', width: '100%', maxHeight: '350px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* --- LOCATION ALERT BAR --- */}
                <aside className="bg-warning py-3 text-center">
                    <div className="container fw-bold">
                        🚀 Venda (Limpopo) Bookings Now Open for June & December!
                    </div>
                </aside>

                {/* --- SERVICES SECTION --- */}
                <section id="services" className="py-5 bg-white">
                    <div className="container py-3">
                        <header className="text-center mb-5">
                            <h2 className="fw-bold h1" style={{ color: darkPurple }}>Our Services</h2>
                            <div className="mx-auto mt-2" style={{ width: '50px', height: '4px', backgroundColor: primaryPurple }}></div>
                        </header>

                        <div className="row g-3">
                            {[
                                { title: "Full Car Scan", icon: "💻" },
                                { title: "Oil Reset", icon: "💧" },
                                { title: "Brake Reset", icon: "🛑" },
                                { title: "Fault Clearing", icon: "🛠️" },
                                { title: "Diesel Specialist", icon: "⚙️" },
                                { title: "Calibration", icon: "📈" }
                            ].map((service, index) => (
                                <article className="col-6 col-md-4" key={index}>
                                    <div className="card h-100 border-0 shadow-sm p-3 text-center hover-card">
                                        <div className="fs-2 mb-2" aria-hidden="true">{service.icon}</div>
                                        <h3 className="fw-bold h6 mb-0" style={{ color: primaryPurple }}>{service.title}</h3>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- PRICING SECTION --- */}
                <section id="pricing" className="py-5" style={{ backgroundColor: lightPurple }}>
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-10 col-lg-7">
                                <article className="card border-0 shadow-lg rounded-4 overflow-hidden">
                                    <header className="py-4 text-white" style={{ backgroundColor: primaryPurple }}>
                                        <h2 className="fw-bold h4 mb-0">Full Diagnostic Package</h2>
                                    </header>
                                    <div className="card-body p-4 p-lg-5">
                                        <p className="display-4 fw-black mb-1" style={{ color: darkPurple }}>R350</p>
                                        <p className="text-muted mb-4 fw-bold small text-uppercase tracking-widest">Per Session</p>
                                        <p className="mb-4 lead">Mobile Call-Out Included</p>
                                        <ul className="list-unstyled text-start mb-5 mx-auto" style={{ maxWidth: '350px' }}>
                                            <li className="mb-2 fs-5">✅ Full Electronic System Scan</li>
                                            <li className="mb-2 fs-5">✅ Fault Code Identification & Clearing</li>
                                            <li className="mb-2 fs-5">✅ Oil Service & Brake Resets</li>
                                            <li className="mb-2 fs-5">✅ Detailed Digital Fault Report</li>
                                        </ul>
                                        <a href={waLink} className="btn btn-dark w-100 py-3 fw-bold rounded-pill btn-lg shadow-sm">
                                            Book via WhatsApp
                                        </a>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SERVICE AREAS SECTION --- */}
                <section className="py-5 bg-white border-top">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-md-6 text-center text-md-start">
                                <h2 className="fw-bold h3" style={{ color: darkPurple }}>We Come To You</h2>
                                <p className="text-muted">Save on towing costs. We bring the workshop to your home or office.</p>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-group list-group-flush shadow-sm rounded-4 overflow-hidden">
                                    <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                                        <strong>Gauteng (Germiston & Surrounds)</strong>
                                        <span className="badge rounded-pill bg-success">Available Now</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                                        <strong>Limpopo (Venda & Surrounds)</strong>
                                        <span className="badge rounded-pill" style={{backgroundColor: primaryPurple}}>Seasonal (June & Dec)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* --- FOOTER --- */}
            <footer className="py-5 text-center bg-dark text-white-50">
                <div className="container">
                    <h2 className="text-white fw-bold h5 mb-2">VCR DIESEL TECH</h2>
                    <p className="small mb-4">Precision diagnostics for petrol and diesel engines.</p>
                    <hr className="my-4 opacity-25 border-white mx-auto" style={{maxWidth: '200px'}} />
                    <p className="m-0 small">&copy; 2026 VCR Diesel Tech. All Rights Reserved.</p>
                    <p className="mt-2 mb-0" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                        Developed by <span className="text-white fw-bold text-uppercase">Luvhimbi Digitals</span>
                    </p>
                </div>
            </footer>

            <style>{`
                .fw-black { font-weight: 900; }
                .tracking-widest { letter-spacing: 0.1em; }
                .hover-card { transition: all 0.3s ease; border: 1px solid transparent !important; }
                .hover-card:hover { 
                    transform: translateY(-5px); 
                    box-shadow: 0 10px 20px rgba(111, 66, 193, 0.1) !important;
                    border-color: #6f42c1 !important;
                }
                @media (max-width: 768px) {
                    .display-4 { font-size: 2rem; }
                    .navbar-brand { font-size: 1rem; }
                }
            `}</style>
        </div>
    );
};

export default App;