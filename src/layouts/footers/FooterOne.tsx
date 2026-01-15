"use client"
import Link from "next/link"
import { useState } from "react"

const FooterOne = ({ style }: any) => {
   const [email, setEmail] = useState("")

   const handleSubscribe = (e: React.FormEvent) => {
      e.preventDefault()
      // Handle subscription logic here
      console.log("Subscribing:", email)
      setEmail("")
   }

   return (
      <footer className={`footer-one ${style ? "dark-bg" : ""}`}>
         <div className="position-relative z-1">
            <div className="container">
               {/* Top Section - Tagline & Newsletter */}
               <div className="row py-5 border-bottom" style={{ borderColor: style ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}>
                  <div className="col-lg-6 mb-4 mb-lg-0">
                     <h4 className={`fw-bold mb-3 ${style ? "text-white" : ""}`} style={{ color: style ? "" : "#072144" }}>
                        Empowering African businesses with intelligent SaaS solutions.
                     </h4>
                     <p className={`fs-18 ${style ? "text-white-50" : "text-secondary"}`}>
                        Climb with clarity, scale with confidence.
                     </p>
                  </div>
                  <div className="col-lg-6">
                     <div className="newsletter-section">
                        <h5 className={`fw-semibold mb-2 ${style ? "text-white" : ""}`} style={{ color: style ? "" : "#072144" }}>
                           Stay Updated
                        </h5>
                        <p className={`mb-3 ${style ? "text-white-50" : "text-secondary"}`}>
                           Get the latest updates on our products and services.
                        </p>
                        <form onSubmit={handleSubscribe} className="d-flex gap-2">
                           <input
                              type="email"
                              className="form-control"
                              placeholder="Enter your email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              style={{
                                 maxWidth: "300px",
                                 backgroundColor: style ? "rgba(255,255,255,0.1)" : "#f0f5fc",
                                 border: "1px solid " + (style ? "rgba(255,255,255,0.2)" : "#d4e2f4"),
                                 color: style ? "#fff" : "#072144"
                              }}
                           />
                           <button
                              type="submit"
                              className="btn"
                              style={{
                                 backgroundColor: "#0a63b3",
                                 color: "#fff",
                                 padding: "10px 24px"
                              }}
                           >
                              Subscribe
                           </button>
                        </form>
                     </div>
                  </div>
               </div>

               {/* Main Footer Content */}
               <div className="row py-5">
                  {/* Get in Touch */}
                  <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                     <h5 className={`footer-title fw-semibold mb-4 ${style ? "text-white" : ""}`} style={{ color: style ? "" : "#072144" }}>
                        Get in Touch
                     </h5>
                     <div className={`${style ? "text-white-50" : "text-secondary"}`}>
                        <p className="mb-2">
                           <i className="fa-solid fa-location-dot me-2" style={{ color: "#0a63b3" }}></i>
                           PCEA Flats, Jabavu Road
                        </p>
                        <p className="mb-2 ps-4">Starehe District, Nairobi</p>
                        <p className="mb-3 ps-4">P.O Box 39913-00623</p>
                        <p className="mb-2">
                           <i className="fa-solid fa-phone me-2" style={{ color: "#0a63b3" }}></i>
                           <Link href="tel:+254798387784" className={style ? "text-white-50" : "text-secondary"}>
                              +254 798 387 784
                           </Link>
                        </p>
                        <p className="mb-0">
                           <i className="fa-solid fa-envelope me-2" style={{ color: "#0a63b3" }}></i>
                           <Link href="mailto:info@ngazi.co.ke" className={style ? "text-white-50" : "text-secondary"}>
                              info@ngazi.co.ke
                           </Link>
                        </p>
                     </div>
                  </div>

                  {/* Quick Links */}
                  <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                     <h5 className={`footer-title fw-semibold mb-4 ${style ? "text-white" : ""}`} style={{ color: style ? "" : "#072144" }}>
                        Quick Links
                     </h5>
                     <ul className="footer-nav-link style-none">
                        <li className="mb-2"><Link href="/about" className={style ? "text-white-50" : "text-secondary"}>About Us</Link></li>
                        <li className="mb-2"><Link href="/solutions" className={style ? "text-white-50" : "text-secondary"}>Solutions</Link></li>
                        <li className="mb-2"><Link href="/product" className={style ? "text-white-50" : "text-secondary"}>Product</Link></li>
                        <li className="mb-2"><Link href="/careers" className={style ? "text-white-50" : "text-secondary"}>Careers</Link></li>
                        <li className="mb-2"><Link href="/contact" className={style ? "text-white-50" : "text-secondary"}>Contact</Link></li>
                        <li className="mb-2"><Link href="/resources" className={style ? "text-white-50" : "text-secondary"}>Resources</Link></li>
                        <li className="mb-2"><Link href="/partners" className={style ? "text-white-50" : "text-secondary"}>Partners</Link></li>
                        <li><Link href="/certifications" className={style ? "text-white-50" : "text-secondary"}>Certifications & Trust</Link></li>
                     </ul>
                  </div>

                  {/* Legal */}
                  <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                     <h5 className={`footer-title fw-semibold mb-4 ${style ? "text-white" : ""}`} style={{ color: style ? "" : "#072144" }}>
                        Legal
                     </h5>
                     <ul className="footer-nav-link style-none">
                        <li className="mb-2"><Link href="/privacy" className={style ? "text-white-50" : "text-secondary"}>Privacy Policy</Link></li>
                        <li><Link href="/terms" className={style ? "text-white-50" : "text-secondary"}>Terms of Service</Link></li>
                     </ul>
                  </div>

                  {/* Our Solutions */}
                  <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                     <h5 className={`footer-title fw-semibold mb-4 ${style ? "text-white" : ""}`} style={{ color: style ? "" : "#072144" }}>
                        Our Solutions
                     </h5>
                     <ul className="footer-nav-link style-none">
                        <li className="mb-2"><Link href="/stowazi" className={style ? "text-white-50" : "text-secondary"}>Stowazi - Inventory</Link></li>
                        <li className="mb-2"><Link href="/eboard" className={style ? "text-white-50" : "text-secondary"}>Eboard - Meetings</Link></li>
                        <li className="mb-2"><Link href="/contracts" className={style ? "text-white-50" : "text-secondary"}>Contract Management</Link></li>
                        <li><Link href="/api" className={style ? "text-white-50" : "text-secondary"}>API Integrations</Link></li>
                     </ul>
                  </div>

                  {/* Social Links */}
                  <div className="col-lg-2 col-md-6">
                     <h5 className={`footer-title fw-semibold mb-4 ${style ? "text-white" : ""}`} style={{ color: style ? "" : "#072144" }}>
                        Follow Us
                     </h5>
                     <ul className="style-none d-flex align-items-center gap-3 social-icon">
                        <li>
                           <Link href="https://linkedin.com/company/ngazi" target="_blank" aria-label="LinkedIn">
                              <i className="fa-brands fa-linkedin" style={{ fontSize: "24px", color: style ? "#fff" : "#0a63b3" }}></i>
                           </Link>
                        </li>
                        <li>
                           <Link href="https://twitter.com/ngazi_official" target="_blank" aria-label="Twitter">
                              <i className="fa-brands fa-x-twitter" style={{ fontSize: "24px", color: style ? "#fff" : "#0a63b3" }}></i>
                           </Link>
                        </li>
                        <li>
                           <Link href="https://facebook.com/ngazi" target="_blank" aria-label="Facebook">
                              <i className="fa-brands fa-facebook" style={{ fontSize: "24px", color: style ? "#fff" : "#0a63b3" }}></i>
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>

               {/* Bottom Bar */}
               <div className="row py-4 border-top" style={{ borderColor: style ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}>
                  <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                     <p className={`mb-0 ${style ? "text-white-50" : "text-secondary"}`}>
                        © 2026 Ngazi Technologies Ltd. All rights reserved.
                     </p>
                  </div>
                  <div className="col-md-6 text-center text-md-end">
                     <Link href="/privacy" className={`me-3 ${style ? "text-white-50" : "text-secondary"}`}>Privacy</Link>
                     <Link href="/terms" className={style ? "text-white-50" : "text-secondary"}>Terms</Link>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
