import React, { useState } from "react"
import "twin.macro"
import Zoom from "react-reveal/Zoom"
import Flash from "react-reveal/Flash"

const Mailto = ({ name = "", subject = "", body = "", children }) => {
  let params = subject || body ? "?" : ""
  if (subject) params += `subject=${encodeURIComponent(subject)}`
  if (body)
    params += `${subject ? "&" : ""}body=${encodeURIComponent(
      name + "\n" + body
    )}`

  var badname = new Array("fuck", "suck", "bitch", "sample", "test")
  var badsubject = new Array("fuck", "suck", "bitch")
  var badmessage = new Array("fuck", "suck", "bitch")
  for (let i = 0; i < badname.length; i++) {
    if (name.includes(badname[i]))
      return (
        <button
          disabled
          tw="border-red-600 border-solid border-8 cursor-not-allowed text-center col-span-2 opacity-50 bg-red-700 w-full p-4 rounded text-white"
        >
          Please enter proper Name{" "}
          <span tw="text-decoration[line-through]">"{badname[i]}"</span>
        </button>
      )
    else if (subject.includes(badsubject[i]))
      return (
        <button
          disabled
          tw="border-red-600 border-solid border-8 cursor-not-allowed text-center col-span-2 opacity-50 bg-red-700 w-full p-4 rounded text-white"
        >
          Please enter proper Subject{" "}
          <span tw="text-decoration[line-through]">"{badsubject[i]}"</span>
        </button>
      )
    else if (body.includes(badmessage[i]))
      return (
        <button
          disabled
          tw="border-red-600 border-solid border-8 cursor-not-allowed text-center col-span-2 opacity-50 bg-red-700 w-full p-4 rounded text-white"
        >
          Please enter proper Message{" "}
          <span tw="text-decoration[line-through]">"{badmessage[i]}"</span>
        </button>
      )
  }
  if (subject && body && name)
    return (
      <a
        tw="text-decoration[none] text-center"
        href={`mailto:baalamurgan2307@gmail.com${params}`}
        target="_blank"
      >
        {children}
      </a>
    )
  else
    return (
      <button
        disabled
        tw="cursor-not-allowed text-center col-span-2 opacity-50 bg-pink-700 w-full p-4 rounded border-none text-white"
      >
        SEND MESSAGE
      </button>
    )
}

const ContactSection = () => {
  const [mail, setMail] = useState({
    name: "",
    subject: "",
    message: "",
  })
  const { name, subject, message } = mail

  const handleChange = name => event => {
    setMail({ ...mail, [name]: event.target.value })
  }
  return (
    <div tw="bg-primary min-h-screen flex flex-col items-center" id="contact">
      <div tw="md:(pt-20) px-5 pt-20 space-y-4 text-center max-w-2xl items-center">
        <div tw="mx-auto text-center text-black md:text-4xl text-3xl">
          CONTACT ME
        </div>
        <div tw="text-center italic">Anything to discuss with</div>
        <Zoom>
          <div tw="mx-auto md:(max-height[6px] max-width[80px] min-height[6px] min-width[80px]) max-height[3px] max-width[20vw] min-height[3px] min-width[20vw] background-color[aqua]"></div>
        </Zoom>
      </div>
      <div tw="min-width[90vw] grid lg:px-72 md:px-40 sm:px-20 px-4 pt-10">
        <form autoComplete="off">
          <div tw="focus-within:outline-none grid grid-cols-2 gap-4 w-full">
            <div tw="col-span-2">
              <input
                tw="bg-transparent w-full focus:(outline-none border-color[blue] border-2 md:transition-duration[0.20s]) py-1 border-gray-400 border-l-0 border-r-0 border-t-0 border-b-2"
                required
                placeholder="Name*"
                name="photo"
                onChange={handleChange("name")}
                value={name}
              />
            </div>
            <div tw="col-span-2">
              <input
                tw="bg-transparent w-full focus:(outline-none border-color[blue] border-2 md:transition-duration[0.20s]) py-1 border-gray-400 border-l-0 border-r-0 border-t-0 border-b-2"
                required
                placeholder="Subject*"
                name="photo"
                onChange={handleChange("subject")}
                value={subject}
              />
            </div>
            <div tw="col-span-2">
              <textarea
                tw="bg-transparent w-full focus:(outline-none border-color[blue] border-2 md:transition-duration[0.20s]) py-1 border-gray-400 border-l-0 border-r-0 border-t-0 border-b-2"
                required
                rows={10}
                placeholder="Message*"
                name="photo"
                onChange={handleChange("message")}
                value={message}
              />
            </div>
            <div tw="col-span-2 whitespace-nowrap text-sm">
              *PLEASE FILL ALL FIELDS CORRECTLY
            </div>
            <div tw="col-span-2 my-7">
              <Mailto name={name} subject={subject} body={message}>
                <Flash>
                  <div tw="col-span-2 border-4 border-solid border-green-400 cursor-pointer md:bg-pink-700 bg-black w-full p-4 rounded text-white hover:(text-green-500 bg-black)">
                    SEND MESSAGE
                  </div>
                </Flash>
              </Mailto>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactSection
