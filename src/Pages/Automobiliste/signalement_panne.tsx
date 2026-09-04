import { useState } from "react"

import { PanneSidebar } from "@/components/ui/pannesidebar"
import { PanneMap } from "@/components/ui/panne-map"
import { PanneSelector } from "@/components/ui/panne-selector"
import { EmergencyButton } from "@/components/ui/urgence-btn"

export default function PannePage() {
  const [selectedPanne, setSelectedPanne] = useState("Pneu crevé")

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F8FAFC]">

      {/* SIDEBAR */}
      <PanneSidebar />

      {/* CARTE */}
      <main className="relative flex-1 overflow-hidden">

        <PanneMap />

        {/* BOUTON URGENCE */}
        <EmergencyButton />

      </main>

      {/* PANNEAU DROIT */}
      <aside className="w-[480px] overflow-y-auto border-l border-slate-200 bg-white">

        <PanneSelector
          selectedPanne={selectedPanne}
          onSelect={setSelectedPanne}
        />

      </aside>

    </div>
  )
}