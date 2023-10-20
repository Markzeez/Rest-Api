import axios from "axios"
import { useEffect, useState } from "react"
import { baseURL, capitalized, createDate } from "../constants/constants"
import { Link } from 'react-router-dom'

const Home = () => {
    const [posts, setPosts] = useState()

    useEffect(() => {
        axios.get("http://localhost:3003/posts/latest")
            .then(res => {
                console.log(res)
                console.log(res.data)
                setPosts(res.data)
            })
    }, [])

    return (
        <div className="flex flex-col justify-center items-start px-10 py-5 ">
            <h1 className="text-4xl text-green-800 font-semibold">Latest Articles</h1>
            <div className="flex flex-col gap-10 mt-2 p-10">
                {
                    posts?.map(data => (
                        <div className="w-full flex flex-col border-2 border-black rounded-3xl p-3 gap-5" key={data._id}>
                            <h1 className="text-3xl text-green-800 font-bold">{data.title}</h1>
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold">
                                    by {capitalized(data.author)} on {createDate(data.date)}
                                </p>
                                <Link
                                    to={"/"} className="text-blue-800 underline font-semibold">
                                    Read more...
                                </Link>
                            </div>
                            <div className="flex gap-1">
                                {data.tags.map((tag, index) => (
                                    <span className="bg-slate-600 text-white rounded-xl py-1 px-3 items-center" key={index}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home