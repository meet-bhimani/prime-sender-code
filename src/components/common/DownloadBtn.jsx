import React from "react"
import "../../styles/Common/downloadbtn.css"
import ReactGA from "react-ga4"

const DownloadBtn = ({ handleDownloadBtnClick, ButtonText, homeBtn, downloadIcon }) => {
	return (
		<>
			<a
				className="button-round download-btn btn"
				href="https://chromewebstore.google.com/detail/prime-sender-best-web-ext/klfaghfflijdgoljefdlofkoinndmpia"
				target="_blank"
				onClick={handleDownloadBtnClick}>
				<p className={homeBtn === true ? "download-text large-text" : "download-text large-text"}>{ButtonText}</p>
				{downloadIcon}
			</a>
		</>
	)
}

export default DownloadBtn
