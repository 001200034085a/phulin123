import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import axios from "axios";

export default function FoodApp(){

    // useEffect(()=>{
    //     setTimeout=(()=>{
    //         axios.get('https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals').then(response=>{
    //            console.log(response.data)
    //         }).catch(error=>{
    //            console.log("đã sảy ra lỗi")
    //            console.log(error)
    //         }).finally(()=>{
    //         console.log("dù có lỗi như nào nó vẫn chạy")
    //         });
    //     },1000)
    // },[]);
    const [isLoading, setIsLoading]=useState(false);

    // cách 1:
    const LoadMeals=()=>{
        setIsLoading(true);
        axios.get('https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals').then(response=>{
             console.log(response.data);
             
        }).catch(error=>{
            console.log("đã xảy ra lỗi");
           
        }).finally(()=>{
             setIsLoading(false);
        })
    };
    const PostOrder=()=>{
        let data={
            name:"hello",
            age:30
        };

        axios.post('https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals',data).then(response=>{
             console.log(response);
             
        }).catch(error=>{
            console.log(error);
           
        })
    }

    // cách 2:
    // const LoadMeals= async()=>{
    //     try{
    //       let response= await axios.get('https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals');
    //       console.log(response);
    //     }catch(error){
    //         console.log("đã xảy ra lỗi");
    //     }finally{
    //         setIsLoading(false);
    //         console.log("dù có lỗi hay không nó vẫn chạy")
    //     }
       
    // };
    

    return(
        <div className="food-app">
            <Container>
                <h1>Food App</h1>
                <Button variant="primary" onClick={LoadMeals} disabled={isLoading} >{isLoading ? "Loading data...":"Load Meals"}</Button>
                <Button variant="success" onClick={PostOrder} className="ms-3" disabled={isLoading} >{isLoading ? "Posting data...":"Post order"}</Button>
            </Container>
        </div>
    )
}