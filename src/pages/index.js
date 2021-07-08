import * as React from "react"
import './index.scss'
import * as CubeIcon from '../images/noun_cube_11037.svg'

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const firstPartTitleStyle = {

}

const secondPartTitleStyle = {

}

// markup
const IndexPage = () => {
  return (
    <div className="main-div h-full flex content-center items-center justify-center">
      <div className="logo-container relative hidden" style={{ height: '170px', width: '186px'}}>
        <CubeIcon className="absolute"></CubeIcon>
        <CubeIcon className="absolute" style={{ left: '41px', top: '72px'}}></CubeIcon>
        <CubeIcon className="absolute" style={{left: '86px'}}></CubeIcon>
      </div>
      <div>
        <div className="main-title-container flex items-center">
          <span className="title-first">Infrastructure as </span>
          <span className="title-second">CUBED</span>
        </div>
        <div className="relative progress-title">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-landing-blue bg-gray-50">
                Installation en cours
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-gray-100">
                30%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-50 mt-3">
            <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-gray justify-center bg-landing-blue-light"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
