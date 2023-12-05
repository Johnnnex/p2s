import Image from 'next/image'
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import { Poppins } from 'next/font/google'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useData } from '@/context/DataContext';
import { ToastImporter } from '@/utils/toast';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const DashboardLayout = () => {
  const { sessionItem, setIsLoggedIn } = useData()
  const { pathname, push } = useRouter()
  const navLinks = [
    {
      id: 1,
      path: "/dashboard",
      title: "Dashboard",
      icon : "fa fa-dashboard"
    },
    {
      id: 1,
      path: "/dashboard/user",
      title: "Profile",
      icon : "fa-regular fa-user"
    },
    {
      id: 2,
      path: "/dashboard/course",
      title: "Courses",
      icon: "fa-solid fa-book"
    },
    {
      id: 3,
      path: "/dashboard/message",
      title: "Message",
      icon: "fa-regular fa-message"
    },
    {
      id: 3,
      path: "/dashboard/message-list",
      title: "Message List",
      icon: "fa-solid fa-list-check"
    },
    {
      id: 4,
      path: "/dashboard/student-management",
      title: "Manage Student",
      icon: "fa-solid fa-people-roof"
    },
  ]
  const links = navLinks.map(({id, path, title, icon}) => {
    return (
      <li key={id} className={`cursor-pointer ${path == pathname && "active"}`}>
        <Link href={path}>
          <i className={icon}></i> <span>{title}</span>
        </Link>
        
      </li>
    )
  })
  const signOut = () => {
    sessionStorage.removeItem("userSession")
    setIsLoggedIn(false)
    const { toastSuccess } = ToastImporter("Sign Out Successful!")
    toastSuccess()
    push("/auth")
  }
  return (
    <>
    <header className={`main-header ${poppins.className}`}>
<div className="fixed w-full top-0 left-0">

    <a href="" className="logo">
      <span className="logo-mini"><b>A</b>LT</span>
      <span className="logo-lg"><b>P2S</b>&nbsp; Admin</span>
    </a>
    <nav className="navbar-static-top nav">
      <section className="flex w-full text-white items-center bg-[#3c8dbc] justify-between ">
      <button className="sidebar-toggle py-0" role="button">
      </button>

      
    <ul className="flex gap-[20px] items-center">
    <Dropdown className=''>
      <Dropdown.Toggle className='outline-none relative hover:bg-[#000] text-white' variant="" id="dropdown-basic">
        <i class="fa-regular fa-xl fa-envelope" ></i>
        <span className="text-[11px] absolute top-0 px-2 rounded-[2px] right-0 label-success">4</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className='w-full'>
          <p className="px-[10px]">You have 4 messages</p>
          <div className="flex px-[10px] py-2 border-t cursor-pointer hover:bg-[#00000020] transition-[.4s] gap-[12px] border-b items-center">
            <Image height={1} width={40} src="/images/user-img.jpg" className="img-circle" alt="User Image" />
            <div className="">
              <h4 className="text-[14px] font-[500]">Support Team</h4>
              <small className="text-[12px] font-[400]">Why not buy a new awesome theme?</small>
            </div>
          </div>
          <div className="py-1 text-center">

          <button className=" ">See All Messages</button>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle className="text-white hover:bg-[#000]" variant="" id="dropdown-basic">
        <i class="fa-regular fa-bell"></i>
        <span className="text-[11px] absolute top-0 px-2 rounded-[2px] right-0 label-warning">10</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className='w-full'>
          <p className="px-[10px]">You have 10 notifications</p>
          <div className="flex px-[10px] border-t py-3 cursor-pointer hover:bg-[#00000020] transition-[.4s] gap-[12px] border-b items-center">
            <i className="fa fa-users text-aqua"></i>
            <b className="text-[12px] font-[400]">5 new members joined today</b>
          </div>
          <div className="py-1 text-center">
            <button className="">View all</button>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle className="text-white hover:bg-[#000]" variant="" id="dropdown-basic">
      <i class="fa-regular fa-flag"></i>
              <span className="text-[11px] absolute top-0 px-2 rounded-[2px] right-0 label-danger">9</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="py-[20px] px-[10px]">
            <small className="text-[14px]">You have 9 tasks</small>
        </div>
            <div className="border-t px-[10px] text-center">
              <button className="text-[12px]">View all tasks</button>
            </div>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle className="text-white hover:bg-[#000]" variant="" id="dropdown-basic">
      <Image height={1} width={25} src="/images/user-img.jpg" className="img-circle" alt="User Image" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
            <figure className="w-[300px] h-[200px] relative">
              <Image fill src="/images/user-img.jpg" className="" alt="User Image" />
            </figure>
            <div className="p-[10px] flex justify-between">
              <button className="btn btn-default btn-flat">Profile</button>
              <button onClick={signOut} className="btn btn-default btn-flat">Sign Out</button>
            </div>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle className="text-white hover:bg-[#000]" variant="" id="dropdown-basic">
      <i className="fa fa-gears"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
      </Dropdown.Menu>
    </Dropdown>
        </ul>
  
      </section>
    </nav>
</div>
  </header>
  <section className={`hold-transition skin-blue sidebar-mini ${poppins.className}`}>
{/* <div className="wrapper"> */}
<div className="fixed h-[100vh]">

  <aside className="main-sidebar">
    <section className="sidebar">
      <div className="user-panel">
        <div className="pull-left image">
          <Image src="/images/user-img.jpg" height={1} width={200} className="img-circle" alt="User Image" />
        </div>
        <div className="pull-left info">
          <p>{sessionItem?.fullName}</p>
          <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
  <ul className="sidebar-menu" data-widget="tree">
        <li className="header">MAIN NAVIGATION</li>
          {links}
      </ul>
      </section>
  </aside>
</div>
{/* </div> */}
</section>
    </>
  )
}

export default DashboardLayout
