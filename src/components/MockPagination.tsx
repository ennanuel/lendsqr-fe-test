import Image from "next/image";
import { arrowLeft, arrowRight } from "@/assets/icons";

export default function MockPagination() {

    return (
        <div className="pagination-container">
                <div className="pagination">
                    <button className="navigation prev-btn">
                        <Image src={arrowLeft} alt="Arrow left icon" width={14} height={14} className="pagination-icon" />
                    </button>
                    <ul className="pages">
                        <li>
                            <button className="active navigation page">
                                <span className="font-work-sans">1</span>
                            </button>
                        </li>
                        <li>
                            <button className="navigation page">
                                <span className="font-work-sans">2</span>
                            </button>
                        </li>
                        <li>
                            <button className="navigation page">
                                <span className="font-work-sans">3</span>
                            </button>
                        </li>
                        <li className="navigation page inactive separator">
                            <span>...</span>
                        </li>
                        <li>
                            <button className="navigation page">
                                <span className="font-work-sans">15</span>
                            </button>
                        </li>
                        <li>
                            <button className="navigation page">
                                <span className="font-work-sans">16</span>
                            </button>
                        </li>
                    </ul>
                    <button className="navigation prev-btn">
                        <Image src={arrowRight} alt="Arrow left icon" width={14} height={14} className="pagination-icon" />
                    </button>
                </div>
            </div>
    )
}