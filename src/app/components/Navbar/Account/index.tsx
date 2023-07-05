import { useState } from "react"
import { Guest } from "./Guest";
import { User } from "./User";

export function Account() {
  const [isGuest, setIsGuest] = useState<boolean>(true);

  return (
    <div className="col-span-3 justify-end flex">
      {isGuest ? <Guest /> : <User />}
    </div>
  )
}
