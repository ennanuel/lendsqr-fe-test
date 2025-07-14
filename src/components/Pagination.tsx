
import Image from "next/image";
import { useMemo } from "react";

import { generatePaginationPages } from "@/helpers";
import { arrowDown, arrowLeft, arrowRight } from "@/assets/icons";
import { PageProps, PaginationButtonProps, PaginationProps } from "@/types/index.types";

export default function Pagination({ pageLength, limit, total, currentPage, canNext, canPrev, selectPage, prevPage, nextPage }: PaginationProps) {
    const pages = useMemo(() => generatePaginationPages(pageLength, currentPage), [pageLength, currentPage]);

    return (
        <div data-testid="pagination" className="pagination-container">
            <div className="fetch-options">
                <span>Showing</span>
                <button>
                    <span className="font-work-sans">{limit}</span>
                    <Image src={arrowDown} alt="Dropdown icon" width={14} height={14} className="dropdown-icon" />
                </button>
                <span>out of {total}</span>
            </div>
            <div className="pagination">
                <PaginationButton canPress={canPrev} handleClick={prevPage} icon={arrowLeft} />
                <ul className="pages">
                    {
                        pages.map(({ page, content, isPage }) => (
                            <Page 
                                key={content} 
                                page={page}
                                isPage={isPage}
                                content={content}
                                currentPage={currentPage} selectPage={selectPage} 
                            />
                        ))
                    }
                </ul>
                <PaginationButton canPress={canNext} handleClick={nextPage} icon={arrowRight} />
            </div>
        </div>
    )
};

function PaginationButton ({ canPress, handleClick, icon }: PaginationButtonProps) {
    return (
        <button onClick={handleClick} className={`${!canPress && 'inactive'} navigation prev-btn`}>
            <Image src={icon} alt="Arrow left icon" width={14} height={14} className="pagination-icon" />
        </button>
    )
};

function Page({ isPage, content, page, currentPage, selectPage }: PageProps) {
    return (
        isPage ? 
            <li>
                <button onClick={() => selectPage(page)} className={`${currentPage === page ? 'active' : ''} navigation page`}>
                    <span className="font-work-sans">{content}</span>
                </button>
            </li> : 
            <li key={content} className="navigation page inactive separator">
                <span>{content}</span>
            </li>
    );
};