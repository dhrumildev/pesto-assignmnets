// useBookSorter.js
import { useMemo } from 'react';

const useBookSorter = (books, sortBy) => {
    const sortedBooks = useMemo(() => {
        // Implement book sorting logic based on sortBy
        return [...books].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }, [books, sortBy]);

    return sortedBooks;
};

export default useBookSorter;
