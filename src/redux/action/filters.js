export const setSortBy = (type) => ({
     type: 'SET_SORT_BY', 
     payload: type,
    })
    
export const setCategory = (catIndex) => ({
     type: 'SET_CATEGORY', 
     payload: catIndex, 
    })

export const setSize = (size) => ({
     type: 'SET_SIZE', 
     payload: size, 
    })
