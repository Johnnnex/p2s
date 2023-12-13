import { Poppins, Space_Grotesk } from 'next/font/google'

const sGrotesk = Space_Grotesk({ 
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700"]
})

const QuickRegistration = () => {
  return (
    // <section className={`${sGrotesk.className} registration-area`}>
    //     <div className="container w-[90%] mx-auto">
    //         <div className="row align-items-end">
    //             <div className="col-lg-5">
    //                 <div className="section-title text-left text-white">
    //                     <h2 className="text-white">
    //                         Quick Signup 
    //                     </h2>
    //                     <p className={sGrotesk.className}>
    //                         Swift Onboarding: Seamlessly Join Partnering to Succeed in Seconds
    //                     </p>
    //                 </div>
    //             </div>
    //             <div className="offset-lg-3 col-lg-4 col-md-6">
    //                 <div className="course-form-section">
    //                     <h3 className="text-white">Courses for Free</h3>
    //                     <p className={`text-white ${sGrotesk.className}`}>It is high time for learning</p>
    //                     <form className="course-form-area contact-page-form course-form text-right" id="myForm" action="mail.html" method="post">
    //                         <div className="form-group col-md-12">
    //                             <input type="text" className="form-control" id="name" name="name" placeholder="Name"/>
    //                         </div>
    //                         <div className="form-group col-md-12">
    //                             <input type="text" className="form-control" id="subject" name="subject" placeholder="Phone Number"/>
    //                         </div>
    //                         <div className="form-group col-md-12">
    //                             <input type="email" className="form-control" id="email" name="email" placeholder="Email Address"/>
    //                         </div>
    //                         <div className="col-lg-12 text-center">
    //                             <button className="btn text-uppercase">Submit</button>
    //                         </div>
    //                     </form>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </section>
    <></>
  )
}

export default QuickRegistration
