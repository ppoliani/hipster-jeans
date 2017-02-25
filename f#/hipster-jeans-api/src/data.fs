namespace Hipster

open System
open Suave.Swagger
open Rest

[<AutoOpen>]
module Data =
  let countries = [| "Germany"; "UK"; "USA"; "Greece"; "Spain"; "France"; "Italy"; "Netherlands"; "Belgium" |]
  let manufacturers = [| "Denzil Jeans"; "The Hipster Jeans Company"; "Raulph Lauren"; "Tommy Hilfiger"; "Lacoste"; "Gant"; "Armani" |]
  let genders= [| "Male"; "Female" |]
  let sizes = [| "16"; "32/32"; "34/34"; "32/34"; "18"; "20"; "24"; "36/34"; "36/36"; "38/38" |]
  let colours = [| "red"; "Dark Blue"; "Light Blue"; "Yellow"; "Black"; "white" |]
  let styles = [| "Relaxed"; "Skinny"; "Slim"; "Boot Cut" |]
  let rnd = System.Random()
  let getRandomValueFromArray (arr: _[]) =
    let index = rnd.Next(0, arr.Length - 1)
    arr.[index]

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
      DeliveryCountry=getRandomValueFromArray countries
      Manufacturer=getRandomValueFromArray manufacturers
      Gender=getRandomValueFromArray genders
      Size=getRandomValueFromArray sizes
      Colour=getRandomValueFromArray colours
      Style=getRandomValueFromArray styles
      Count=getRandomValueFromArray [|1UL..100UL|]}

  let getData =
     JSON (Array.init <| 1000 <| initArray)
