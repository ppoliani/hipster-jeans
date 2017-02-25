namespace Hipster

open Suave.Swagger
open Rest

[<AutoOpen>]
module Data =
  [<CLIMutable>]
  type Sale =
    { OrderDate:int
      DeliveryCountry:string
      Manufacturer:string
      Gender:string
      Size:string
      colour:string
      style:string
      count:uint64 }

  let getData =
     JSON { Id=45; Name="category 45" }
