import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { ItemList } from "../components/query/Query";
import { Bar } from "../components/querybar/Querybar";

import "../components/home/home.css";

export const Query = () => {
    document.body.style.backgroundColor = "#E3E6E6";
    
    return (
        <>
            <Navbar />
            <Bar />
            <ItemList />
            <Footer />

            {/* Chatbot Button */}
            <button className="chatbot-button">
                <span>💬</span> {/* You can replace this with an icon or image */}
            </button>
        </>
    );
}
