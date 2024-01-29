'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { FormEvent, useState } from "react";

// / -> /tour?city=rj

export default function Page() {
  const [city, setCity] = useState('')
  
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    
    window.location.href = `/tour?city=${city}`
  }

  return (
    <div className="h-full w-full flex flex-col
      items-center justify-center
    ">
      <div className="w-full max-w-[400px]
        flex flex-col items-center justify-center
      ">
        <h1 className="text-6xl">Turistando</h1>

        <form onSubmit={handleSubmit} className="w-full mt-2">
          <Input
            placeholder="Para onde você vai?"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <Button className="w-full mt-2">
            <Search size={16} className="mr-1" /> Buscar
          </Button>
        </form>
      </div>
    </div>
  )
}

// app/page.tsx -> /
// app/abc/page.tsx -> /abc