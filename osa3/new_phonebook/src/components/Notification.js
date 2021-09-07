import React from 'react'

const Notification = ( props ) => {

	// var message = props.message
	// var message = props.message
	var errorMessage = props.errorMessage
	var informationMessage = props.informationMessage
	var errorFlag = false;
	var informationFlag = false;

	// What about inline-styles?

	/*
	if (message === null) {
		return null
	}
	*/

	if (errorMessage === null) {
		return null
	} 

	if (errorMessage !== null) {
		errorFlag = true;
	}

	if (informationMessage === null) {
		return null
	} 

	if (informationMessage !== null) {
		informationFlag = true;
	}

	function isError(errorFlag) {

		if (errorFlag === true) {
			return (
				<div className="error">
					{errorMessage} 
				</div>
			)
		} else {
			return
		}
		
	}

	function isInformation(informationFlag) {

		if (informationFlag === true) {
			return (
				<div className="success">
				{informationMessage}
				</div>
			)
		} else {
			return
		}
	
	}

	/* 			<div className="error">
				{errorMessage} 
			</div>
			<div className="success">
				{informationMessage}
			</div> */

	return (
		<div>
			{isError(errorFlag)}
			{isInformation(informationFlag)}
		</div>
		
	)
}

export default Notification
