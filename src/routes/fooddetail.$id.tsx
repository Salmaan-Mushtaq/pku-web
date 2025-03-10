import { useQuery } from '@tanstack/react-query';
import { createFileRoute, useParams } from '@tanstack/react-router'



export const Route = createFileRoute('/fooddetail/$id')({
  component: RouteComponent,
})



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
async function fetchFoodDetail( id: number) {
    const response = await fetch(
      `https://api.pkubite.com/api/FoodDetail/GetById?Id=${id}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.result.data;
  }

function RouteComponent() {
const { foodId } = useParams({ strict: false });



    



    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['subcategory',foodId],
        queryFn: () => fetchFoodDetail( Number(foodId)),
        
      });
    
      if (isLoading) {
        return <span>Loading...</span>;
      }
    
      if (isError) {
        return <span>Error: {error?.message}</span>;
      }

      return (
        <div className="container mx-auto max-w-7xl bg-white rounded-lg p-4">
          
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {data?.map((food: FoodDetails) => (
              <div
                key={food.id}
                className="bg-gray-100 shadow-md flex flex-col items-center rounded-lg p-4"
              
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
    
         
         
        </div>
      );
}
