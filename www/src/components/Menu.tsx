import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FormEvent, useState } from "react";


interface Props {
  currentCity: string;
}

export default function Menu({currentCity}: Props) {
  const [city, setCity] = useState(currentCity)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    window.location.href = `/tour?city=${city}`
  }
  
  return (
    <form
      className="flex sticky w-full top-[10px] z-10"
      onSubmit={handleSubmit}
    >
      <Input
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <Button variant="ghost"><Search size={16} /></Button>
    </form>
  )
}