import Link from "next/link"
import ProductCard from "./ProductCard"

export default async function CarCatalog({carJson}:{carJson:object}){
    const carJsonReady = await carJson
    return (
        <>
        Explore{carJsonReady.count}model in our catalog
        <div style={{margin:"30px", display:'flex',flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",
           alignContent:"space-around" }}>
                {
                    carJsonReady.data.map((carItem)=>(
                        <Link href={`/car/${carItem.id}`} className = "w-1/5">
                        <ProductCard carName = {carItem.model} imgSrc={carItem.picture}
                        />
                        </Link>
                    ))
                }

           </div>
        </>
    )

}