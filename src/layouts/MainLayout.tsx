import {ReactElement} from 'react'
import {Outlet} from 'react-router-dom'
import {Header} from '../components/Header/Header'
import {Footer} from '../components/Footer/Footer'

export function MainLayout(): ReactElement {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
