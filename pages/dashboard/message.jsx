import Image from 'next/image'
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


const Message = () => {
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
      <HeadComp title="Partnering To Succeed - Meassage" />
      <section class={`hold-transition sidebar-mini ${poppins.className}`}>
  <div class="">

    <div class="content-wrapper mt-[7vh]">
      <section class="content-header">
        <h1>
        Message Page
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
          <li><a href="#">Examples</a></li>
          <li class="active">Messsage page</li>
        </ol>
      </section>

      <section class="content">

        <div class="box">
          <div class="box-header with-border">
            <h3 class="box-title">Messaging and Chats</h3>

            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                      title="Collapse">
                <i class="fa fa-minus"></i></button>
              <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                <i class="fa fa-times"></i></button>
            </div>
          </div>
          <div class="row">
          <div class="col-md-3">
            <div class="box box-success direct-chat direct-chat-success">
              <div class="box-header with-border">
                <h3 class="box-title">Customer Chat</h3>

                <div class="box-tools pull-right">
                  <span data-toggle="tooltip" title="3 New Messages" class="badge bg-green">3</span>
                  <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
                    <i class="fa fa-comments"></i></button>
                  <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                </div>
              </div>
              <div class="box-body">
                <div class="direct-chat-messages">
                  <div class="direct-chat-msg right">    
                  </div>
                </div>
              </div>
              <div class="box-footer">
                <form action="#" method="post">
                  <div class="input-group">
                    <input type="text" autocomplete="off" id="message" name="message" placeholder="Type Message ..." class="form-control" />
                        <span class="input-group-btn">
                          <button type="submit" id="msgchat" class="btn btn-success btn-flat">Send</button>
                        </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr/>
              <p>Send  Message of News Letter To Customers</p>
        <hr/>
        <div class="row">
        <div class="box-body pad">
              <form>
              <textarea id="msgbroadcast"  name="msgbroadcast" rows="10" cols="80">
              Broadcast News
              </textarea>
              </form>
          </div>
        </div>
        <div class="checkbox">
          <label>
        <input type="checkbox" id="checkstatus" />Activate for it to show on the Website
        </label>
        </div> 
        <div class="box-footer">
        <button type="submit" class="btn btn-primary">Broad News</button>
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

export default Message
