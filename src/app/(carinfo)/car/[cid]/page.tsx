import Image from "next/image"
import getCar from "@/libs/getCar"
import Link from "next/link"
export default async function carDetailPage({params}:{params:{cid:string}}){

    const carDetail = await getCar(params.cid)
    /**
     *  mock data dor demonstration only
     */
    /*
    const mockCarRepo = new Map()
    mockCarRepo.set("001", {cid:"001", name:"Iron man",image:"/img/ironman.jpg"})
    mockCarRepo.set("002", {cid:"002", name:"Logan",image:"/img/logan.jpg"})
    mockCarRepo.set("003", {cid:"003", name:"CR7",image:"/img/cr7.jpg"})
    mockCarRepo.set("004", {cid:"004", name:"Taylor Swift",image:"/img/taylor.jpg"})
    */
    
    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">{carDetail.data.model}</h1>
            <div className="flex flex-row my-5">
                <Image src = {carDetail.data.picture}
                alt = 'car Image'
                width = {0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 text-left">{carDetail.data.description}
                <div className="text-md mx-5">Doors: {carDetail.data.doors}</div>
                <div className="text-md mx-5">Seats: {carDetail.data.seats}</div>
                <div className="text-md mx-5">Large Bags: {carDetail.data.largebags}</div>
                <div className="text-md mx-5">Small Bags: {carDetail.data.smallbags}</div>
                <div className="text-md mx-5">Daily rental rate: {carDetail.data.dayrate}(insurance included)</div>

                <Link href={`/reservations?id=${params.cid}&model=${carDetail.data.model}`}>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
                    Make Reservation
                </button>
                </Link>
                </div>
                
                
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return[{cid:'001'} ,{cid:'002'},{cid:'003'},{cid:'004'}]
}