import { Poppins } from 'next/font/google'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ToastImporter } from '@/utils/toast'
import { useData } from "@/context/DataContext"
import HeadComp from '@/layout/HeadComponent'

const poppins = Poppins({ 
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  })

const Dashboard = () => {
  const { isLoggedIn, setIsOnHomepage, sessionItem } = useData()
  const { push } = useRouter()
  useEffect (() => {
    if (isLoggedIn != true) {
      push("/auth")
    }
    else {
      setIsOnHomepage(false)
    }
  }, [])
  return (
    <>
    <HeadComp title="Partnering To Succeed - Profile" />
    <div class={`content-wrapper mt-[7vh] h-[84vh] ${poppins.className}`}>
    {/* <!-- Content Header (Page header) --> */}
    <section class="content-header">
      <h1>
        User Profile
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Examples</a></li>
        <li class="active">User profile</li>
      </ol>
    </section>

    {/* <!-- Main content --> */}
    <section class="content">

      <div class="row">
        <div class="col-md-3">

          {/* <!-- Profile Image -->
        
          <!-- /.box -->

          <!-- About Me Box --> */}
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">About Me</h3>
            </div>
            {/* <!-- /.box-header --> */}
               <div class="box-body" id="myprofile">
              <strong><i class="fa fa-book margin-r-5"></i> Name:</strong>

              <p class="text-muted">
                {sessionItem?.firstname}
          
              </p>

              

              <strong><i class="fa fa-map-marker margin-r-5"></i> Role:</strong>

               <p class="text-muted">
                {sessionItem?.role}
               </p>
              <strong><i class="fa fa-map-marker margin-r-5"></i> About:</strong>

               <p class="text-muted">
                lorem ipsum dolor amet
               </p>

              <strong><i class="fa fa-pencil margin-r-5"></i>Skills:</strong>

              <p className='flex flex-wrap gap-y-1 mt-1'>
                <span class="label label-danger">UI Design</span>
                <span class="label label-success">Coding</span>
                <span class="label label-info">Javascript</span>
                <span class="label label-warning">PHP</span>
                <span class="label label-primary">Node.js</span>
              </p>

              <hr />

              {/* <!-- <strong><i class="fa fa-file-text-o margin-r-5"></i> Notes</strong>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p> --> */}
            </div>
            {/* <!-- /.box-body --> */}
          </div>
          {/* <!-- /.box --> */}
        </div>
        {/* <!-- /.col --> */}
        <div class="col-md-9">
          <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
              {/* <!-- <li class="active"> <a href="#activity" data-toggle="tab">Activity</a></li> -->
              <!-- <li><a href="#timeline" data-toggle="tab">Timeline</a></li> --> */}
              <li><a href="#settings" data-toggle="tab">Settings</a></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane" id="settings">
      <form class="form-horizontal" id="profileform" method="" action="" enctype="multipart/form-data">
                  <div class="form-group">
                    <label htmlFor="inputName" class="col-sm-2 control-label">Name</label>

                    <div class="col-sm-10">
                      <input type="email" class="form-control" name="name" id="inputName" placeholder="Name" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label htmlFor="inputEmail" class="col-sm-2 control-label">Email</label>

                    <div class="col-sm-10">
                  <input type="email" name="email" class="form-control" id="email" placeholder="Email" />
                    </div>
                  </div>
                  <div class="form-group">
                           <label htmlFor="inputName" class="col-sm-2 control-label">Location</label>

                    <div class="col-sm-10">
                      <input type="text" name="location" class="form-control" id="location" placeholder="location" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label htmlFor="inputExperience" class="col-sm-2 control-label">Education</label>

                    <div class="col-sm-10">
                      <textarea class="form-control" name="education" id="education" placeholder="Education"></textarea>
                    </div>
                  </div>
                  <div class="form-group" id="ptofaddition">
                    <label htmlFor="inputSkills" class="col-sm-2 control-label">Skills<h5 style={{cursor:"pointer", color:"blue"}} id="addskills">Add</h5></label> 
                    <div class="col-sm-10">
                      <input type="text" name="skill"  class="form-control" id="inputSkills" placeholder="skills" />
                     
                    </div>
                  </div>
                  {/* <!-- <div class="form-group">
                  <label for="inputSkills" class="col-sm-2 control-label">Skills</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputSkills" placeholder="List skills in comma separated">
                     
                    </div>
                  </div> -->
                  <!-- <div class="form-group">
                  <label for="inputSkills" class="col-sm-2 control-label">Skills</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="inputSkills" placeholder="List skills in comma separated">
                     
                    </div>
                  </div> --> */}
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <div class="checkbox">
                        <label>
                        <a href="#">Edit</a> <input id="condition" type="checkbox" />
                        <input id="condition2" type="checkbox" /> Add <a href="#">Skills</a>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <button type="button" id="updateprofile" class="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
              {/* <!-- /.tab-pane --> */}
            </div>
            {/* <!-- /.tab-content --> */}
          </div>
          {/* <!-- /.nav-tabs-custom --> */}
        </div>
        {/* <!-- /.col --> */}
      </div>
      {/* <!-- /.row --> */}

    </section>
    {/* <!-- /.content --> */}
  </div>
  {/* <!-- /.content-wrapper --> */}
  <footer class={`main-footer ${poppins.className}`}>
    <div class="pull-right hidden-xs">
      {/* <!-- <b>Version</b> 2.4.0 --> */}
    </div>
    <strong>Copyright &copy; 2023 <a href="#">Partnering to succeed</a>.</strong> All rights
    reserved.
  </footer>

  {/* <!-- Control Sidebar -->
  
  <!-- /.control-sidebar -->
  <!-- Add the sidebar's background. This div must be placed
       immediately after the control sidebar --> */}
  <div class={`control-sidebar-bg ${poppins.className}`}></div>
{/* </div> */}
    </>
  )
}

export default Dashboard
