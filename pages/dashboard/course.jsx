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

const Course = () => {
  const { isLoggedIn, setIsOnHomepage } = useData()
  const { push } = useRouter()
  const { toastWarning } = ToastImporter("You're not signed in!")
  useEffect (() => {
    if (isLoggedIn != true) {
      toastWarning()
      push("/auth")
    }
    else {
      setIsOnHomepage(false)
    }
  }, [])
  return (
    <>
      <HeadComp title="Partnering To Succeed - Courses" />
      <section class={`hold-transition sidebar-mini ${poppins.className}`}>
  <div class="">


    <div class="content-wrapper mt-[7vh] h-[84vh]">
      <section class="content-header">
        <h1>
        Course Page
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
          <li><a href="#">Examples</a></li>
          <li class="active">course page</li>
        </ol>
      </section>

      <section class="content">

        <div class="box">
          <div class="box-header with-border">
          <button class="formuser btn btn-primary">Create A Course</button>
            &nbsp;&nbsp;&nbsp;
            <h3 class="box-title">List Of Courses</h3>

            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                      title="Collapse">
                <i class="fa fa-minus"></i></button>
              <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                <i class="fa fa-times"></i></button>
            </div>
          </div>
          <div class="box-body" id="formbody" style={{display:"none"}}>
              <form role="form" id="userform">
                <div class="row">
                  <div class="form-group col-xs-8">
                    <label for="exampleInputEmail1">Course Name</label>
                    <input type="text" class="form-control" name="coursename" id="coursename" placeholder="Enter Course Name" />
                  </div>
                </div>
                <div class="box-body pad">
                    <div>
                      <textarea id="coursedescription"  name="coursedescription" rows="10" cols="80">
                      Course Description
                      </textarea>
                  </div>
                    </div>
                <div class="row">
                  <div class="form-group col-xs-3">
                    <input type="text" class="form-control" name="whoshouldstudy" placeholder="Who Should the Course" />
                  </div>
                  <div class="form-group col-xs-3">
                    <input type="text" class="form-control" name="whoshouldstudy" placeholder="Who Should the Course" />
                  </div>
                  <div class="form-group col-xs-3">
                    <input type="text" class="form-control" name="whoshouldstudy" placeholder="Who Should the Course" />
                  </div>
                  <div class="form-group col-xs-3">
                    <input type="text" class="form-control" name="whoshouldstudy" placeholder="Who Should the Course" />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-xs-5">
                    <label for="exampleInputPassword1">Professional Training Duration(Month/Days)</label>
                    <input type="text" required class="form-control" name="proftraining" id="proftraining"/>
                  </div>
                  </div>
                  <div class="row">
                  <div class="form-group col-xs-5">
                    <label for="exampleInputPassword1">Course Price</label>
                    <input type="text" required class="form-control" name="courseprice" id="courseprice"/>
                  </div>
                  </div>
                  <div class="row">
                  <div class="form-group col-xs-5">
                    <label for="exampleInputPassword1">Retail Training Duration(Month/Days)</label>
                    <input type="hidden" required class="form-control" id="courseid"/>
                    <input type="text" required class="form-control" name="retailtraining" id="retailtraining"/>
                  </div>
                  </div>
                  <div class="row">
                  <div class="form-group col-xs-3">
                    <input type="text" class="form-control" name="certification" placeholder="Course Certification" />
                  </div>
                  <div class="form-group col-xs-3">
                    <input type="text" class="form-control" name="certification" placeholder="Course Certification" />
                  </div>
                  <div class="form-group col-xs-3">
                    <input type="text" class="form-control" name="certification" placeholder="Course Certification" />
                  </div>
                  <div class="form-group col-xs-3">
                    <input type="text" class="form-control" name="certification" placeholder="Course Certification" />
                  </div>
                </div>  
              <div class="box-body pad">
                    <div>
                      <textarea id="editor1" name="editor1" rows="10" cols="80">
                      Course Company Benefits.
                      </textarea>
                  </div>
                    </div>
                <div class="box-body pad">
                    <div>
                      <textarea id="editor2" name="editor2" rows="10" cols="80">
                      Course Personal Benefits.
                      </textarea>
                  </div>
                    </div>
                  <div class="checkbox">
                    <label>
                      <input id="courseavail" name="courseavail" type="checkbox" />Course Availability
                    </label>
                  </div>
                  <div class="checkbox">
                    <label>
                      <input id="schemth" name="schemth" type="checkbox" />Schedule for the Month
                    </label>
                  </div>
                  <div class="checkbox">
                    <label>
                      <input id="popularcourses" name="popularcourses" type="checkbox" />Popular Courses
                    </label>
                  </div>
                  <div class="checkbox">
                    <label>
                      <input id="runningcourse" name="runningcourse" type="checkbox" />Running Course
                    </label>
                  </div>
                <div class="box-footer">
                  <button type="submit" class="btn btn-primary" id="createcourse">Save/Edit</button>
                  <button type="submit" class="btn btn-danger" id="deletecourse">Delete</button>
                  <button type="submit" class="btn btn-primary formuser" id="closecourse">Close Details</button>
                  </div>
              </form>
            </div>
          <div class="box-body">
                <table id="example2" class="display text-[12px] table table-bordered table-striped" width="100%">
                  <thead>
                  <tr>
                    <th></th>
                    <th>id</th>
                    <th>Course Name</th>
                    <th>Description</th>
                    <th>Prof Duration</th>
                    <th>Retail Duration</th>
                    <th>Company benefits</th>
                    <th>Personal Benefits</th>
                    <th>Courseavail</th>
                    <th>Popular Courses</th>
                    <th>Month Schedule</th>
                  </tr>
                  </thead>
                  <tbody>
                
                  </tbody>
                  <tfoot>
                  <tr>
                  <th></th>
                    <th>id</th>
                    <th>Course Name</th>
                    <th>Description</th>
                    <th>Prof Duration</th>
                    <th>Retail Duration</th>
                    <th>Company benefits</th>
                    <th>Personal Benefits</th>
                    <th>Courseavail</th>
                    <th>Popular Curses</th>
                    <th>Month Schedule</th>
                  </tr>
                  </tfoot>
                </table>
            
          </div>
          <div class="box-footer">
            Course Administrations
          </div>
        </div>

      </section>
    </div>

    <footer class="main-footer">
      <div class="pull-right hidden-xs">
      </div>
      <strong>Copyright &copy;2023 <a href="#">Partnering to succeed</a>.</strong> All rights
      reserved.
    </footer>
    <div class="control-sidebar-bg"></div>
  </div>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Course Details</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      <div class="modal-body" id="modalbody">
        
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div> 
  </section>
    </>
  )
}

export default Course
