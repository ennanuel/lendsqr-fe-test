
import { FilterProps } from "@/types/index.types";

import { useRef } from "react";

import FilterInput from "./FilterInput";

import { FILTERS } from "@/assets/data/filters";


export default function Filter({ showFilters, closeFilterDialog }: FilterProps) {
    const formRef = useRef<HTMLFormElement>(null);

    const handleFormContainerClick: React.MouseEventHandler = (event) => {
        if(!formRef.current) return;

        const formRect = formRef.current.getBoundingClientRect();
        const clickedOutsideOfBound = event.clientX < formRect.left || 
            event.clientX > (formRect.left + formRect.width) || 
            event.clientY < formRect.top || 
            event.clientY > (formRect.top + formRect.height);

        if(clickedOutsideOfBound) closeFilterDialog();
    }

    return (
        <div onClick={handleFormContainerClick} className={`filters-container ${!showFilters ? 'hide' : ''}`}>
            <form ref={formRef} className="filters block">
                <div className="title-and-close">
                    <h2>Filters</h2>
                    <button type="button" className="close-btn" onClick={closeFilterDialog}>
                        <span className="line line-1" />
                        <span className="line line-2" />
                    </button>
                </div>
                <div className="filter-inputs-container">
                    {
                        FILTERS.map((filter) => (
                            <FilterInput key={filter.inputId} {...filter} />
                        ))
                    }
                </div>
                <div className="buttons">
                    <button type="button" className="reset-btn" onClick={closeFilterDialog}>
                        <span className="font-work-sans">Reset</span>
                    </button>
                    <button type="button" className="filter-btn" onClick={closeFilterDialog}>
                        <span className="font-work-sans">Filter</span>
                    </button>
                </div>
            </form>
        </div>
    )
}