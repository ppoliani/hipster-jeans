namespace Hipster

open System
open Suave.Swagger
open Rest

[<AutoOpen>]
module Data =
  let countries = [| "Germany"; "UK"; "USA"; "Greece"; "Spain"; "France"; "Italy"; "Netherlands"; "Belgium" |]
  let manufacturers = [| "Denzil Jeans"; "The Hipster Jeans Company"; "Raulph Lauren"; "Tommy Hilfiger"; "Lacoste"; "Gant"; "Armani" |]
  let Genders= [| "Male"; "Female" |]
  let sizes = [| "16"; "32/32"; "34/34"; "32/34"; "18"; "20"; "24"; "36/34"; "36/36"; "38/38" |]
  let colours = [| "red"; "Dark Blue"; "Light Blue"; "Yellow"; "Black"; "white" |]
  let styles = [| "Relaxed"; "Skinny"; "Slim"; "Boot Cut" |]

  let getRandomDate =
    let a = new System.DateTime()
    let b = new System.DateTime()
    a


  [<CLIMutable>]
  type Sale =
    { OrderDate:int
      DeliveryCountry:string
      Manufacturer:string
      Gender:string
      Size:string
      Colour:string
      Style:string
      Count:uint64 }

  let initArray _ =
    { OrderDate=45
      DeliveryCountry="category 45"
      Manufacturer="asd"
      Gender="dfsdf"
      Size="asdasd"
      Colour="sdfsf"
      Style="dfsdf"
      Count=10UL}

  let getData =
     JSON (Array.init <| 1000 <| initArray)
