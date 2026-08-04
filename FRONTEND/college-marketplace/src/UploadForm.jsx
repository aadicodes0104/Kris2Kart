import './App.css'

import { useState } from "react"

function UploadForm() {

  // Stores the selected image file
  const [selectedFile, setSelectedFile] = useState(null)

  // Stores error messages
  const [error, setError] = useState("")


  // Runs when the user selects a file
  function handleFileChange(event) {

    // Gets the first selected file from the input
    const file = event.target.files[0]


    // Checks if the selected file is an image
    if (file && !file.type.startsWith("image/")) {
      setError("Please select an image file.")
      return
    }


    // Clears old errors
    setError("")

    // Saves the selected file into state
    setSelectedFile(file)
  }


  // Runs when the submit button is clicked
  function handleSubmit(event) {

    // Prevents page refresh after submitting
    event.preventDefault()


    // Checks if the user selected a file
    if (!selectedFile) {
      setError("Please select an image first.")
      return
    }


    // Shows file details in console (fake upload for now)
    console.log("File name:", selectedFile.name)
    console.log("File type:", selectedFile.type)
    console.log("File size:", selectedFile.size)
  }


  return (
    <div>

      <h2>Upload Item Image</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />


      {selectedFile && (
        <div>
          <p>Selected: {selectedFile.name}</p>

          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Preview"
            width="200"
          />
        </div>
      )}


      {error && (
        <p>{error}</p>
      )}


      <button onClick={handleSubmit}>
        Submit
      </button>

    </div>
  )
}


export default UploadForm






