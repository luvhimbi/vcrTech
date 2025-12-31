const App = () => {
    // Custom Brand Colors
    const primaryPurple = "#6f42c1";
    const lightPurple = "#f8f5ff";
    const darkPurple = "#4b2889";
    const whatsappGreen = "#25D366";

    // Contact Details
    const waNumber = "27786115645";
    const phoneDisplay = "078 611 5645";
    const waMessage = encodeURIComponent("Hi VCR Diesel Tech, I would like to book a mobile diagnostic scan (R350 per session).");
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
                                    📍 Gauteng & Limpopo
                                </div>
                                <h1 className="display-4 fw-black mb-3" style={{ color: darkPurple }}>Mobile Car Diagnostics & Scanning.</h1>
                                <p className="lead mb-4 text-muted fs-5">Professional vehicle fault clearing at your doorstep. Based in <strong>Dikweipi 2 via 510, Germiston</strong>, visiting <strong>Venda</strong> during June & December.</p>

                                <div className="d-grid d-lg-flex gap-2">
                                    <a href={waLink} className="btn btn-lg px-lg-5 py-3 fw-bold rounded-pill text-white shadow" style={{ backgroundColor: primaryPurple }}>Book a Scan</a>
                                    <a href={`tel:${waNumber}`} className="btn btn-outline-dark btn-lg px-lg-5 py-3 rounded-pill d-lg-none">Call Now</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative px-2 text-center">
                                    <img
                                        src="/assets/main.jfif"
                                        alt="Car Diagnostic Scanning"
                                        className="img-fluid rounded-4 shadow-lg border border-white border-4"
                                        style={{ aspectRatio: '4/3', objectFit: 'cover', width: '100%', maxHeight: '350px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* --- LOCATION ALERT BAR --- */}
                <div className="bg-warning py-3 text-center shadow-sm">
                    <div className="container fw-bold">
                        🚀 Venda (Limpopo) Bookings Open for June & December!
                    </div>
                </div>

                {/* --- SERVICES SECTION --- */}
                <section id="services" className="py-5 bg-white">
                    <div className="container py-3">
                        <div className="text-center mb-5">
                            <h2 className="fw-bold h1" style={{ color: darkPurple }}>Our Services</h2>
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
                            <div className="col-12 col-md-10 col-lg-7">
                                <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                                    <div className="py-4 text-white" style={{ backgroundColor: primaryPurple }}>
                                        <h4 className="fw-bold mb-0">Full Diagnostic Package</h4>
                                    </div>
                                    <div className="card-body p-4 p-lg-5">
                                        <div className="display-4 fw-black mb-1" style={{ color: darkPurple }}>R350</div>
                                        <p className="text-muted mb-4 fw-bold small text-uppercase tracking-widest">Per Session</p>
                                        <p className="mb-4 lead">Mobile Service Available (See T&Cs)</p>
                                        <ul className="list-unstyled text-start mb-5 mx-auto" style={{ maxWidth: '350px' }}>
                                            <li className="mb-2 fs-5">✅ Full System Scan</li>
                                            <li className="mb-2 fs-5">✅ Fault Code Clearing</li>
                                            <li className="mb-2 fs-5 :">✅ Oil & Brake Resets</li>
                                            <li className="mb-2 fs-5">✅ Detailed Fault Report</li>
                                        </ul>
                                        <a href={waLink} className="btn btn-dark w-100 py-3 fw-bold rounded-pill btn-lg shadow">
                                            Book via WhatsApp
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
                                <h3 className="fw-bold" style={{ color: darkPurple }}>Our Locations:</h3>
                                <p className="text-muted">We have a base in Gauteng and provide seasonal mobile support in Limpopo.</p>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-group list-group-flush shadow-sm rounded-4 overflow-hidden">
                                    <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                                        <div>
                                            <strong>Gauteng (Germiston)</strong><br/>
                                            <small className="text-muted">Dikweipi 2 via 510</small>
                                        </div>
                                        <span className="badge rounded-pill bg-success">Available Now</span>
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

                {/* --- TERMS & CONDITIONS SECTION --- */}
                <section id="terms" className="py-5" style={{ backgroundColor: "#f1f1f1" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="p-4 bg-white rounded shadow-sm">
                                    <h4 className="fw-bold mb-3" style={{ color: darkPurple }}>Terms & Conditions</h4>
                                    <ul className="small text-muted" style={{ lineHeight: '1.6' }}>
                                        <li><strong>Service Fee:</strong> The R350 fee covers one full diagnostic session and fault clearing.</li>
                                        <li><strong>Call-Out Policy:</strong> We come to you; however, a travel fee may apply depending on your distance from our base in Dikweipi 2 via 510.</li>
                                        <li><strong>Bookings:</strong> Mobile service is subject to availability and must be confirmed via WhatsApp or Phone call.</li>
                                        <li><strong>Diagnosis Only:</strong> Our service is for electronic diagnostics and resetting. Physical mechanical repairs are charged separately if applicable.</li>
                                        <li><strong>Payment:</strong> Payment is due immediately upon completion of the diagnostic session.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* --- FOOTER --- */}
            <footer className="py-5 text-center bg-dark text-white-50">
                <div className="container">
                    <h5 className="text-white fw-bold mb-2">VCR DIESEL TECH</h5>
                    <p className="small mb-4">Precision diagnostics for petrol and diesel engines.</p>
                    <hr className="my-4 opacity-25 border-white mx-auto" style={{maxWidth: '200px'}} />
                    <p className="m-0 small">&copy; 2026 VCR Diesel Tech. All Rights Reserved.</p>
                    <p className="mt-3 mb-0" style={{ fontSize: '0.7rem', letterSpacing: '1.5px', color: '#aaa' }}>
                        DEVELOPED BY <span className="text-white fw-bold">LUVHIMBIDIGITALS</span>
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