import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '@/styles/globals.css'
import "@/styles/bower-components/bootstrap.min.css"
import "@/styles/skins/_all-skins.min.css"
import "@/styles/AdminLTE.min.css"
import Layout from '@/layout/layout'
import { DataGet } from "@/context/DataContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DataGet>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataGet>
      <ToastContainer />
    </>
  )
}
