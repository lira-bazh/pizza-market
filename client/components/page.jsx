import React from "react"
import './page.scss'

const Page = (props) => {
  return(
    <div className="page">
      {props.children}
    </div>
  )
}

Page.propTypes = {};

export default Page;