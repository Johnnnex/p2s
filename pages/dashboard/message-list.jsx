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


const MessageList = () => {
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
    <HeadComp title="Partnering To Succeed - Message List" />
    <main class={`hold-transition sidebar-mini ${poppins.className}`}>
<div class="">

  <div class="content-wrapper mt-[7vh] h-[84vh]">
    <section class="content-header">
      <h1>
      P2S News
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Examples</a></li>
       <li class="active">message list</li>
      </ol>
    </section>

    <section class="content">

      <div class="box">
        <div class="box-header with-border">
      <button class="btn btn-primary" id="studentform">Create A News</button>
          <h3 class="text-[16px]">List Of News</h3>

          <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                    title="Collapse">
              <i class="fa fa-minus"></i></button>
            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
              <i class="fa fa-times"></i></button>
          </div>
        </div>
        <div class="box-body" id="formbody" style={{display:"none"}}>
            <form role="form">
               <div class="row">
                <div class="form-group col-xs-8">
                  <label for="exampleInputEmail1">Select the Course</label>
                  <select class="form-control" name="studentcourse" id="studentcourse">
                   
                </select> 
                </div>
               </div>
               <div class="box-body pad">
                  <div>
                    <textarea id="editornews" name="editornews" rows="10" cols="80">
                      Create your  News.
                    </textarea>
                 </div>
                   </div>
                <div class="checkbox">
                  <label>
                  <input type="hidden" id="msgid" />
                    <input type="checkbox" id="checkstatus" />Activate this News
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    <input type="radio" name="checkstatus"    id="generalnews" />General News
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    <input type="radio" name="checkstatus" id="coursenews" />Course News
                  </label>
                </div>
              <div class="box-footer">
                <button type="button" class="btn btn-primary" id="createnews">Create/Edit News</button>
              </div>
            </form>
          </div>
        <div class="box-body">
  <table id="msglist" class="table table-bordered text-[12px] table-striped"  style={{width:"100%"}}>
                <thead>
                <tr>
                   <th>id</th>
                   <th>Message</th>
                  <th>Message Status</th>
                  <th>Course Name</th>
                  <th>Course Id</th>
                  <th>Date Created</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
                <tfoot>
                <tr>
                   <th>id</th>
                   <th>Message</th>
                  <th>Message Status</th>
                  <th>Course Name</th>
                  <th>Course Id</th>
                  <th>Date Created</th>
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

</main>
    </>
  )
}

export default MessageList
