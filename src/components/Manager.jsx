import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])


    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }

    }, [])


    const showpassword = () => {
        passwordRef.current.type = "text"

        alert("show the password")
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password"

        }
        else {

            passwordRef.current.type = "text"

            ref.current.src = "icons/eyecross.png"

        }

    }


    const savepassword = () => {

        if(form.site.length>3 && form.username.length>3 && form.password.length>3)
        {
        toast('password saved', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        

        });
        setPasswordArray([...passwordArray, {...form , id:uuidv4()}])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form , id:uuidv4()}]))
        console.log([...passwordArray, form])
        setForm({ site: "", username: "", password: "" })
    }
    else{
        toast('Error:Password not save', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        

        });
    }


    }
    const deletepassword=(id)=>{
        toast('Password Deleted', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
        let c=confirm("do you really want to delete this password")
        if(c)
        {
        setPasswordArray(passwordArray.filter(item=>item.id!==id))
        localStorage.setItem("passwords",JSON.stringify(passwordArray.filter(item=>item.id!==id)))
        }
    }
    const editpassword=(id)=>{
       
        console.log("Editing password with " + id)
        setForm(passwordArray.filter(i=>i.id===id)[0])
                setPasswordArray(passwordArray.filter(item=>item.id!==id))


    }
    const copyText = (text) => {
        toast('copied to clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
        navigator.clipboard.writeText(text)
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (

        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div>

                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>


            </div>
            <div className='bg-slate-200 md:mycontainer min-h-[85.5vh]'>
                <div className='flex flex-col p-4 '>
                    <h1 className='text-4xl font-bold text-center'>
                        {/* <div className="logo font-bold px-4 text-black text-2xl"> */}
                        <span className='text-green-600'>&lt;</span>
                        <span >Pass</span><span className='text-green-600'>Op/&gt;</span>

                        {/* </div> */}
                    </h1>
                    <p className='text-green-900 text-center text-xl py-2'>Your own Password Manager</p>
                    <input value={form.site} onChange={handleChange} placeholder="Enter website URL" className='rounded-full border border-green-500 w-full py-1 px-4 ' type="text" name="site" id="site" />

                    <div className='flex w-full gap-8 py-3 relative md:flex-row flex-col'>


                        <input value={form.username} onChange={handleChange} placeholder="Enter username" className='flex w-full rounded-full border border-green-500 py-1 px-3  ' type="text" name="username" id="username" />

                        <input ref={passwordRef} type="password" value={form.password} onChange={handleChange} placeholder="Enter password" className='flex w-full rounded-full border border-green-500 py-1 px-3 ' type="text" name="password" id="password" />

                        <span className=' absolute right-[4px] cursor-pointer' onClick={showpassword} >
                            <img ref={ref} className='m-1' width={26} src="icons/eye.png" alt="" />
                        </span>
                    </div>

                </div>
                <div className='text-center'>



                    <button onClick={savepassword} className='flex hover:bg-green-700 items-center mx-auto w-fit bg-green-800 rounded-full py-1 px-4 gap-2 text-white font-bold'>
                        <lord-icon
                            src="https://cdn.lordicon.com/sbnjyzil.json"
                            trigger="hover"
                            stroke="bold"

                        >
                        </lord-icon>

                        Save </button>
                </div>
                <div>
                    <h2 className='font-bold py-4 text-xl'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>no passwords to show</div>}
                    {passwordArray.length != 0 &&
                        <table className='table-auto w-full rounded-md overflow-hidden '>
                            <thead className='bg-green-800 text-white'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>username</th>
                                    <th className='py-2'>Edit</th>


                                    <th className='py-2'>Actions</th>

                                </tr>
                            </thead>
                            <tbody className="bg-green-100">


                                {passwordArray.map((item, index) => {

                                    return <tr key={index}>
                                        <td className=' text-center  border-white'>
                                            <div className='flex justify-center items-center'>
                                                <a href={item.site}><span>{item.site}</span></a>
                                                <div className='cursor-pointer size-7' onClick={() => { copyText(item.site) }}>
                                                    <lord-icon className=''
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover" >
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>

                                        <td className='text-center border-white  '>

                                            <div className='flex items-center justify-center'>
                                                <span >{item.username}</span>
                                                <div className='cursor-pointer size-7 ' onClick={() => { copyText(item.username) }} >
                                                    <lord-icon className=''
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover" >
                                                    </lord-icon>
                                                </div>
                                            </div>

                                        </td>
                                        <td className='text-center border-white'>
                                            <div className='flex justify-center items-center'>
                                                <span>{item.password}</span>
                                                <div className='cursor-pointer size-7 ' onClick={() => { copyText(item.password) }}>
                                                    <lord-icon className=''
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover" >
                                                    </lord-icon>
                                                </div>
                                            </div>

                                        </td>

                                        <td className=' Edit text-center border-white  '>
                                           <span className='cursor-pointer' onClick={()=>editpassword(item.id)}>
                                            <span className='px-1'>

                                                <lord-icon
                                                    src="https://cdn.lordicon.com/gwlusjdu.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>
                                            </span>
                                            <span className='cursor-pointer' onClick={()=>deletepassword(item.id)}>
                                             <span className='px-1'>

                                                 <lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{"width":"25px", "height":"25px"}}>
                                            </lord-icon>
                                            </span>
                                            </span>




                                        </td>

                                    </tr>


                                })}

                            </tbody>
                        </table>}
                </div>
            </div>
        </>


    )
}

export default Manager
