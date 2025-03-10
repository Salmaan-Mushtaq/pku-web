import { Card, CardContent } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import bg from "../bg.png";
import logo from "../logo.jpg";
import { Apple, Calculator, Search } from "lucide-react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute top-4 left-4">
        <img src={logo} alt="PKU Bite Logo" className="h-12" />
      </div>
      
      <Card className="border-green-500  border-3 w-full max-w-[800px] mx-4 bg-white rounded-lg p-4">
        <CardContent className="flex flex-col items-center gap-4 py-8">
          <div className="w-full max-w-[450px] border border-green-500 rounded-lg p-4 mt-4 bg-white">
            <Link
              to="/food"
              search={
                {
                  pageNo:1
                }
              }
              className="flex items-center justify-center gap-3 w-full p-2 text-black"
            >
              <Search className="text-black" />
              <span className="font-medium text-lg">Search by Food Name</span>
            </Link>
          </div>
          
          <div className="w-full max-w-[450px] border border-green-500 rounded-lg p-4 bg-white">
            <Link
              to="/demo/tanstack-query"
              className="flex items-center justify-center gap-3 w-full p-2 text-black"
            >
              <Calculator className="text-black" />
              <span className="font-medium text-lg">Protein Exchange Calculator</span>
            </Link>
          </div>
          
          <div className="w-full max-w-[450px] border border-green-500 rounded-lg p-4 bg-white">
            <Link
              to="/category"
              className="flex items-center justify-center gap-3 w-full p-2 text-black"
            >
              <Apple className="text-black" />
              <span className="font-medium text-lg">Look Up by Food Category</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;