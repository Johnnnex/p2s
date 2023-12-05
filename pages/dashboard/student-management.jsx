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


const StudentManagement = () => {
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
      <HeadComp title="Partnering To Succeed - Student Management" />
      <section class={`hold-transition skin-blue sidebar-mini ${poppins.className}`}>
  <div class="">



    <div class="content-wrapper mt-[7vh] h-[84vh]">
      <section class="content-header">
        <h1>
        Student Admin Financial Management
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
          <li><a href="#">Examples</a></li>
          <li class="active">finance</li>
        </ol>
      </section>

      <section class="content">


        <div class="box">
          <div class="box-header with-border">
            <h3 class="box-title"></h3>

            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                      title="Collapse">
                <i class="fa fa-minus"></i></button>
              <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                <i class="fa fa-times"></i></button>
            </div>
          </div>
          <div class="box-body">
              <table id="studentfinmgt" class="table text-[12px] table-bordered table-striped"  style={{width:"100%"}}>
                  <thead>
                  <tr>
                    <th>Id</th>
                    <th>Student Name</th>
                    <th>Course Name</th>
                    <th>Course Price</th>
                      <th>Payment Amount</th>
                    <th>Payment Status</th>
                    <th>Part Payment</th>
                      <th>Date</th>
                  </tr>
                  </thead>
                  <tbody>
                
                  </tbody>
                  <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Student Name</th>
                    <th>Course Name</th>
                    <th>Course Price</th>
                    <th>Payment Amount</th>
                    <th>Payment Status(Full,Part,None)</th>
                    <th>Part Payment</th>
                    <th>Date</th>
                  </tr>
                  </tfoot>
                </table>
          </div>
          <div class="box-footer">
            Student Administrations
          </div>
        </div>

      </section>
    </div>

    <footer class="main-footer">
      <div class="pull-right hidden-xs">
      </div>
      <strong>Copyright &copy; 2023 <a href="#">Partnering to succeed</a>.</strong> All rights
      reserved.
    </footer>
    <div class="control-sidebar-bg"></div>
  </div>

  </section>
    </>
  )
}

export default StudentManagement
