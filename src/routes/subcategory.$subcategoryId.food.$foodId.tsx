import { useQuery } from '@tanstack/react-query';
import { createFileRoute,  useParams } from '@tanstack/react-router';

interface SubCategory {
  id: number;
  foodSubCategoryId: number;
  foodSubCategoryName: string;
  foodCategoryId: number;
  foodCategoryName: string;
  leadFoodName: string;
  fullFoodName: string;
  aspartameWarning: boolean;
  isLowInProtien: boolean;
  foodExchangeId: number;
  foodRecipes: [];
  foodReferences: [];
  name: string;
  foodImagepath: string;
}

async function fetchSubCategory(pageNo: number, pageSize: number, foodSubCategoryId: number) {
  const response = await fetch(
    `https://api.pkubite.com/api/FoodDetail/GetAllBySubCategoryId?pageNo=${pageNo}&pageSize=${pageSize}&foodSubCategoryId=${foodSubCategoryId}`
  );
  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }
  const data = await response.json();
  return data.result.data;
}

export const Route = createFileRoute('/subcategory/$subcategoryId/food/$foodId')({
  component: RouteComponent,
});

function RouteComponent() {
  
  const pageNo = 1;
  const pageSize = 10;
  const { foodId } = useParams({ strict: false });
  const foodSubCategoryId = Number(foodId);
  

  const { data } = useQuery({
    queryKey: ['subcategory-food', foodSubCategoryId],
    queryFn: () => fetchSubCategory(pageNo, pageSize, foodSubCategoryId),
    
  });
  
console.log("sub ca",foodSubCategoryId)
  console.log(data);

  return (
    <div className="container mx-auto max-w-7xl bg-white rounded-lg p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {data?.length > 0 ? (
          data.map((food: SubCategory) => (
            <div key={food.id} className="bg-gray-100 shadow-md flex flex-col items-center rounded-lg p-4 cursor-pointer">
              <div className="mt-2">
              <div className="flex h-20 w-34 object-contain">
              <img
                src={food.foodImagepath}
                alt={food.foodCategoryName}
                className="object-cover rounded-md w-full h-full"
              />
            </div>
                <h3 className="font-semibold text-lg text-center">{food.name}</h3>
                <h3 className="font-semibold text-lg text-center">{food.leadFoodName}</h3>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center">No Records found.</div>
        )}
      </div>
    </div>
  );
}
