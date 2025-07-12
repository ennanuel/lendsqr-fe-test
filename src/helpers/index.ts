import { star1, star2 } from "@/assets/icons";
import { Page } from "@/types/index.types";
import { UserFetchResponse } from "@/types/user.types";

import axios from "axios";

const API_URL = 'https://emmanuel-ezema-lendsqr-fe-test.netlify.app/.netlify/functions/api';
const MONTHS_ARRAY = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const MAX_PAGES_TO_SHOW = 6;
const HALF_WAY_MARK = 3;

const MAX_SIZE_OF_TIER_STARS = 3;


export async function fetchUsers() {
    const response = await axios.get<UserFetchResponse>(API_URL);

    if(response.status !== 200) throw new Error();

    const result = response.data;
    return result;
};


export function removeMillisecondsFromTime(timeString: string) {
    return timeString.replace(/:\d{2} /, ' ');
};


export function changeDateFormat(dateValue: string): string {
    const date = new Date(dateValue);
    const year = date.getFullYear();
    const month = MONTHS_ARRAY[date.getMonth()];
    const day = date.getDate();
    const time = removeMillisecondsFromTime(date.toLocaleTimeString());

    const newDateFormat = `${month} ${day}, ${year} ${time}`;
    return newDateFormat;
};


export function generateUserTierStars(userTier: number) {
    const stars = [];

    for(let i = 1; i <= MAX_SIZE_OF_TIER_STARS; i++) {
        const starImage = i <= userTier ? star1 : star2;
        stars.push(starImage);
    }

    return stars;
};


export function generatePaginationPages(maxPageLength: number, currentPage: number) {
    const pages: Page[] = [];
    const pagesLengthGreaterPagesThatCanBeVisible = maxPageLength > MAX_PAGES_TO_SHOW;
    const start = maxPageLength <= MAX_PAGES_TO_SHOW ? 
        1 : 
        (maxPageLength - currentPage) < MAX_PAGES_TO_SHOW ?
            maxPageLength - MAX_PAGES_TO_SHOW :
            currentPage;

    let i = 0;
    while(i < MAX_PAGES_TO_SHOW) {
        if(i > maxPageLength) break;
        const page = start + i;
        const result = {
            page: page,
            isPage: true,
            content: String(page),
        };

        const shouldIncludeEllipses = i === HALF_WAY_MARK && 
            (maxPageLength - currentPage) > MAX_PAGES_TO_SHOW && 
            pagesLengthGreaterPagesThatCanBeVisible;
        const shouldIncludeLastPagesOfPagination = i > HALF_WAY_MARK && 
            pagesLengthGreaterPagesThatCanBeVisible;

        if(shouldIncludeEllipses) {
            result.isPage = false;
            result.content = '...';
            result.page = -1;
        } else if(shouldIncludeLastPagesOfPagination) {
            const numberToSubtractFromCurrentPage = MAX_PAGES_TO_SHOW - (i + 1);
            const pageNumber = maxPageLength - numberToSubtractFromCurrentPage;

            result.content = String(pageNumber);
            result.page = pageNumber;
        }

        pages.push(result);
        i++;
    }

    return pages;
};