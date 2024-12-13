import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function HeaderUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  return (
    <div className="flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 w-full rounded-lg p-2 bg-accent">
            <Avatar className="size-11 rounded-sm">
              <AvatarImage src={user.avatar}  alt={user.name} />
              <AvatarFallback className="bg-white" >CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight text-ellipsis overflow-hidden">
              <span className="font-semibold">{user.name}</span>
              <span className="text-xs text-muted-foreground text-ellipsis">{user.email}</span>
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuItem>
            Switch to Work Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            Add Another Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            Sign in with Different Account
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}