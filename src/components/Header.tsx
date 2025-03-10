import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Home, Search, Calculator, Info, House } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "../logo.jpg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
      <Link to="/">
        <img src={logo} alt="PKU Bite Logo" className="w-12 h-12" />
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
       
            <Menu className="mr-2 cursor-pointer" size={38} />
           
         
        </SheetTrigger>
        <SheetContent side="right" className="p-0 border-l-green-500">
          <div className="bg-[#00b050] text-white p-8 flex justify-between items-center">
            <span className="font-bold text-2xl ">Menu</span>
           
          </div>
          
          <div className="p-4 flex flex-col gap-6">
            <Link 
              to="/" 
                 className="flex items-center gap-3 text-black font-semibold hover:text-green-600 hover:bg-gray-100 p-2"
            
            >
              <House size={24} />
              <span className="text-lg">Home</span>
            </Link>
            
            <Link 
              to="/food" 
                className="flex items-center gap-3 text-black font-semibold hover:text-green-600 hover:bg-gray-100 p-2"
             
            >
              <Search size={24} />
              <span className="text-lg">Search by Food Name</span>
            </Link>
            
            <Link 
              to="/food" 
                className="flex items-center gap-3 text-black font-semibold hover:text-green-600 hover:bg-gray-100 p-2"
              
            >
              <Calculator size={24} />
              <span className="text-lg">Protein Exchange Calculator</span>
            </Link>
            
            <Link 
              to="/about" 
              className="flex items-center gap-3 text-black font-semibold hover:text-green-600 hover:bg-gray-100 p-2"
             
            >
              <Info size={24} />
              <span className="text-lg">About PKU</span>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}