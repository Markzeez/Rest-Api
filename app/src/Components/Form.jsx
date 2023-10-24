import { FaLink, FaRegImage, FaLocationDot } from 'react-icons/fa6'
import { useForm } from "react-hook-form"
import { useEffect, useState } from 'react'
import axios from 'axios'

const Form = () => {
    const [data, setData] = useState("")
    const [sub, setSub] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    useEffect(() => {
        axios.post("http://localhost:3003/posts/", { body: data })
            .then(res => {
                console.log(res)
            })
    }, [sub])
    // const handle

    return (
        <div className=" flex flex-col  border border-green-700">
            <form onSubmit={handleSubmit((i) => {
                setData(JSON.stringify(i))

                console.log(data)
                setSub(true)
                console.log(sub)
            })} className="flex flex-col gap-10 p-5 m-5 border  border-red-700">
                <div className=" grid  px-10 grid-flow-row grid-cols-2  justify-items-stretch gap-10 w-full ">
                    <div className="flex flex-col gap-1 items-start">
                        <label>Title</label>
                        <input {...register("title", { required: true })} aria-invalid={errors.title ? "true" : "false"}
                            className="border p-2 w-full h-10 border-slate-500 rounded-lg placeholder:focus-green-800" />
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <label>Author</label>
                        <input {...register("author", { required: true })} className="border p-2 w-full h-10 border-slate-500 rounded-lg" />
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <label >Category</label>
                        <select {...register("category")} className="p-2 rounded-md w-full" >
                            <option value="">Select...</option>
                            <option value="Entertainment">Entertainment 🎤 </option>
                            <option value="News">News 📰 </option>
                            <option value="Sports">Sports ⚽ </option>
                            <option value="Tech">Tech 👨‍💻 </option>
                            <option value="Gaming">Gaming 🎮 </option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <label>Upload Image</label>
                        <input className='w-full' type="file" />
                    </div>
                    <div className="flex flex-col gap-1 place-self-center w-[inherit] ">
                        <label>Posts</label>
                        <textarea {...register("body", { required: true })} rows="4" placeholder="Your message..." className=" p-2 placeholder:p-10 border w-[100%] border-slate-500 rounded-lg" />
                    </div>
                    {/* <div className="flex flex-col gap-1 items-start">
                        <label>Tags</label>
                        <input className="border border-slate-500 rounded-lg" />
                    </div> */}

                </div>

                <div className="flex py-3 px-10  h-full w-full  justify-between items-center">
                    <button type="submit" className="bg-blue-800 transition duration-500 ease-in-out hover:bg-blue-600 text-center text-white rounded-xl w-fit py-3 px-10 text-xl " >Submit</button>
                    <div className=' flex gap-5'>
                        <FaLink className='text-gray-500 text-2xl cursor-pointer' />
                        <FaLocationDot className='text-gray-500 text-2xl cursor-pointer' />
                        <FaRegImage className='text-gray-500 text-2xl cursor-pointer' />
                    </div>
                </div>

                <p>{data}</p>
            </form>
        </div>
    )
}

export default Form