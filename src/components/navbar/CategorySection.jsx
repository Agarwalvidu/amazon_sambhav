import { Link } from "react-router-dom"


export const CategorySection = ()=>{
    return(
        <>
            <div className="d-flex align-items-center justify-content-between">
               <span>
                    <Link to="" className="px-1 d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="15" width="15"><g><line x1="13.5" y1="2" x2="0.5" y2="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><line x1="13.5" y1="7" x2="0.5" y2="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line><line x1="13.5" y1="12" x2="0.5" y2="12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></line></g></svg>
                        <span className="px-1">All</span>
                    </Link>
                </span>
                <span>
                    <Link to="/" className="px-1">Home</Link>
                </span>
                <span>
                    <Link to="/query" className="px-1">Query Resolution</Link>
                </span>
                <span>
                    <Link to="/" className="px-1">Shipment Tracking</Link>
                </span>
                <span>
                    <Link to="/" className="px-1">International Services</Link>
                </span>
                <span>
                    <Link to="/" className="px-1">Multiple Carriers</Link>
                </span>
                
            </div>
        </>
    )
}
