

const App = () => {
    // Custom Brand Colors
    const primaryPurple = "#5a2ca5"; // Deeper, more professional purple
    const lightPurple = "#f9f8ff";
    const darkPurple = "#1e0e3d";
    const whatsappGreen = "#25D366";
    const alertRed = "#dc3545";

    // Contact Details
    const waNumber = "27786115645";
    const phoneDisplay = "078 611 5645";
    const waMessage = encodeURIComponent("Hi VCR Diesel Tech, I would like to book a mobile diagnostic scan (R350) and check for add-on services (R50).");
    const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

    return (
        <div style={{ fontFamily: "'Inter', sans-serif", scrollBehavior: 'smooth', color: '#333' }}>

            {/* --- FLOATING WHATSAPP ACTION --- */}
            <a href={waLink}
               target="_blank"
               rel="noopener noreferrer"
               className="floating-wa shadow-lg d-flex align-items-center justify-content-center text-decoration-none"
               style={{ backgroundColor: whatsappGreen }}>
                <i className="bi bi-whatsapp text-white fs-2"></i>
            </a>

            {/* --- TOP ANNOUNCEMENT BAR --- */}
            <div className="bg-dark text-white py-2 sticky-top border-bottom border-secondary" style={{ zIndex: 1100, fontSize: '0.8rem' }}>
                <div className="container d-flex justify-content-between align-items-center">
                    <span><i className="bi bi-geo-alt me-1"></i> Serving Gauteng & Limpopo</span>
                    <a href={`tel:${waNumber}`} className="text-white text-decoration-none fw-bold">
                        <i className="bi bi-telephone-fill me-1"></i> {phoneDisplay}
                    </a>
                </div>
            </div>

            {/* --- NAVBAR --- */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <div className="fw-black text-white px-3 py-1 rounded-2 me-2" style={{ backgroundColor: primaryPurple, letterSpacing: '-1px' }}>VCR</div>
                        <div className="d-flex flex-column" style={{ lineHeight: '1' }}>
                            <span className="fw-bold small tracking-widest text-dark">DIESEL TECH</span>
                            <span className="text-muted" style={{ fontSize: '0.6rem' }}>MOBILE DIAGNOSTICS</span>
                        </div>
                    </a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center fw-semibold">
                            <li className="nav-item mx-lg-3"><a className="nav-link" href="#home">Home</a></li>
                            <li className="nav-item mx-lg-3"><a className="nav-link" href="#services">Services</a></li>
                            <li className="nav-item mx-lg-3"><a className="nav-link" href="#pricing">Pricing</a></li>
                            <li className="nav-item ms-lg-3">
                                <a className="btn btn-dark rounded-pill px-4 btn-sm" href={waLink}>Book Now</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main>
                {/* --- HERO SECTION --- */}
                <header id="home" className="py-5 border-bottom" style={{ backgroundColor: lightPurple }}>
                    <div className="container py-lg-5">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-7">
                                <h1 className="display-4 fw-black mb-3" style={{ color: darkPurple }}>
                                    Precision Mobile <span style={{ color: primaryPurple }}>Diagnostics.</span>
                                </h1>
                                <p className="lead text-muted mb-4 border-start border-4 ps-3" style={{ borderColor: primaryPurple }}>
                                    Expert electronic scanning and fault clearing at your location.
                                    <span className="d-block mt-2 fw-bold text-dark">
                                        <i className="bi bi-info-circle-fill text-primary me-2"></i>
                                        Specializing in identification & resets. We do not perform mechanical repairs.
                                    </span>
                                </p>
                                <div className="d-flex flex-wrap gap-3">
                                    <a href={waLink} className="btn btn-primary btn-lg px-5 py-3 rounded-2 shadow-sm fw-bold" style={{ backgroundColor: primaryPurple, border: 'none' }}>
                                        Request Scan Session
                                    </a>
                                    <div className="d-flex align-items-center px-3 border rounded-2 bg-white">
                                        <span className="small text-muted">Service Location: <strong className="text-dark">Germiston / Venda</strong></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <img
                                    src="/assets/main.jfif"
                                    alt="Professional Scanner Tool"
                                    className="img-fluid rounded-4 shadow-lg border border-white border-5"
                                />
                            </div>
                        </div>
                    </div>
                </header>

                {/* --- SCOPE DISCLAIMER --- */}
                <div className="py-3 border-bottom bg-white">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 text-center">
                                <span className="badge rounded-pill px-3 py-2 mb-2" style={{ backgroundColor: '#fff0f0', color: alertRed, border: `1px solid ${alertRed}` }}>
                                    <i className="bi bi-exclamation-triangle-fill me-2"></i> IMPORTANT SERVICE SCOPE
                                </span>
                                <p className="small text-muted mb-0">
                                    Our mobile unit provides <strong>Electronic Diagnosis & Clearing only</strong>. We provide the data you need to understand your vehicle's health, but we do not supply parts or perform physical mechanical labor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SERVICES --- */}
                <section id="services" className="py-5">
                    <div className="container py-5">
                        <div className="row mb-5 align-items-end">
                            <div className="col-md-6">
                                <h6 className="text-uppercase fw-bold small ls-2" style={{ color: primaryPurple }}>Expertise</h6>
                                <h2 className="fw-black" style={{ color: darkPurple }}>Electronic Services</h2>
                            </div>
                            <div className="col-md-6 text-md-end">
                                <p className="text-muted small mb-0">R50 per add-on after R350 base diagnosis</p>
                            </div>
                        </div>

                        <div className="row g-4">
                            {[
                                { title: "Comprehensive Scan", icon: "bi-search", desc: "Full system health report" },
                                { title: "Oil Life Reset", icon: "bi-droplet", desc: "Post-service interval reset" },
                                { title: "Brake Service Reset", icon: "bi-stop-circle", desc: "Electronic parking brake resets" },
                                { title: "Fault Code Clearing", icon: "bi-trash3", desc: "Erase stored error logs" },
                                { title: "Battery Coding", icon: "bi-battery-charging", desc: "Register new battery installs" }
                            ].map((service, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="card h-100 border-0 shadow-sm p-4 hover-lift border-start border-4" style={{ borderLeftColor: primaryPurple + ' !important' }}>
                                        <div className="mb-3 text-primary"><i className={`bi ${service.icon} fs-4`}></i></div>
                                        <h5 className="fw-bold mb-2">{service.title}</h5>
                                        <p className="small text-muted mb-0">{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- PRICING --- */}
                <section id="pricing" className="py-5" style={{ backgroundColor: '#111' }}>
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 text-white pe-lg-5 mb-5 mb-lg-0">
                                <h2 className="fw-black display-5 mb-4">Flat Rate <br/>Pricing.</h2>
                                <p className="text-white-50 lead">We believe in transparent, upfront costs with no hidden fees for our mobile diagnostic sessions.</p>
                                <hr className="border-secondary my-4" style={{ width: '50px' }} />
                                <div className="d-flex align-items-center mb-3">
                                    <i className="bi bi-check-lg text-success me-3"></i>
                                    <span>Home or Office Call-outs</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-check-lg text-success me-3"></i>
                                    <span>Detailed Electronic Reports</span>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="card border-0 rounded-4 overflow-hidden shadow-lg">
                                    <div className="card-body p-5">
                                        <h6 className="text-uppercase fw-bold text-muted small">Standard Session</h6>
                                        <div className="d-flex align-items-center mb-4">
                                            <span className="display-4 fw-black">R350</span>
                                            <span className="ms-2 text-muted">/ Base Fee</span>
                                        </div>
                                        <div className="p-3 rounded-3 mb-4" style={{ backgroundColor: lightPurple }}>
                                            <p className="small mb-0 text-dark"><strong>Includes:</strong> Full System Scan + Primary Fault Identification.</p>
                                        </div>
                                        <div className="mb-5">
                                            <div className="d-flex justify-content-between border-bottom py-2">
                                                <span className="small">Additional Resets</span>
                                                <span className="fw-bold">+R50</span>
                                            </div>
                                            <div className="d-flex justify-content-between border-bottom py-2">
                                                <span className="small">Additional Codings</span>
                                                <span className="fw-bold">+R50</span>
                                            </div>
                                        </div>
                                        <a href={waLink} className="btn btn-dark w-100 py-3 fw-bold rounded-2">
                                            Book Mobile Visit
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- POLICY --- */}
                <section className="py-5 bg-white">
                    <div className="container">
                        <div className="row g-4">
                            {[
                                { title: "Mobile Service", desc: "Travel fees apply based on distance from Germiston base.", icon: "bi-map" },
                                { title: "Diagnosis Only", desc: "Our tools identify faults. We do not offer mechanical repair labor.", icon: "bi-info-square" },
                                { title: "Payment", desc: "Payment is required via Cash or Instant EFT upon session completion.", icon: "bi-cash-stack" }
                            ].map((p, i) => (
                                <div className="col-md-4 text-center px-4" key={i}>
                                    <i className={`bi ${p.icon} fs-2 mb-3 d-block`} style={{ color: primaryPurple }}></i>
                                    <h6 className="fw-bold">{p.title}</h6>
                                    <p className="small text-muted">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-5 bg-white border-top">
                <div className="container text-center">
                    <p className="small text-muted mb-0">&copy; 2026 VCR Diesel Tech. All Rights Reserved.</p>
                    <p className="fw-bold mt-2" style={{ fontSize: '0.6rem', letterSpacing: '2px', color: '#bbb' }}>
                        PLATFORM BY <span className="text-dark">LUVHIMBIDIGITALS</span>
                    </p>
                </div>
            </footer>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
                
                .fw-black { font-weight: 900; }
                .ls-2 { letter-spacing: 2px; }
                
                .floating-wa {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    z-index: 2000;
                    transition: all 0.3s ease;
                }
                .floating-wa:hover { transform: scale(1.1); box-shadow: 0 15px 30px rgba(37, 211, 102, 0.4); }

                .hover-lift {
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .hover-lift:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.05) !important;
                }

                @media (max-width: 768px) {
                    .display-4 { font-size: 2.5rem; }
                    .floating-wa { bottom: 20px; right: 20px; width: 50px; height: 50px; }
                }
            `}</style>
        </div>
    );
};

export default App;