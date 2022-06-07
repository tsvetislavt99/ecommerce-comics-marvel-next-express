export function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export function getNeighbours(currentPage: number, totalPages: number) {
    if (currentPage === 1) {
        if (totalPages === 4) {
            return [2, 3, 4];
        } else if (totalPages === 3) {
            return [2, 3];
        } else if (totalPages === 2) {
            return [2];
        } else {
            return [2];
        }
    }
    if (totalPages >= currentPage + 1) {
        return [currentPage - 1, currentPage + 1];
    } else {
        return [currentPage - 2, currentPage - 1];
    }
}
