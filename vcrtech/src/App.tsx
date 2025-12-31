import React from 'react';

const App = () => {
    // Custom Brand Colors
    const primaryPurple = "#6f42c1";
    const lightPurple = "#f8f5ff";
    const darkPurple = "#4b2889";
    const whatsappGreen = "#25D366";

    // Contact Details
    const waNumber = "27786115645";
    const phoneDisplay = "078 611 5645";
    const waMessage = encodeURIComponent("Hi VCR Diesel Tech, I would like to book a diagnostic scan (R350 per session). Please assist.");
    const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

    return (
        <div style={{ fontFamily: "'Poppins', sans-serif", scrollBehavior: 'smooth' }}>

            {/* --- MOBILE QUICK-CALL BAR (Visible only on mobile) --- */}
            <div className="d-lg-none bg-dark text-white text-center py-2 sticky-top" style={{ zIndex: 1100, fontSize: '0.85rem' }}>
                <a href={`tel:${waNumber}`} className="text-white text-decoration-none fw-bold">
                    📞 Tap to Call: {phoneDisplay}
                </a>
            </div>

            {/* --- NAVBAR --- */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-2">
                <div className="container">
                    <a className="navbar-brand fw-black d-flex align-items-center" href="#" style={{ color: primaryPurple }}>
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

            {/* --- HERO SECTION --- */}
            <header id="home" className="py-4 py-lg-5" style={{ backgroundColor: lightPurple }}>
                <div className="container py-lg-5">
                    <div className="row align-items-center g-4 flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 text-center text-lg-start">
                            <div className="d-inline-flex align-items-center badge mb-3 px-3 py-2 fw-bold text-uppercase" style={{ backgroundColor: primaryPurple }}>
                                📍 Gauteng & Limpopo
                            </div>
                            <h1 className="display-4 fw-black mb-3" style={{ color: darkPurple }}>Expert Mobile Diagnostics.</h1>
                            <p className="lead mb-4 text-muted fs-5">Professional vehicle fault clearing at your doorstep. Based in <strong>Gauteng</strong>, and visiting <strong>Venda (Limpopo)</strong> during June & December.</p>

                            <div className="d-grid d-lg-flex gap-2">
                                <a href={waLink} className="btn btn-lg px-lg-5 py-3 fw-bold rounded-pill text-white shadow" style={{ backgroundColor: primaryPurple }}>Book a Scan</a>
                                <a href={`tel:${waNumber}`} className="btn btn-outline-dark btn-lg px-lg-5 py-3 rounded-pill d-lg-none">Call Now</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative px-2">
                                <div className="rounded-4 shadow-lg overflow-hidden border border-white border-4 bg-secondary d-flex align-items-center justify-content-center text-white"
                                     style={{ aspectRatio: '4/3', maxHeight: '350px', backgroundImage: 'url("/assets/main.jfif")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    {! "/assets/main.jfif" && <span className="p-4 text-center small">[ Diagnosis Machine Photo ]</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- LOCATION ALERT BAR --- */}
            <div className="bg-warning py-3 text-center">
                <div className="container fw-bold">
                    🚀 Special Service: Venda (Limpopo) Bookings Open for June & December!
                </div>
            </div>

            {/* --- SERVICES SECTION --- */}
            <section id="services" className="py-5 bg-white">
                <div className="container py-3">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold h1" style={{ color: darkPurple }}>Services</h2>
                        <div className="mx-auto mt-2" style={{ width: '50px', height: '4px', backgroundColor: primaryPurple }}></div>
                    </div>

                    <div className="row g-3">
                        {[
                            { title: "Full Car Scan", icon: "💻" },
                            { title: "Oil Reset", icon: "💧" },
                            { title: "Brake Reset", icon: "🛑" },
                            { title: "Fault Clearing", icon: "🛠️" },
                            { title: "Diesel Specialist", icon: "⚙️" },
                            { title: "Calibration", icon: "📈" }
                        ].map((service, index) => (
                            <div className="col-6 col-md-4" key={index}>
                                <div className="card h-100 border-0 shadow-sm p-3 text-center hover-card">
                                    <div className="fs-2 mb-2">{service.icon}</div>
                                    <h6 className="fw-bold mb-0" style={{ color: primaryPurple }}>{service.title}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PRICING SECTION --- */}
            <section id="pricing" className="py-5" style={{ backgroundColor: lightPurple }}>
                <div className="container">
                    <div className="row justify-content-center text-center">
                        {/* WIDENED CARD: col-lg-7 instead of col-lg-4 */}
                        <div className="col-12 col-md-10 col-lg-7">
                            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                                <div className="py-4 text-white" style={{ backgroundColor: primaryPurple }}>
                                    <h4 className="fw-bold mb-0">Full Diagnostic Package</h4>
                                </div>
                                <div className="card-body p-4 p-lg-5">
                                    <div className="display-4 fw-black mb-1" style={{ color: darkPurple }}>R350</div>
                                    <p className="text-muted mb-4 fw-bold small text-uppercase tracking-widest">Per Session</p>
                                    <p className="mb-4 lead">Standard Mobile Call-Out Included</p>
                                    <ul className="list-unstyled text-start mb-5 mx-auto" style={{ maxWidth: '350px' }}>
                                        <li className="mb-2 fs-5">✅ Full Electronic System Scan</li>
                                        <li className="mb-2 fs-5">✅ Fault Code Identification & Clearing</li>
                                        <li className="mb-2 fs-5">✅ Oil Service & Brake Resets</li>
                                        <li className="mb-2 fs-5">✅ Detailed Digital Fault Report</li>
                                    </ul>
                                    <a href={waLink} className="btn btn-dark w-100 py-3 fw-bold rounded-pill btn-lg shadow-sm">
                                        Book Session via WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SERVICE AREAS SECTION --- */}
            <section className="py-5 bg-white border-top">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <h3 className="fw-bold" style={{ color: darkPurple }}>Where to find us:</h3>
                            <p className="text-muted">We provide mobile services at your preferred location.</p>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-group list-group-flush shadow-sm rounded-4 overflow-hidden">
                                <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                                    <strong>Gauteng</strong>
                                    <span className="badge rounded-pill bg-success">Year Round</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                                    <strong>Venda (Limpopo)</strong>
                                    <span className="badge rounded-pill" style={{backgroundColor: primaryPurple}}>June & Dec Only</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="py-5 text-center bg-dark text-white-50">
                <div className="container">
                    <h5 className="text-white fw-bold mb-2">VCR DIESEL TECH</h5>
                    <p className="small mb-4">Precision diagnostics for petrol and diesel engines.</p>
                    <p className="small m-0">Gauteng(germiston) | Limpopo(venda)</p>
                    <hr className="my-4 opacity-25 border-white mx-auto" style={{maxWidth: '200px'}} />
                    <p className="m-0 small text-white-50">&copy; 2026 VCR Diesel Tech. All Rights Reserved.</p>
                    {/* Developer Credit */}
                    <p className="mt-2 mb-0" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                        Developed by <span className="text-white fw-bold">LUVHIMBIDIGITALS</span>
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