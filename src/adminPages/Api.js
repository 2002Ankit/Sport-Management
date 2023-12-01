export const getUsers = ()=>{
    return fetch("https://dummyjson.com/users").then((res) => res.json());
}

export const getApplicant = () => {
    return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
  };