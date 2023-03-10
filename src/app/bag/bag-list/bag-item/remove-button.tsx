import React from "react"
import { useToast } from "@/hooks/ui/use-toast"
import { Button } from "@/ui/button"
import { Icons } from "@/ui/icons"

interface RemoveButtonProps {
  handleRemove: () => Promise<boolean>
}

export const RemoveButton = ({ handleRemove }: RemoveButtonProps) => {
  const [removing, setRemoving] = React.useState(false)
  const { toast } = useToast()
  return (
    <Button
      size="sm"
      variant="ghost"
      disabled={removing}
      onClick={async () => {
        setRemoving(true)
        const removed = await handleRemove()
        if (!removed) {
          toast({
            variant: "destructive",
            title: "Ups! Algo salió mal",
            description: "No se pudo eliminar el producto de tu bolsa",
          })
        } else {
          toast({
            description: "El producto ha sido eliminado de tu bolsa",
          })
        }
        setRemoving(false)
      }}
    >
      <Icons.remove className="h-4 w-4" />
    </Button>
  )
}
