import Pagination from '@/components/pagination';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
 

export const Route = createFileRoute('/food')({
//   validateSearch :(search: Record<string, number>) =>{
// return{

// }
//   },
  component: RouteComponent,
  
});

interface FoodDetails {
  id: number;
  foodSubCategoryId: number;
  foodSubCategoryName: string;
  leadFoodName: string;
  foodCategoryName: string;
  aspartameWarning: boolean;
  isLowInProtein: boolean;
  foodImagepath: string;
}

async function fetchFood(pageNo: number, pageSize: number) {
  const response = await fetch(`https://api.pkubite.com/api/FoodDetail/GetAll?pageNo=${pageNo}&pageSize=${pageSize}`);
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.result.data;
}

function RouteComponent() {
  const [pageNo, setPageNo] = useState(1); 
  const [pageSize] = useState(30);
  const navigate = useNavigate();

  const { isLoading, data } = useQuery({
    queryKey: ['food', pageNo, pageSize],
    queryFn: () => fetchFood(pageNo, pageSize),
  });
const handleCardClick = (foodId:number) =>{

  navigate({to:`/fooddetail/${foodId}`})
};
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto max-w-7xl bg-white rounded-lg p-4">
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data?.map((food: FoodDetails) => (
          <div
            key={food.id}
            className="bg-gray-100 shadow-md flex flex-col items-center rounded-lg p-4"
            onClick={()=> handleCardClick(food.id)}
          >
            <div className="flex h-20 justify-center items-center">
              <img
                src={food.foodImagepath}
                alt={food.foodCategoryName}
                className="object-cover rounded-md w-full h-full"
              />
            </div>
            <div className="mt-2">
              <h3 className="font-semibold text-lg text-center">{food.leadFoodName}</h3>
            </div>
          </div>
        ))}
      </div>

     
      <Pagination pageNo={pageNo} setPageNo={setPageNo} isLoading={isLoading} />
    </div>
  );
}
