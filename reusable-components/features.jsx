import { Poppins, Space_Grotesk } from 'next/font/google'

const sGrotesk = Space_Grotesk({ 
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700"]
})

const Features = () => {
  return (
    <section className={`${sGrotesk.className} text-[16px] other-feature-area`}>
        <div className="container">
            <div className="feature-inner row">
                <div className="col-lg-12">
                    <div className="section-title text-left">
                        <h2>
                        
                            Features <br />
                            Accessible to Students
                        </h2>
                        <p>
                            Explore the Excellence: Unveiling the Distinctive Features of Partnering To Succeed
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="other-feature-item">
                        <i className="ti-key"></i>
                        <h4>Lifetime Access</h4>
                        <div>
                        <p>
                            No Expiry, No Rush: Enjoy unrestricted access to course materials, ensuring that your learning journey is guided by your schedule and pace.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt--160">
                    <div className="other-feature-item">
                        <i className="ti-files"></i>
                        <h4>Source File Included</h4>
                        <div>
                        <p>
                            Dive Deeper: Gain hands-on experience and amplify your learning with access to source files, fostering a practical understanding of technology.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt--260">
                    <div className="other-feature-item">
                        <i className="ti-medall-alt"></i>
                        <h4>Student Membership</h4>
                        <div>
                        <p>
                            Members-Only Benefits: Elevate your learning experience with our student membership, offering exclusive perks, additional resources, and priority access to new content.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="other-feature-item">
                        <i className="ti-briefcase"></i>
                        <h4>12+ Courses</h4>
                        <div>
                        <p>
                            Tailored to You: Choose from a diverse selection of over 12 courses, covering a broad spectrum of technology topics suitable for learners of all backgrounds.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt--160">
                    <div className="other-feature-item">
                        <i className="ti-crown"></i>
                        <h4>Expert Mentors</h4>
                        <div>
                        <p>
                            Personalized Guidance: Navigate the tech landscape with confidence, guided by industry experts offering insights, advice, and real-world experience.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt--260">
                    <div className="other-feature-item">
                        <i className="ti-headphone-alt"></i>
                        <h4>Live Supports</h4>
                        <div>
                        <p>
                            Instant Assistance: Connect with our support team in real-time, ensuring that your queries are addressed promptly, fostering a seamless learning experience.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features
