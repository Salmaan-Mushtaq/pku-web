import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { Search } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router'; 
export const Route = createFileRoute('/category')({
  component: RouteComponent,
});

interface Food {
  id: number;
  name: string;
  foodCategoryImagepath: string;
}

async function fetchCategory() {
  const response = await fetch('https://api.pkubite.com/api/FoodCategory/GetAll');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.result.data;
}

function RouteComponent() {
  const { isLoading,  data,  } = useQuery({
    queryKey: ['category'],
    queryFn: fetchCategory,
  });

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const filteredData = data?.filter((food: Food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCardClick = (foodId: number) => {
    
    navigate({ to: `/subcategory/${foodId}` })
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className="container mx-auto max-w-7xl bg-white rounded-lg p-4">
      <div className="p-4 flex items-center relative">
        <input
          type="text"
          placeholder="Search by category name"
          value={searchQuery}
          onChange={onSearch}
          className="p-2 border rounded-md w-full pr-10"
        />
        <Search className="absolute right-8" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {filteredData?.length > 0 ? (
          filteredData.map((food: Food) => (
            <div
              key={food.id}
              className="bg-gray-100 shadow-md flex flex-col items-center rounded-lg p-4 cursor-pointer"
              onClick={() => handleCardClick(food.id)} 
            >
              <div className="flex h-20 justify-center items-center">
                <img
                  src={food.foodCategoryImagepath}
                  alt={food.name}
                  className="object-cover rounded-md w-full h-full"
                />
              </div>
              <div className="mt-2">
                <h3 className="font-semibold text-lg text-center">{food.name}</h3>
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
