export const getUserProfile = ()=>{
    return fetch("https://dummyjson.com/users").then((res) => res.json());
}

export const getComments = () => {
    return fetch("https://dummyjson.com/comments").then((res) => res.json());
  };